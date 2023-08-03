import * as THREE from 'three';
import { Config } from './Config';
import { Loader } from './Loader';
import { History as _History } from './History';
import { Strings } from './Strings';
import { Selector } from './viewport/Viewport.Selector';

var Signal = require( 'signals' );

// Editor: 해당 씬을 Export할 때, 담겨야하는 데이터에 관해 기록되는 엔진
// 1*생성 2*읽기 3*업데이트 4*삭제
// 1) Default카메라 생성
var _DEFAULT_CAMERA = new THREE.PerspectiveCamera( 50, 1, .01, 1000 );
_DEFAULT_CAMERA.name = 'Camera';
_DEFAULT_CAMERA.position.set( 0, 5, 10 );
_DEFAULT_CAMERA.lookAt( new THREE.Vector3() );

function Editor() {

    this.signals = {
        bodyClicked: new Signal(), // [*Add]: Menubar.File.js [*Dispatch]: bootstrap.js

        windowResize: new Signal(), // [*Add]: ViewportMain.js, Player.js [*Dispatch]: Resizer.js
        cameraAdded: new Signal(), // [*Add]: Viewport.Camera.js [*Dispatch]: Editor.js
        cameraChanged: new Signal(), // [*Add]: ViewportMain.js [*Dispatch]: ViewportMain.js
        cameraRemoved: new Signal(), // [*Add]: Viewport.Camera.js, [*Dispatch:]
        viewportCameraChanged: new Signal(), // [*Add]: ViewportMain.js [*Dispatch]: Editor.js        
        intersectionsDetected: new Signal(), // [*Add]: Viewport.Selector.js [*Dispatch]: ViewportMain.js
        objectFocused: new Signal(), // [*Add]: ViewportMain.js [*Dispatch]: ViewportMain.js, Editor.js
        sceneRendered: new Signal(), // [*Add]: Viewport.info.js [*Dispatch]: ViewportMain.js  

        objectAdded: new Signal(), // [*Add]: Viewport.info.js  [*Dispatch]: Editor.js(.removeCamera())
        objectChanged: new Signal(), // [*Add]: Sidebar.Object.js, ViewportMain.js  [*Dispatch]: SetUuidCommand.js
        objectSelected: new Signal(), // [*Add]: Sidebar.Animation.js, Sidebar.Geometry.js, Sidebar.Geometry.BufferGeometry.js, ViewportMain.js
        // Sidebar.Material.BooleanProperty.js, Sidebar.Material.ColorProperty.js, Sidebar.Material.ConstantProperty.js, Sidebar.Material.js,
        // Sidebar.Material.MapProperty, Sidebar.Material.NumberProperty, Sidebar.Material.Program, Sidebar.Material.RangeValueProperty,
        // Sidebar.Object, Sidebar.Project.Materials, Sidebar.Scene, Sidebar.Script, 
        // [*Detach]: Viewport.Selector.js, 
        
        objectRemoved: new Signal(),
        // Sidebar.Geometry.BufferGeometry.js, Sidebar.Material.BooleanProperty.js, 
        // Sidebar.Material.ColorProperty.js, Sidebar.Material.ConstantProperty.js, 
        // Sidebar.Material.js, Sidebar.Material.MapProperty.js, Sidebar.Material.NumberProperty.js, 
        // Sidebar.Material.Program.js, Sidebar.Material.RangeValueProperty.js, Sidebar.Object.js, 
        // Sidebar.Project.Materials.js, Sidebar.Scene.js, Sidebar.Script.js, ViewportMain.js
        // [**Dispatch] : Viewport.Selector.js
        sceneGraphChanged: new Signal(), // [*Add]: Sidebar.Scene.js, viewportMain.js 
        // [*Dispatch, Active]: Editor.js, History.js, Menubar.Edit.js, Menubar.Status.js, Sidebar.Geometry.js
        rendererCreated: new Signal(), // [*Add]: Viewport.VR.js, ViewportMain.js, Script.js, 
        // [*Dispatch]: Sidebar.Project.Renderer.js,  
        rendererUpdated: new Signal(), // [*Add]: Sidebar.Project.Renderer.js, ViewportMain.js 
        // [*Dispatch]: Sidebar.Scene.js
        editorCleared: new Signal(), // [*Add]: ViewportMain.js, Sidebar.Settings.History.js, Sidebar.Scene.js 
        // Sidebar.Project.Renderer.js, Sidebar.Project.js, Script.js, 
        // [*Dispatch]: Sidebar.Scene.js, Editor.js
        refreshSidebarObject3D: new Signal(), // [*Add]: Sidebar.Object.js [*Dispatch]: ViewportMain.js
        helperAdded: new Signal(), // [*Add]:  [*Dispatch]:
        historyChanged: new Signal(), // [*Dispatch]: History.js
        showHelpersChanged: new Signal(), // [*Add]: ViewportMain.js
        transformModeChanged: new Signal(), // [*Add]:ViewportMain.js  [*Dispatch]: Toolbar.js, Sidebar.Settings.Shortcuts
    }

    this.config = new Config();
    this.history = new _History( this );
    this.strings = new Strings( this.config );
    this.selector = new Selector( this );
    this.loader = new Loader( this );

    this.camera = _DEFAULT_CAMERA.clone();
    this.scene = new THREE.Scene();
    this.scene.name = 'Scene';

    this.sceneHelpers = new THREE.Scene();
    this.cameras = {};
    this.viewportCamera = this.camera;

    this.objects = {};
    this.geometries = {};
    this.materials = {};
    this.textures = {};
    
    this.scripts = {};

    this.mixer = new THREE.AnimationMixer( this.scene );
    
    this.selected = null;
    this.helpers = {};
    this.addCamera( this.camera );

}

