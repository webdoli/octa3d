import { mount as AssetMount } from 'assets/Assets';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import detectUrlChange from 'detect-url-change';

import Login from './components/login';
import Signup from './components/signup';
import { hook_Signup } from './hooks/hook_signup';

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
    "js/myScript.js"
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

/*******************/
/*      Event      */
/*******************/



/*******************/
/*    Mounting     */
/*******************/

detectUrlChange.on('change', (newUrl) => {
    
    console.log('url 변경: ' + newUrl );

    if( newUrl === 'http://localhost:8080/login' || newUrl === 'https://octa3d-439a2.firebaseapp.com/login' ) {
    
        mountPage( mainEle, footerEle, Login );
        history.pushState({ data: '로긴' }, 'Login Page', '/login');
    
    } else if( newUrl === 'http://localhost:8080/signup' || newUrl === 'https://octa3d-439a2.firebaseapp.com/signup' ) {

        mountPage( mainEle, footerEle, Signup );
        history.pushState({ data: '회원가입' }, 'Signup Page', '/signup');

        document.querySelector('#octa3d-signup-form').addEventListener('submit', (e) => {

            e.preventDefault();
            const { signup } = hook_Signup();
            let userID = document.querySelector('#userIdInput');
            let userPW = document.querySelector('#confirmPass');
            let userName = document.querySelector('#floatingInput');

            signup( userID, userPW, userName );

        })

    } else if( newUrl === 'http://localhost:8080/assets' || newUrl === 'https://octa3d-439a2.firebaseapp.com/assets' ) {

        mountAsset( mainEle, footerEle, AssetMount );
        history.pushState({ data: '에셋' }, 'Asset Page', '/assets');

    }
    
});


// Asset Mount Func
function mountPage( mainSec, footerSec, mount, db ) {
   
     removeMainFooterSection( mainSec, footerSec );
     if( db ) console.log( 'db: ' + db );

     mainSec.appendChild( mount() )

}


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

// remove mainSection & FooterSection
function removeMainFooterSection( main, footer ) {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );
}


/*******************/
/*    Mobile Evt    */
/*******************/
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

// mobile button Evt
iconHamburger.addEventListener('click', (e) => {
    
    let attr = iconHamburger.getAttribute('class');

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

