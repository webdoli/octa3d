import { UIElement } from '../libs/ui';

function Resizer( editor ) {

    const signals = editor.signals;
    const dom = document.createElement( 'div' );
    dom.id = 'resizer';

    function onPointerDown( evt ) {
        
        if( evt.isPrimary === false ) return;

        dom.ownerDocument.addEventListener( 'pointermove' , onPointerMove );
        dom.ownerDocument.addEventListener( 'pointerup', onPointerUp );
    }


    function onPointerUp( evt ) {
        
        if( evt.isPrimary === false ) return;

        dom.ownerDocument.removeEventListener( 'pointermove', onPointerMove );
        dom.ownerDocument.removeEventListener( 'pointerup', onPointerUp );
    }


    function onPointerMove( evt ) {

        if( evt.isPrimary === false ) return;
        
        const offsetWidth = document.body.offsetWidth;
        const offsetLeft = document.querySelector('.containerMenu').offsetWidth;
        const clientX = evt.clientX;
 
        const cX = clientX < offsetLeft ? offsetLeft : clientX > offsetWidth ? offsetWidth : clientX;
        const x = offsetWidth - cX;

        dom.style.right = x + 'px';

        document.getElementById( 'sidebar' ).style.width = x + 'px';
        document.querySelector('.viewportMain').style.right = x + 'px';

        signals.windowResize.dispatch();
    
    }

    dom.addEventListener( 'pointerdown', onPointerDown );

    return new UIElement( dom );

}

export { Resizer }