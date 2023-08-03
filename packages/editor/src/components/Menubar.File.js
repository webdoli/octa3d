import * as THREE from 'three';
import { UIDiv, UIUl, UILi } from '../libs/ui';
import { UIBoolean } from '../libs/ui.three';

const setAttributes = (el, object) => {
    for (let key in object) {
      if (key === "addClass") {
        el.classList.add(object[key]);
      } else if (key === "removeClass") {
        el.classList.remove(object[key]);
      } else {
        el.setAttribute(key, object[key]);
      }
    }
  };

const makeList = ( src, type, name, clsName ) => {

  const li = document.createElement('li');
  const link = document.createElement('a');
  const input = document.createElement('input');
  const img = document.createElement('img');

  link.href = '#';
  link.className = clsName;

  img.src = src;
  li.className = 'drop-down';

  const compEL = ( el, parentEl ) => {
  
    return parentEl.appendChild( el );

  }

  if( type === 'main' ) {

    img.className = `icons`;
    compEL( img, link );
    compEL( link, li );

  } else if ( type === 'last') {

    img.className = `${ name }`;
    compEL( img, link );
    compEL( link, li );

  }

  return li;

}


function MenubarFile( editor ) {

    const config = editor.config;

    let currentRenderer = null;
    const signals = editor.signals;
    //const antialiasBoolean = new UIBoolean( config.getKey( 'project/renderer/antialias' ) ).onChange( createRenderer ); 

    const container = new UIDiv();
    const mainMenu = new UIUl();
    const lastMenu = new UIUl();

    mainMenu.setClass('mainMenu');
    lastMenu.setClass('lastMenu');
    container.setClass('containerMenu');

    const newFileIcon = makeList( './img/newFile_.png', 'main', 'drop-down');
    const uploadIcon = makeList( './img/up-loading.png', 'main', 'drop-down', 'upload-btn');
    const downloadIcon = makeList( './img/downloading-data.png', 'main', 'drop-down', 'export-scn');
    const searchIcon = makeList( './img/search_.png', 'main', 'drop-down');
    const lightIcon = makeList( './img/light01.png', 'main', 'drop-down');
    const renderIcon = makeList( './img/reder01.png', 'main', 'drop-down');
    const settingIcon = makeList( './img/setting.png', 'last', 'lastMenuIcon');
    
    mainMenu.dom.append( 
      newFileIcon, 
      uploadIcon, 
      downloadIcon,
      searchIcon,
      lightIcon,
      renderIcon    
    );

    lastMenu.dom.append( settingIcon );

    container.add( mainMenu );
    container.add( lastMenu );

    const dropdownMenuBox = new UIDiv();
    dropdownMenuBox.setClass('drop-down__menu-box');

    const dropdownUL = new UIUl();
    dropdownUL.setClass('drop-down__menu');

    const dropdownItem = new UILi('open File');
    dropdownItem.setClass('drop-down__item');

    dropdownUL.add( dropdownItem );
    dropdownMenuBox.add( dropdownUL );

    let firstEle = mainMenu.dom.querySelector('.mainMenu>li:nth-child(1)');
    let uploadBtn = mainMenu.dom.querySelector( '.upload-btn' );
    let exportBtn = mainMenu.dom.querySelector( '.export-scn' );

    firstEle.appendChild( dropdownMenuBox.dom );

   //Import
   const form = document.createElement( 'form' );
   form.style.display = 'none';
   container.dom.appendChild( form );
   
   const fileInput = document.createElement( 'input' );
   fileInput.multiple = true;
   fileInput.type = 'file';
   fileInput.setAttribute( 'class', 'fileIpt' );
   fileInput.addEventListener( 'change', () => {

      editor.loader.loadFiles( fileInput.files );
      form.reset();

   });
    
   form.appendChild( fileInput );


    //Evnets
    firstEle.addEventListener('click', () => {
      
      dropdownMenuBox.dom.classList.toggle( 'drop-down--active' );

    });

    uploadBtn.addEventListener( 'click', (e) => {

      e.preventDefault();
      console.log('업로드 클릭');
      fileInput.click();

    });

    exportBtn.addEventListener( 'click', (e) => {

      e.preventDefault();

      let output = editor.toJSON();
      output.metadata.type = 'App';
      delete output.history;

      output = JSON.stringify( output, null, '\t' );
      output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

      const title = config.getKey( 'project/title' );
      const exportFile = new Blob( [ output ], { type: "application/json" } );

      save( exportFile, ( title !== '' ? title : 'untitled' ) + '.json' );
      

    })


    signals.bodyClicked.add(( e ) => {

      e.preventDefault();

      if( e.target.contains( dropdownMenuBox.dom ) ) {
          
          dropdownMenuBox.dom.classList.remove('drop-down--active')

      } else {
          
          e.stopPropagation();
          
      }
      
    });

    const link = document.createElement( 'a' );
    function save( blob, filename ) {

      if( link.href ) {

        URL.revokeObjectURL( link.href );

      }

      link.href = URL.createObjectURL( blob );
      link.download = filename || 'data.json';
      link.dispatchEvent( new MouseEvent( 'click' ) );

    }


    function createRenderer() {

      let currentRenderer = new THREE.WebGLRenderer();
      //currentRenderer.outputEncoding = THREE.sRGBEncoding;
  
      signals.rendererCreated.dispatch( currentRenderer );
      //signals.rendererUpdated.dispatch();
  
    }
  
    createRenderer();

  return container;

}

export { MenubarFile }