
function SidebarSettingsShortcuts ( editor ) {

    const config = editor.config;
    const signals = editor.signals;
    const IS_MAC = navigator.platform.toUpperCase().indexOf( 'MAC' ) >= 0;

    document.addEventListener( 'keydown', ( event ) => {

        switch( event.key.toLowerCase() ) {

            case config.getKey( 'settings/shortcuts/focus' ):
                if( editor.selected !== null ) {
                    editor.focus( editor.selected );
                }
                break;

            case config.getKey( 'settings/shortcuts/translate' ):
                signals.transformModeChanged.dispatch( 'translate' );
                break;

            case config.getKey( 'settings/shortcuts/rotate' ):
                signals.transformModeChanged.dispatch( 'rotate' );
                break;

            case config.getKey( 'settings/shortcuts/scale' ):
                signals.transformModeChanged.dispatch( 'scale' );
                break;

            //undo, redo
            case config.getKey( 'settings/shortcuts/undo' ):
                if( IS_MAC ? event.metaKey : event.ctrlKey ) {

                    event.preventDefault(); // Prevent browser specific hotkeys

                    if ( event.shiftKey ) {

						editor.redo();

					} else {

						editor.undo();

					}

                }

                break;

        }

    })


}

export { SidebarSettingsShortcuts }