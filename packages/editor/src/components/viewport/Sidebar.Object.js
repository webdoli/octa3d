import * as THREE from 'three';

import { UIPanel, UIRow, UIText, UIInput, UIButton } from '../../libs/ui';

import { SetUuidCommand } from '../commands/SetUuidCommand';

function SidebarObject ( editor ) {

    const strings = editor.strings;
    const signals = editor.signals;

    const container = new UIPanel();
    container.setBorderTop( '0' );
    container.setDisplay( 'none' );
    container.setPaddingTop( '20px' );

    //type

    const objectTypeRow = new UIRow();
	const objectType = new UIText();

    objectTypeRow.add( new UIText( strings.getKey( 'sidebar/object/type' ) ).setWidth('90px') );
    objectTypeRow.add( objectType );

    container.add( objectTypeRow );

    
    //uuid
    const objectUUIDRow = new UIRow();
    const objectUUID = new UIInput().setWidth( '102px' ).setFontSize('12px').setDisabled( true );
    const objectUUIDRenew = new UIButton( strings.getKey( 'sidebar/object/new' ) ).setMarginLeft( '7px' ).onClick( () => {

        objectUUID.setValue( THREE.MathUtils.generateUUID() );

        editor.execute( new SetUuidCommand( editor, editor.selected, objectUUID.getValue() ) );
        
    });

    objectUUIDRow.add( new UIText( strings.getKey( 'sidebar/object/uuid' ) ).setWidth( '90px' ) );
    objectUUIDRow.add( objectUUID );
    objectUUIDRow.add( objectUUIDRenew );

    container.add( objectUUIDRow );

    
    // name
    const objectNameRow = new UIRow();
    const objectName = new UIInput().setWidth( '150px' ).setFontSize( '12px' ).onChange( () => {

        // command

    });

    objectNameRow.add( new UIText( strings.getKey( 'sidebar/object/name' ) )).setWidth( '90px' );
    objectNameRow.add( objectName );

    container.add( objectNameRow );


    //

    function update() {

        const object = editor.selected;

        console.log('update!');

        if( object !== null ) {

            console.log( 'object null' );
            
        }
    }

    function updateRows( object ) {

        const properties = {

        }

        for ( const property in properties ) {

			const uiElement = properties[ property ];

			if ( Array.isArray( uiElement ) === true ) {

				for ( let i = 0; i < uiElement.length; i ++ ) {

					uiElement[ i ].setDisplay( object[ property ] !== undefined ? '' : 'none' );

				}

			} else {

				uiElement.setDisplay( object[ property ] !== undefined ? '' : 'none' );

			}

		}

    }




    // events

    signals.objectSelected.add( function ( object ) {

		if ( object !== null ) {

			container.setDisplay( 'block' );

			//updateRows( object );
			updateUI( object );

		} else {

			container.setDisplay( 'none' );

		}

	} );

    signals.objectChanged.add( (obj) => {

        if( obj !== editor.selected ) return;

        updateUI( obj );

    });

    function updateUI( object ) {

        objectType.setValue( object.type );

        objectUUID.setValue( object.uuid );
        objectName.setValue( object.name );

    }


    return container;


}

export { SidebarObject }