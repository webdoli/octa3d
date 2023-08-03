import { UIDiv } from '../libs/ui';
import { MenubarFile } from './Menubar.File';

    function Menubar ( editor ) {
    
        const container = new UIDiv();
        container.setClass('mocut-menu');

        const logo = document.createElement('img');
        logo.setAttribute( 'class', 'mainLogo') ;       
        logo.src = './img/mocut_logo.png';
        
        container.dom.appendChild( logo );
        container.add( new MenubarFile( editor ) );
        
        //container.add( new MenubarFile( editor ).lastMenu );
        //container.add( new MenubarFile( editor ).container );

        return container

    }

export { Menubar }