Editor.prototype = {

    //1* :: Scene
    setScene: function ( scn ) {

        this.scene.uuid = scn.uuid;
        this.scene.name = scn.name;

        this.scene.background = scn.background;
        this.scene.environment = scn.environment;
        this.scene.fog = scn.fog;

        this.scene.userData = JSON.parse( JSON.stringify( scn.userData ));
        this.signals.sceneGraphChanged.active = false;

        while( scn.children.length > 0 ) { 
            
            this.addObject( scn.children[0] );
        }

        this.signals.sceneGraphChanged.active = true;
        this.signals.sceneGraphChanged.dispatch();

    },

    //1* :: Object
    addObject: function ( object, parent, index ) {

        var scope = this;

        object.traverse( ( child ) => {

            if( child.geometry !== undefined ) scope.addGeometry( child.geometry );
            if( child.material !== undefined ) scope.addMaterial( child.material );

            scope.addCamera( child );
            scope.addHelper( child );

        });

        if( parent === undefined ) {

            this.scene.add( object );

        } else {

            parent.children.splice( index, 0, object );
            object.parent = parent;

        }

        this.signals.objectAdded.dispatch( object );
        this.signals.sceneGraphChanged.dispatch();

    },

    //1* :: 특정 카메라 정보도 export되기에 Camera정보 역시 Editor에 기록되어야 됨 
    addCamera: function ( cam ) {
        if( cam.isCamera ) {
            this.cameras[ cam.uuid ] = cam;
            this.signals.cameraAdded.dispatch();
        }
    },
    
    //1* :: Helper Add
    addHelper: function () {

		var geometry = new THREE.SphereGeometry( 2, 4, 2 );
		var material = new THREE.MeshBasicMaterial( { color: 0xff0000, visible: false } );

		return function ( object, helper ) {

			if ( helper === undefined ) {

				if ( object.isCamera ) {
					helper = new THREE.CameraHelper( object );
				} else if ( object.isPointLight ) {
					helper = new THREE.PointLightHelper( object, 1 );
				} else if ( object.isDirectionalLight ) {
					helper = new THREE.DirectionalLightHelper( object, 1 );
				} else if ( object.isSpotLight ) {
					helper = new THREE.SpotLightHelper( object );
				} else if ( object.isHemisphereLight ) {
					helper = new THREE.HemisphereLightHelper( object, 1 );
				} else if ( object.isSkinnedMesh ) {
					helper = new THREE.SkeletonHelper( object.skeleton.bones[ 0 ] );
				} else if ( object.isBone === true && object.parent?.isBone !== true ) {
					helper = new THREE.SkeletonHelper( object );
				} else {
					// no helper for this object type
					return;
				}

				const picker = new THREE.Mesh( geometry, material );
				picker.name = 'picker';
				picker.userData.object = object;
				helper.add( picker );

			}

			this.sceneHelpers.add( helper );
			this.helpers[ object.id ] = helper;

			this.signals.helperAdded.dispatch( helper );

		};

	}(),
    //1* :: Geometry 추가되는 이벤트는 메인 Editor에 저장되어야 됨
    addGeometry: function( geometry ) {

    },

    //1* :: 쉐이더 변경사항 역시 Editor에 기록되어야 됨
    addMaterial: function( material ) {
        
    },

    //1* :: create JSON
    toJSON: function() {

        //script 
        //var scene = this.scene;

        return {

            metadata: {},
            project: {
                shadows: this.config.getKey( 'project/renderer/shadows' ),
				shadowType: this.config.getKey( 'project/renderer/shadowType' ),
				//vr: this.config.getKey( 'project/vr' ),
				useLegacyLights: this.config.getKey( 'project/renderer/useLegacyLights' ),
				toneMapping: this.config.getKey( 'project/renderer/toneMapping' ),
				toneMappingExposure: this.config.getKey( 'project/renderer/toneMappingExposure' )
            },
            camera: this.viewportCamera.toJSON(),
			scene: this.scene.toJSON(),
			//scripts: this.scripts,
			history: this.history.toJSON()

        }

    },
    //2* :: 현재 선택된 오브젝트는 history관련 데이터로 기록
    select: function( obj ) {

        this.selector.select( obj );

    },

    selectById: function( id ) {

        if( id === this.camera.id ) {
            
            this.select( this.camera );
            return;
        
        }

        this.select( this.scene.getObjectById( id) );

    },

    selectByUuid: function( uuid ) {

        var scope = this;

        this.scene.traverse( function( child ) {

            if( child.uuid === uuid ) {

                scope.select( child );

            }

        })

    },

    deselect: function() {

        this.selector.deselect();

    },

    focus: function ( object ) {

		if ( object !== undefined ) {

			this.signals.objectFocused.dispatch( object );

		}

	},

	focusById: function ( id ) {

		this.focus( this.scene.getObjectById( id ) );

	},

    setViewportCamera: function ( uuid ) {

        this.viewportCamera = this.cameras[ uuid ]
        this.signals.viewportCameraChanged.dispatch();

    },

    //2* :: 가장 중요** 사용자의 실행이력은 반드시 저장되어야 하고 export되어야 함
    execute: function( cmd, optionalName ) {

        this.history.execute( cmd, optionalName );

    },

    //2* :: read JSON
    objectByUuid: function( uuid ) {

        return this.scene.getObjectByProperty( 'uuid', uuid, true );

    },

    fromJSON: async function( json ) {

        var loader = new THREE.ObjectLoader();
        var camera = await loader.parseAsync( json.camera );

        this.camera.copy( camera );
        //this.signals.cameraRessetted.dispatch();

        this.history.fromJSON( json.history );
        //this.scripts = json.scripts;

        this.setScene( await loader.parseAsync( json.scene ) );
    
    },

    //3* :: update scene
    redo: function() {

        this.history.redo();
    
    },

    undo: function() {
    
        this.history.undo();
    
    },

    //4: :: Delete

    removeObject: function( obj ) {

        if( obj.parent === null ) return // avoid deleting the camera or scene

        var scope = this;

        obj.traverse( ( child ) => {

            scope.removeCamera( child );
            //scope.removeHelper( child );

            if( child.material !== undefined ) console.log('머트리얼 삭제') //scope.removeMaterial( child.material );

        });

        obj.parent.remove( obj );

        this.signals.objectRemoved.dispatch( obj );
        this.signals.sceneGraphChanged.dispatch();

    },

    removeCamera: function( camera ) {

        if( this.cameras[ camera.uuid ] !== undefined ) {

            delete this.cameras[ camera.uuid ];

            this.signals.cameraRemoved.dispatch( camera );

        }

    },

    clear: function() {

        this.history.clear();
		//this.storage.clear();

        this.camera.copy( _DEFAULT_CAMERA );
		//this.signals.cameraResetted.dispatch();

        this.scene.name = 'Scene';
		this.scene.userData = {};
		this.scene.background = null;
		this.scene.environment = null;
		this.scene.fog = null;

        var objects = this.scene.children;

        while ( objects.length > 0 ) {

			this.removeObject( objects[ 0 ] );

		}

        this.geometries = {};
		this.materials = {};
		this.textures = {};
		this.scripts = {};

        /*
        this.materialsRefCounter.clear();

		this.animations = {};
		this.mixer.stopAllAction();
        */

        this.deselect();

		//this.signals.editorCleared.dispatch();

    }


}

export { Editor }