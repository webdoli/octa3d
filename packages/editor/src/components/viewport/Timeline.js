import { UIPanel, UIElement, UIDiv } from '../../libs/ui';


function Timeline ( editor ) {

    const signals = editor.signals;
    const dom = document.createElement( 'div' );
    dom.setAttribute('class', 'viewport-footer');

    let tmpText = document.createElement('div');
    tmpText.setAttribute('class', 'mocut-timeline');
    tmpText.innerHTML = `타임라인`;

    dom.appendChild( tmpText );
    

    return new UIElement( dom );

}

export { Timeline }