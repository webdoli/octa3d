import { UIDiv, UIH, UIUL, UILI, UIP, UIA, UIImg, UIIcon, UISpan, OctaUI } from "../../../libs/octaUI";
import getRealData from "../../hook_getData";
import { auth } from "../../../db/firebaseDB";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const profileAssetCreated = () => {

    const tapPane = new UIDiv().setAttr({ 'class': 'tab-pane show active', 'id': 'created-assets', 'role': 'tabpanel', 'aria-labelledby':'created-assets-tab' });
    let row = new UIDiv().setAttr({ 'class': 'row justify-content-center gx-3 gy-2', 'id':'subPageWrapper' }); // Create 세부 페이지 = class'content'와 같음;
    //let canvas = new OctaUI( document.createElement('canvas') ).setAttr({ 'id':'c', 'style':`position:absolute;` });
    tapPane.add( row );

    let renderer;
    const scenes = [];

    getRealData( 'users', auth.currentUser.uid ).then( (res) => {

            let assets = res.data().model;

            // console.log('model: ', res.data().model );

            for( let i = 0; i < assets.length; i ++ ) {

                const scene = new THREE.Scene();

                //make a list item
                let col = new UIDiv().setAttr({ 'class': 'col-lg-4 col-sm-6', }); // 각각 카드 Wraper
                let item = new UIDiv().setAttr({ 'class': 'nft-item', 'style':'height:200px;' }); //각각 카드
                let inner = new UIDiv().setAttr({ 'class': 'nft-inner', 'style':'height:200px;'});

                // make a card title
                let cardTitle = new UIH( 'Created Page', 4 );
                let sceneEle = new UIDiv()
                    .setAttr({ 
                        'class': 'scn-asset',
                        'style': 'border:1px solid tomato; z-index:10;height:160px;margin-top:20px;',
                        'id':'asset-small-scene'
                    });

                scene.userData.element = sceneEle.dom;

                
                inner.add( cardTitle);
                row.addSeq( col, item, inner );

                //make THREE Scene
                const camera = new THREE.PerspectiveCamera( 75, (inner.dom.clientWidth*.8) / (inner.dom.clientHeight*.65), 0.1, 1000 );
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize( inner.dom.clientWidth*.8, inner.dom.clientHeight*.65 );

                const light = new THREE.PointLight()
                light.position.set(0.8, 1.4, 1.0)
                scene.add(light)

                const ambientLight = new THREE.AmbientLight()
                scene.add(ambientLight)

                const controls = new OrbitControls( camera, renderer.domElement );

                inner.dom.appendChild( renderer.domElement );

                // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                // const cube = new THREE.Mesh( geometry, material );
                //scene.add( cube );

                camera.position.z = 2;
                controls.update();

                const fbxLoader = new FBXLoader();
                fbxLoader.load(
                    assets[i].obj,
                    ( obj ) => {
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

    });

    return tapPane;

}

export default profileAssetCreated