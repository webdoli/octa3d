import * as THREE from 'three';
import { EditorControls } from '../EditorControls';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

import { ViewHelper } from './Viewport.ViewHelper';
import { UIPanel } from "../../libs/ui";

import { SetPositionCommand } from '../commands/SetPositionCommand';
import { SetRotationCommand } from '../commands/SetRotationCommand';

function ViewportMain ( editor ) {

    const signals = editor.signals;
    
    const clock = new THREE.Clock();
    const container = new UIPanel();
    container.setClass('viewportMain');
    container.setId('viewport_');

    //viewport render
    let renderer = null;
    let pmremGenerator = null;
    
    const camera = editor.camera;
    const scene = editor.scene;
    const sceneHelpers = editor.sceneHelpers;
    let showSceneHelpers = true;

    const objects = [];

    const gridGroup = new THREE.Group();
    sceneHelpers.add( gridGroup );

    const grid = new THREE.GridHelper( 20, 20, 0x888888 );
    grid.material.color.setHex( 0x888888 );
    grid.material.vertexColors = false;
    gridGroup.add( grid );

    const viewHelper = new ViewHelper( camera, container );

    const box = new THREE.Box3();

	const selectionBox = new THREE.Box3Helper( box );
	selectionBox.material.depthTest = false;
	selectionBox.material.transparent = true;
	selectionBox.visible = false;
    sceneHelpers.add( selectionBox );

    let objectPositionOnDown = null;
	let objectRotationOnDown = null;
	let objectScaleOnDown = null;

    // object bar 생성
    const transformControls = new TransformControls( camera, container.dom );

    transformControls.addEventListener( 'change', () => {

        const object = transformControls.object;

        if( object !== undefined ) {

            box.setFromObject( object, true );

            const helper = editor.helpers[ object.id ];

            if( helper !== undefined && helper.isSkeletonHelper !== true ) {

                helper.update();

            }

            signals.refreshSidebarObject3D.dispatch( object );

        }

        render();

    });

    transformControls.addEventListener( 'mouseDown', () => {

        const object = transformControls.object;

        objectPositionOnDown = object.position.clone();
        objectRotationOnDown = object.rotation.clone();
        objectScaleOnDown = object.scale.clone();

        controls.enabled = false;

    });

    transformControls.addEventListener( 'mouseUp', () => {

        const object = transformControls.object;

        if( object !== undefined ) {

            switch( transformControls.getMode() ) {

                case 'translate':
                    
                    if( !objectPositionOnDown.equals( object.position ) ) {

                        editor.execute( new SetPositionCommand( editor, object, object.position, objectPositionOnDown ) );
                    
                    }

                    break;

                case 'rotate':

                    if( ! objectRotationOnDown.equals( object.rotation ) ) {

                        editor.execute( new SetRotationCommand( editor, object, object.rotation, objectRotationOnDown ))

                    }

                    break;

                case 'scale':

					if ( ! objectScaleOnDown.equals( object.scale ) ) {

						editor.execute( new SetScaleCommand( editor, object, object.scale, objectScaleOnDown ) );

					}

					break;

            }

        }

        controls.enabled = true;

    })

    sceneHelpers.add( transformControls );



    const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();



    // viewport control
    const controls = new EditorControls( camera, container.dom );
    controls.addEventListener( 'change', () => {

        signals.cameraChanged.dispatch( camera ); // Add: ViewportMain.js
        signals.refreshSidebarObject3D.dispatch( camera ); // Add: Sidebar.Object.js

    });

    viewHelper.center = controls.center;


    // Events
    function updateAspectRatio(x) {
            
        camera.aspect = container.dom.offsetWidth / container.dom.offsetHeight;
        camera.updateProjectionMatrix();

    }

    function getIntersects( point ) {

		mouse.set( ( point.x * 2 ) - 1, - ( point.y * 2 ) + 1 );

		raycaster.setFromCamera( mouse, camera );

		const objects = [];

		scene.traverseVisible( function ( child ) {

			objects.push( child );

		} );

		// sceneHelpers.traverseVisible( function ( child ) {

		// 	if ( child.name === 'picker' ) objects.push( child );

		// } );

		return raycaster.intersectObjects( objects, false );

	}

    const onDownPosition = new THREE.Vector2();
	const onUpPosition = new THREE.Vector2();
	const onDoubleClickPosition = new THREE.Vector2();

    function getMousePosition( dom, x, y ) {

		const rect = dom.getBoundingClientRect();
		return [ ( x - rect.left ) / rect.width, ( y - rect.top ) / rect.height ];

	}

    function handleClick() {

		if ( onDownPosition.distanceTo( onUpPosition ) === 0 ) {

			const intersects = getIntersects( onUpPosition );
			signals.intersectionsDetected.dispatch( intersects );

			render();

		}

	}

    function onMouseDown( event ) {

		// event.preventDefault();

        if ( event.target !== renderer.domElement ) return;

		const array = getMousePosition( container.dom, event.clientX, event.clientY );
		onDownPosition.fromArray( array );

		document.addEventListener( 'mouseup', onMouseUp );

	}

    function onMouseUp( event ) {

		const array = getMousePosition( container.dom, event.clientX, event.clientY );
		onUpPosition.fromArray( array );

		handleClick();

		document.removeEventListener( 'mouseup', onMouseUp );

	}

    function onDoubleClick( event ) {

		const array = getMousePosition( container.dom, event.clientX, event.clientY );
		onDoubleClickPosition.fromArray( array );

		const intersects = getIntersects( onDoubleClickPosition );

		if ( intersects.length > 0 ) {

			const intersect = intersects[ 0 ];

			signals.objectFocused.dispatch( intersect.object );

		}

	}

    container.dom.addEventListener( 'mousedown', onMouseDown );
	//container.dom.addEventListener( 'touchstart', onTouchStart );
	container.dom.addEventListener( 'dblclick', onDoubleClick );


    //signals
    signals.rendererCreated.add( function(newRenderer) {

        if( renderer !== null ) {
            //renderer.setAnimationLoop( null );
            renderer.dispose();
            container.dom.removeChild( renderer.domElement );
        }

        renderer = newRenderer;

        renderer.setAnimationLoop( animate );
        renderer.setClearColor( 0xaaaaaa );

        //console.log('offsetWidth: ' + document.querySelector('.mocut-viewport-viewport').offsetWidth );

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( container.dom.offsetWidth, container.dom.offsetHeight );

        pmremGenerator = new THREE.PMREMGenerator( renderer );
        pmremGenerator.compileEquirectangularShader();

        container.dom.appendChild( renderer.domElement );

        render();

    });

    signals.rendererUpdated.add( function() {

        scene.traverse( (child) => {

            if( child.material !== undefined ) {
                child.material.needsUpdate = true;
            }
        });

        render();

    });

    signals.transformModeChanged.add( function( mode ) {

        transformControls.setMode( mode );

    });

    signals.cameraChanged.add( () => {

        render();

    });

    signals.viewportCameraChanged.add( function() {

        const viewportCamera = editor.viewportCamera;

        if( viewportCamera.isPerspectiveCamera ) {

            viewportCamera.aspect = editor.camera.aspect;
            viewportCamera.projectionMatrix.copy( editor.camera.projectionMatrix );

        } else if ( viewportCamera.isOrthographicCamera ) {

            // Todo
        }

        controls.enabled = ( viewportCamera === editor.camera );

        render();

    });

    signals.objectChanged.add( function ( object ) {

		if ( editor.selected === object ) {

			box.setFromObject( object, true );

		}

		if ( object.isPerspectiveCamera ) {

			object.updateProjectionMatrix();

		}

		//const helper = editor.helpers[ object.id ];

		//if ( helper !== undefined && helper.isSkeletonHelper !== true ) {

		//	helper.update();

		//}

		render();

	} );

    signals.showHelpersChanged.add( function( showHelpers ) {

        showSceneHelpers = showHelpers;
        transformControls.enabled = showHelpers;

        render();

    });

    signals.objectSelected.add( function ( object ) {

		selectionBox.visible = false;
		transformControls.detach();

		if ( object !== null && object !== scene && object !== camera ) {

			box.setFromObject( object, true );

			if ( box.isEmpty() === false ) {

				selectionBox.visible = true;

			}

			transformControls.attach( object );

		}

		render();

	} );



    signals.windowResize.add( function() {

        updateAspectRatio();
        renderer.setSize( container.dom.offsetWidth, container.dom.offsetHeight );
        render();
    });

    signals.sceneGraphChanged.add( function() {

        render();

    });



    //animate
    function animate() {

        // requestAnimationFrame( animate );
        // renderer.render( scene, camera );

    }

    let startTime = 0;
    let endTime = 0;


    // render
    function render() {

        startTime = performance.now();
        //scene.add( grid );
/*
        for( let item in container.dom ) {
            console.log('item: ' + item );
        }
*/  
        renderer.setViewport( 0, 0, container.dom.offsetWidth, container.dom.offsetHeight );
        renderer.render( scene, editor.viewportCamera );
        //scene.remove( gridGroup );

        
        if( camera === editor.viewportCamera ) {

            renderer.autoClear = false;
            
            if( showSceneHelpers === true ) renderer.render( sceneHelpers, camera );
            //if( vr.currentSession === null ) 
            renderer.autoClear = true;
        }
        

        endTime = performance.now();
        editor.signals.sceneRendered.dispatch( endTime - startTime );

    }


    return container;
}

export { ViewportMain }