import { Editor } from "./components/Editor";
import { ViewportMain } from "./components/viewport/ViewportMain";
import { MenuTop } from "./components/MenuTop";
// import { Menubar } from "./components/Menubar";
import { Resizer } from "./components/Resizer";
import { Sidebar } from "./components/viewport/Sidebar";
import { Timeline } from "./components/viewport/Timeline";

//import DB
import { getDatas } from "./hooks/firebaseCRUD";

// css import
import menuTopCSS from "./components/MenuTopCSS";
import menubarCSS from "./components/MenubarCSS";
import viewportMainCSS from "./components/viewport/viewportMainCSS";

const mount = ( props ) => {

    let { el, params } = props;
    let docID = new Array();
    // 1] params값이 있을 경우
    if( params.size > 0 ) {
        
        for( let doc of params.values() ) {
            
            docID.push( doc );

        }
    }

    var editor = new Editor();
    const signals = editor.signals;
    
    // 2] promise 구문으로 파이어베이스에서 3D asset 받아오기 

    // 3] Menu.File 모듈에 3D파일, 텍스처 보내기
    

    const container = document.createElement('div');
    container.setAttribute( 'class', 'container-editor');

    const menutopStyle = document.createElement('style');
    menutopStyle.innerHTML = menuTopCSS;

    const viewportMainStyle = document.createElement('style');
    viewportMainStyle.innerHTML = viewportMainCSS;
   
    // const menubarStyle = document.createElement('style');
    // menubarStyle.innerHTML = menubarCSS;
    
    el.appendChild( menutopStyle );
    el.appendChild( viewportMainStyle );
    // el.appendChild( menubarStyle );
    el.appendChild( container );

    const viewport = new ViewportMain( editor );
    container.appendChild( viewport.dom );

    const menuTop = new MenuTop( editor );
    container.appendChild( menuTop.dom );

    // const menubar = new Menubar( editor );
    // container.appendChild( menubar.dom );

    const sidebar = new Sidebar( editor );
    container.appendChild( sidebar.dom );

    const resizer = new Resizer( editor );
    container.appendChild( resizer.dom );

    const timeline = new Timeline( editor );
    container.appendChild( timeline.dom );

    function onWinResize() {
        editor.signals.windowResize.dispatch();
    }

    async function initialLoading( docID ) {

        console.log('시작 시 로딩 파일 있음: ', docID );
        // doc ID로 파이어베이스에서 model, texture 파일 받음

        getDatas( 'models', docID, editor )
            .then( (res) => {
                console.log('resFileDatas: ', res );
                editor.loader.loadFiles( res );
            });
        
        // console.log('resFileDatas length: ', resFileDatas.length );
        
        // editor.loader.loadFiles( startModel.files );
        //@ editor.loader.loadFiles( resFileDatas );
        // Loader에 파일 넘기기 실행
        
    }

    //시작 에셋 로딩
    if( docID ) initialLoading( docID );

    window.addEventListener('resize', onWinResize );

    return {
        res: '@@ Octa3D Editor Page 유저DB window 저장 @@'
    }

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