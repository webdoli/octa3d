import { UIDiv, UIH, UIUL, UILI, UIP, UIA, UIImg, UIIcon, UISpan, OctaUI, UIButton } from "../../../libs/octaUI";
import getRealData from "../../hook_getData";
import { auth } from "../../../db/firebaseDB";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { deleteAsset } from "../../hook_upload";

const profileAssetCreated = ( signals ) => {

    const tapPane = new UIDiv().setAttr({ 'class': 'tab-pane show active', 'id': 'created-assets', 'role': 'tabpanel', 'aria-labelledby':'created-assets-tab' });
    let row = new UIDiv().setAttr({ 'class': 'row justify-content-center gx-3 gy-2', 'id':'subPageWrapper' }); // Create 세부 페이지 = class'content'와 같음;
    //let canvas = new OctaUI( document.createElement('canvas') ).setAttr({ 'id':'c', 'style':`position:absolute;` });
    
    let paginationWrap = new OctaUI( document.createElement('nav') )
        .setAttr({ 'aria-label':'Page navigation example', 'style':'display:flex;justify-content:center;align-items:center;' });
    let pageUL = new UIUL().setAttr({ 'class':'pagination', 'style':'margin-top:15px;' });
    let pagePrevItem = new UILI().setAttr({ 'class':'page-item' });
    let pagePrevLink = new UIA().setAttr({ 'class':'page-link', 'href':'#', 'aria-label':'Previous' });
    let pagePrevSpan = new UISpan().setAttr({ 'aria-hidden':'true'}).setTextContent(`<<`);
    let pagePrevSpan02 = new UISpan().setAttr({ 'class':'sr-only'}).setTextContent('Previous');
    pagePrevLink.add( pagePrevSpan, pagePrevSpan02 );
    pagePrevItem.add( pagePrevLink );

    let pageNextItem = new UILI().setAttr({ 'class':'page-item' });
    let pageNextLink = new UIA().setAttr({ 'class':'page-link', 'href':'#', 'aria-label':'Next' });
    let pageNextSpan = new UISpan().setAttr({ 'aria-hidden':'true' }).setTextContent(`>>`);
    let pageNextSpan02 = new UISpan().setAttr({ 'class':'sr-only' }).setTextContent(`Next`);
    pageNextLink.add( pageNextSpan, pageNextSpan02 );
    pageNextItem.add( pageNextLink );
    
    // pageUL.add( pagePrevItem, pageNextItem );
    // paginationWrap.add( pageUL );

    tapPane.add( row, paginationWrap );

    let renderer;
    const scenes = [];

    const pageMove = ( page ) => {
        
    }

    getRealData( 'users', auth.currentUser.uid ).then( (res) => {

            let assets = res.data().model;
            let pageSize = 2;
            let lastPage = parseInt( assets.length / pageSize ) + 1;
            let curPage = 1;
            let startNum = (curPage * pageSize) - pageSize;
            let lastNum = ( lastPage === curPage ) ? assets.length : curPage * pageSize;

            pageLoading( startNum, lastNum, assets );
            createPageList( lastPage, pagePrevItem, pageNextItem, pageUL );

            paginationWrap.add( pageUL );

            function createPageList( lastPage, pagePrevItem, pageNextItem, pageUL ) {

                pageUL.add( pagePrevItem );
                
                for( let i = 1; i <= lastPage; i++ ) {

                    let pageItem = new UILI().setAttr({ 'class':'page-item' });
                    let pageLink = new UIA().setAttr({ 'class':'page-link', 'href':'#'}).setTextContent( i );
                    pageLink.dom.addEventListener('click', e => {
                        e.preventDefault();
                        curPage = parseInt(e.target.textContent);
                        startNum = (curPage * pageSize) - pageSize;
                        lastNum = ( lastPage === curPage ) ? assets.length : curPage * pageSize;
                        row.clear();
                        pageLoading( startNum, lastNum, assets );
                        
                    })
                    pageItem.add( pageLink );
                    pageUL.add( pageItem );
                }

                pageUL.add( pageNextItem );
                
            }

            function pageLoading( startNum, lastNum, assets ) {
                // for( let i = 0; i < assets.length; i ++ ) {
                for( let i = startNum; i < lastNum; i ++ ) {

                    console.log('시작 넘버: ', startNum );
                    console.log('마지막 넘버: ', lastNum );

                    const scene = new THREE.Scene();

                    //make a list item
                    let col = new UIDiv().setAttr({ 'class': 'col-lg-4 col-sm-6', }); // 각각 카드 Wraper
                    let item = new UIDiv().setAttr({ 'class': 'nft-item', 'style':'height:200px;' }); //각각 카드
                    let inner = new UIDiv().setAttr({ 
                        'class': 'z-1 nft-inner dropdown', 'style':'height:200px;'});
                    
                    let assetIconCSS = new OctaUI( document.createElement('style') );
                        assetIconCSS.setTextContent( `
                            #assetIconNav {
                                background-color: #fff;
                                padding: 0px;
                                
                                opacity: 0;
                                display: flex;
                                flex-direction: column;
                                align-items: start;
                                justify-content: start;
                                border-radius: 3px;
                                box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
                                transition:height .1s linear;
                                margin: 0;
                                box-sizing:border-box;
                            }

                            #assetIconNav.active {
                                top:50px;
                                transform: translateX(15px);
                                opacity: 1;
                                padding: 3px;
                                height:40%;
                                width:24%;
                                right:0;
                            }

                            #assetIconNav ul {
                                display: flex;
                                flex-direction: column;
                                list-style-type: none;
                                padding: 0;
                                margin: 0;
                                width: 0;
                                transition: height 0.2s linear;
                            }

                            #assetIconNav.active ul {
                                height: 100%;
                            }

                            #assetIconNav ul li {
                                transform: rotateY(0deg);
                                opacity: 0;
                                transition: transform 0.5s linear, opacity 0.5s linear;
                            }

                            #assetIconNav.active ul li {
                                opacity: 1;
                            }

                            #assetIconNav.active ul li span {
                                padding: 2px 12px
                            }

                            #assetIconNav.active ul li span:hover {
                                
                                border-radius:3px;
                                background-color: tomato;
                            }

                            #assetIconNav ul a {
                                position: relative;
                                color: #000;
                                text-decoration: none;
                                margin: 0;
                            }

                            .assetEditIcon {
                                padding: 5px 10px;
                            }
                           
                        `)
                    let titleWrap = new UIDiv().setAttr({ 'class':'titleWrap', 'style':'display:flex;justify-content:space-between;margin-bottom:15px;'});

                    let assetIconNav = new OctaUI( document.createElement('nav') ).setAttr({
                        'id':'assetIconNav',
                        'style':'position:absolute'
                    });
                    let iconNavUL = new UIUL();
                    
                    let iconNavLi01 = new UILI();
                    let iconNaviLi01Link = new UISpan().setAttr({ 'class':'assetEditIcon', 'style':'color:#040b29;font-size:.8em;cursor:pointer;' }).setTextContent('Edit');
                    iconNavLi01.add( iconNaviLi01Link );

                    iconNaviLi01Link.dom.addEventListener('click', (e) => {
                        
                        signals.assetUploadUpdate.dispatch( assets[i].docID );
                        signals.assetEditMode.dispatch();
                    })

                    let iconNavLi02 = new UILI();
                    let iconNaviLi02Link = new UISpan().setAttr({ 'style':'color:#040b29;font-size:.8em;cursor:pointer' }).setTextContent('Delete');
                    iconNavLi02.add( iconNaviLi02Link );

                    iconNaviLi02Link.dom.addEventListener('click', (e) => {
                        deleteAsset( auth.currentUser.uid, assets[i].docID );
                    });

                    let iconNavLi03 = new UILI();
                    let iconNaviLi03Link = new UISpan().setAttr({ 'style':'color:#040b29;font-size:.8em;cursor:pointer' }).setTextContent('Editor');
                    iconNavLi03.add( iconNaviLi03Link );

                    iconNaviLi03Link.dom.addEventListener('click', (e) => {
                        window.location.href = `/octa3d-editor?assets=${assets[i].docID}`;
                        
                    });

                    let iconToggleBtnWrap = new UIButton().setAttr({ 'class':'icon', 'id':'toggle', 'style':'border-radius:5px;background-color:#1a203c;color:white;' });
                    let iconAssetEdit = new UIIcon().setAttr({ 'class':'bi bi-three-dots-vertical' });

                    iconToggleBtnWrap.dom.addEventListener('click', (e) => {
                        assetIconNav.dom.classList.toggle('active');
                    });

                    window.addEventListener('click', e => {
                        if( iconToggleBtnWrap.dom.contains( e.target ) ) {
                            e.preventDefault();
                        } else {
                            assetIconNav.dom.className = 'icon'; 
                        }
                    })
                    
                    iconToggleBtnWrap.add( iconAssetEdit );

                    iconNavUL.add( iconNavLi01, iconNavLi03, iconNavLi02 );
                    assetIconNav.add( iconNavUL );
                    
                    // let iconWrap = new UIDiv().setAttr({ 'class':'btn-group'});
                    // let dropdownBtn = new UIButton().setAttr({ 
                    //     'type':'button', 'class':'btn btn-secondary btn-sm dropdown-toggle',
                    //     'data-bs-toggle':'dropdown', 'aria-expanded':'false' 
                    // });

                    // let editUL = new UIUL().setAttr({ 'class':'dropdown-menu', 'style':'width:30px !important;border:2px solid red;' });

                    // let editLi01 = new UILI();
                    // let editLi01A01 = new UIA().setAttr({ 'class':'dropdown-item', 'href':'#' });
                    // let editLi01A01Icon = new UIIcon().setAttr({ 'class':'fas fa-user-alt pe-2' }).setTextContent('Edit');
                    // editLi01.addSeq( editLi01A01, editLi01A01Icon );

                    // let editLi02 = new UILI();
                    // let editLi02A01 = new UIA().setAttr({ 'class':'dropdown-item', 'href':'#' });
                    // let editLi02A01Icon = new UIIcon().setAttr({ 'class':'fas fa-cog pe-2' }).setTextContent('Delete');
                    // editLi02.addSeq( editLi02A01, editLi02A01Icon );

                    // let editLi03 = new UILI();
                    // let editLi03A01 = new UIA().setAttr({ 'class':'dropdown-item', 'href':'#' });
                    // let editLi03A01Icon = new UIIcon().setAttr({ 'class':'fas fa-door-open pe-2' }).setTextContent('Pick');
                    // editLi03.addSeq( editLi03A01, editLi03A01Icon );

                    // editUL.add( editLi01, editLi02, editLi03 );
                    // iconWrap.add( dropdownBtn, editUL );

                    

                    // make a card title
                    let cardTitle = new UIH( assets[i].name , 7 );
                    let sceneEle = new UIDiv()
                        .setAttr({ 
                            'class': 'scn-asset',
                            'style': 'z-index:10;height:160px;margin-top:20px;',
                            'id':'asset-small-scene'
                        });


                    scene.background = new THREE.Color(0xffffff);
                    scene.userData.element = sceneEle.dom;

                    titleWrap.add( cardTitle, iconToggleBtnWrap );
                    inner.add( assetIconCSS, titleWrap, assetIconNav );
                    row.addSeq( col, item, inner );

                    //make THREE Scene
                    const camera = new THREE.PerspectiveCamera( 75, (inner.dom.clientWidth*.8) / (inner.dom.clientHeight*.65), 0.1, 1000 );
                    const renderer = new THREE.WebGLRenderer();
                    renderer.setSize( inner.dom.clientWidth*.8, inner.dom.clientHeight*.65 );

                    //light
                    let light = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
                    scene.add(light);

                    const directionalLight = new THREE.DirectionalLight(0xffa95c, 1);
                    directionalLight.position.set(-50, 50, 50);
                    directionalLight.castShadow = true;
                    directionalLight.shadow.bias = -0.0001;
                    directionalLight.shadow.mapSize.width = 1024 * 4; // default
                    directionalLight.shadow.mapSize.height = 1024 * 4; // default
                    scene.add(directionalLight);

                    light = new THREE.PointLight()
                    light.position.set(0.8, 1.4, 1.0)
                    scene.add(light)

                    const ambientLight = new THREE.AmbientLight( 0xffffff );
                    scene.add(ambientLight)

                    const controls = new OrbitControls( camera, renderer.domElement );

                    inner.dom.appendChild( renderer.domElement );

                    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                    // const cube = new THREE.Mesh( geometry, material );
                    //scene.add( cube );

                    camera.position.z = 2;
                    controls.update();

                    var urlMap = [];
                    var manager = new THREE.LoadingManager();
                    manager.setURLModifier( function( url ) {

                        // this function is called for each asset request
                        if ( url.split('.').pop() === ('jpg' || 'png' || 'gif' || 'jpeg' || 'tif') ) {

                            let key = url.split('/').pop();

                            assets[i].tex.map( item => {


                                Object.keys( item ).map( texTitle => { 

                                    if( texTitle === key ) {
                                        url = item[key] 
                                    } 

                                })

                            })

                        }

                        // assets[i].tex
                    
                        return url;
                    
                    } );

                    const fbxLoader = new FBXLoader( manager );

                    // fbxLoader.setResourcePath('https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/');

                    fbxLoader.load(
                        assets[i].obj,
                        ( obj ) => {
                            obj.traverse(function (child) {

                                if ( child.isMesh ) {

                                    // texLoader.load( assets[i].tex[0], ( texture ) => {

                                    //     child.material.map = texture;
                                    //     child.material.needsupdate = true;
                                    //     console.log( 'texture: ', texture );

                                    // })
                                    child.castShadow = true;
			    				    child.receiveShadow = true;
                                    //child.material = material
                                }
                            })
                            // object.scale.set(.01, .01, .01)
                            scene.add( obj )
                        },
                        (xhr) => {
                            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
                    
                    
                    animate();

                    function animate() {
                        requestAnimationFrame( animate );
                        controls.update();
                        renderer.render( scene, camera );
                    }

                }
            }

            

            

    });

    return tapPane;

}

export default profileAssetCreated