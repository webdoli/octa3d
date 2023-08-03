console.log('@ octa-editor start @');
import { Editor } from "./components/Editor";

const mount = ( el ) => {

    var editor = new Editor();
    const signals = editor.signals;

    const container = document.createElement('div');
    container.setAttribute( 'class', 'octa3d-editor');

    el.appendChild( container );

}

if( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#editor-root');
    if( devRoot ) mount( devRoot );

}

if ( process.env.NODE_ENV === 'production' ) {

    const devRoot = document.querySelector('#editor-root');
    if ( devRoot ) mount( devRoot );

}

export { mount }