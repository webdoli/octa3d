import * as THREE from 'three';
import { UIBreak, UIPanel } from "../../libs/ui";
import { UIOutliner } from "../../libs/ui.three";

function SidebarScene ( editor ) {

    const signals = editor.signals;
    const strings = editor.strings;

    const container = new UIPanel();
    container.setBorderTop( '0' );
    container.setPaddingTop( '20px' );

    //outliner
    const nodeStates = new WeakMap();

    function buildOption( obj, draggable ) {

        const option = document.createElement('div');
        option.draggable = draggable;
        option.innerHTML = buildHTML( obj );
        option.value = obj.id;

        //opener

        if( nodeStates.has( obj) ) {

            const state = nodeStates.get( obj )
            
            const opener = document.createElement('span');
            opener.classList.add('opener');

            if( obj.children.length > 0 ) {
                opener.classList.add( state ? 'open' : 'closed' );
            }

            opener.addEventListener('click', () => {

                nodeStates.set( obj, nodeStates.get(obj) === false );
                refreshUI();

            });

            option.insertBefore( opener, option.firstChild );
        }

        return option;
    }

    function getMaterialName( material ) {

        if( Array.isArray( material ) ) {
            
            const array = [];
            for( let i = 0; i < material.length; i ++ ) {

                array.push( material[i].name );
            
            }

            return array.join(',');
        }

        return material.name;
    }

    function escapeHTML( html ) {

        return html
            .replace( /&/g, '&amp;' )
            .replace( /"/g, '&quot;' )
            .replace( /'/g, '&#39;' )
            .replace( /</g, '&lt;' )
            .replace( />/g, '&gt;' )
    }

    function getObjectType( obj ) {

        if( obj.isScene ) return 'Scene';
        if( obj.isCamera ) return 'Camera';
        if( obj.isLight ) return 'Light';
        if( obj.isMesh ) return 'Mesh';
        if( obj.isLine ) return 'Line';
        if( obj.isPoints ) return 'Points';

        return 'Object3D';
    
    }

    function buildHTML( obj ) {

        let html = `<span class="type ${ getObjectType( obj ) }"></span> ${ escapeHTML( obj.name )}`;

        if( obj.isMesh ) {

            const geometry = obj.geometry;
            const material = obj.material;

            html += ` <span class="type Geometry"></span> ${ escapeHTML( geometry.name ) }`;
            html += ` <span class="type Material"></span> ${ escapeHTML( getMaterialName( material ) ) }`;
        }

        html += getScript( obj.uuid );

        return html;
    }

    function getScript( uuid ) {

        if( editor.scripts[ uuid ] !== undefined ) {

            return ` <span class="type Script"></span>`;

        }

        return '';

    }

    let ignoreObjectSelectedSignal = false;

    const outliner = new UIOutliner( editor );
    outliner.setId( 'outliner' );
    outliner.onChange( () => {

        ignoreObjectSelectedSignal = true;
        editor.selectById( parseInt( outliner.getValue() ) );
        ignoreObjectSelectedSignal = false;

    });

    outliner.onDblClick( () => {

        editor.focusById( parseInt( outliner.getValue() ) );

    });

    container.add( outliner );
    container.add( new UIBreak() );

    
    function refreshUI () {

        const camera = editor.camera;
        const scene = editor.scene;

        const options = [];

        options.push( buildOption( camera, false ) );
        options.push( buildOption( scene, false ) );

        ( function addObjects( objects, pad) {

            for( let i = 0, l = objects.length; i < l; i ++ ) {
                
                const object = objects[ i ];
                
                if( nodeStates.has( object ) === false ) {
                    nodeStates.set( object, false );
                }

                const option = buildOption( object, true );
                option.style.paddingLeft = ( pad * 18 ) + 'px';
                options.push( option );

                if( nodeStates.get( object ) === true ) {
                    addObjects( object.children, pad + 1 );
                }
            }

        } )( scene.children, 0 );

        outliner.setOptions( options );

        if( editor.selected !== null ) {

            outliner.setValue( editor.selected.id );

        }
    
    }

    refreshUI();

    // events

    signals.editorCleared.add( refreshUI )
    signals.sceneGraphChanged.add( refreshUI );

    signals.objectSelected.add( function ( object ) {

		if ( ignoreObjectSelectedSignal === true ) return;

		if ( object !== null && object.parent !== null ) {

			let needsRefresh = false;
			let parent = object.parent;

			while ( parent !== editor.scene ) {

				if ( nodeStates.get( parent ) !== true ) {

					nodeStates.set( parent, true );
					needsRefresh = true;

				}

				parent = parent.parent;

			}

			if ( needsRefresh ) refreshUI();

			outliner.setValue( object.id );

		} else {

			outliner.setValue( null );

		}

	} );


    return container;
}

export { SidebarScene }