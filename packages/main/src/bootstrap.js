import { mount as AssetMount } from 'assets/Assets';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Navigo from 'navigo';

import Login from './components/login';
import Signup from './components/signup';

const router = new Navigo('https://octa3d-439a2.firebaseapp.com/');
const headerEle = document.querySelector('.header-one');
const mainEle = document.querySelector('#main');
const footerEle = document.querySelector('.footer1');

headerEle.appendChild( Header() );
mainEle.appendChild( Main() );
footerEle.appendChild( Footer().footer01 );
footerEle.appendChild( Footer().footer02 );

//script 생성
let libs = [
    "js/vendor/modernizr-3.5.0.min.js",
    "js/vendor/jquery-1.12.4.min.js",
    "js/owl.carousel.min.js",
    "js/slick.min.js",
    "js/popper.min.js",
    "js/bootstrap.min.js",
    "js/jquery.meanmenu.js",
    "js/magnific.min.js",
    "js/wow.min.js",
    "js/plugins.js",
    "js/main.js"
];

function loadScript( index, ele ) {

    if( index >= libs.length ) {
        return false;
    }
  
    let el = document.createElement('script');
    el.onload = function() {
      //console.log("Script loaded: ", libs[index]);
      loadScript( index+1, ele );
    }

    el.src = libs[ index ];
    ele.appendChild( el );
    // OR
    // document.head.appendChild(el);
}
  
loadScript( 0 , mainEle ); // Load the first script manually.

// 모바일 메뉴 
let iconHamburger = document.querySelector('#icon-mobile-ham');
let iconExit = document.querySelector('#icon-mobile-exit');
let mobileMenu = document.querySelector('.octa3d-mobile');


iconExit.addEventListener('click', (e) => {
    e.preventDefault();

    let attr = iconExit.getAttribute('class');
    if( attr == 'active' ) { 
        iconExit.removeAttribute('class');
        iconHamburger.setAttribute('class', 'active');

        mobileMenu.removeChild( mobileMenu.lastElementChild );
        
    }

});


/*******************/
/* Mounting Pages  */
/*******************/ 

// Asset Mount
router.on('/assets', () => {

    mountAsset( mainEle, footerEle, AssetMount )

});

// Login & Signup Mount
router.on('/login', () => {

    mountLogin( mainEle, footerEle, Login );

});

router.on('/signup', () => {

    mountSignup( mainEle, footerEle, Signup );

});



/*******************/
/*   Event Func    */
/*******************/ 

// mobile button Evt
iconHamburger.addEventListener('click', (e) => {
    
    let attr = iconHamburger.getAttribute('class');
    let wrap = this;

    if( attr == 'active' ) {
        
        iconHamburger.removeAttribute('class');
        iconExit.setAttribute('class', 'active');

        mobileMenu.classList.add('open');
        mobileMenu.insertAdjacentHTML('beforeend', `
            <div class="mobile-hambuger-open">
                <ul class="mobile-hambuger-open-menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">OCTA 3D</a></li>
                    <li><a href="#" class="octa-asset-page-mobile-btn">ASSETS</a></li>
                    <li><a href="#">SCENES</a></li>
                    <li><a href="#">BLOG</a></li>
                </ul>
            </div>
        `);

        document.querySelector('.octa-asset-page-mobile-btn').addEventListener('click', (e) => {
            mainEle.innerHTML = '';
            footerEle.removeChild( footerEle.firstElementChild );
            const userData = {
                name: 'tmp유저', 
                id: 'tmp00',
                login: 'ok'
            }
        
            const { res } = mount( mainEle, userData );
            console.log('res: ' + res );
        })

    }
 
});


/*******************/
/*   Mount Func    */
/*******************/ 

// Asset Mount Func
function mountAsset( mainSec, footerSec, pageMount ) {

    removeMainFooterSection( mainSec, footerSec );

    //db user & content
    const userData = {
        name: 'tmp유저', 
        id: 'tmp00',
        login: 'ok'
    }

    const { res } = pageMount( mainSec, userData );
    console.log( 'res: ' + res );

}

// Login & Signup Func
function mountLogin( mainSec, footerSec, loginEle ) {

    removeMainFooterSection( mainSec, footerSec );
    mainSec.appendChild( loginEle() );

}

function mountSignup( mainSec, footerSec, signEle ) {

    removeMainFooterSection( mainSec, footerSec );
    mainSec.appendChild( signEle() );

}


// Common Mount Func: remove mainSection & FooterSection
function removeMainFooterSection( main, footer ) {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );
}



router.resolve();