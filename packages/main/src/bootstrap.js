
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './db/firebaseDB';
import detectUrlChange from 'detect-url-change';
var Signal = require('signals');

import GuestHeader from './components/guestHeader';
import Main from './components/main';
import Footer from './components/footer';

//mount
import { mount as guestAssetMount } from 'assets/Assets';
// import { mount as guestEditorMount } from 'editor/Editor'
import LoginGUI from './components/login';
import SignupGUI from './components/signup';

import hookAssetMount from './hooks/mounts/guest/hook_AssetMount';
import hookSignupMount from './hooks/mounts/guest/hook_SignupMount';
import hookSigninMount from './hooks/mounts/guest/hook_SigninMount';

import AssetMount from './hooks/mounts/member/assetMount';
import HomeMount from './hooks/mounts/member/homeMount';
import MypageMount from './hooks/mounts/member/mypageMount';

//SPA
const headerEle = document.querySelector('.header-one');
const mainEle = document.querySelector('#main');
const footerEle = document.querySelector('.footer1');

const signals = {
    profileAboutOpen: new Signal(),
    profileAssetsOpen: new Signal(),
    profileCoworkOpen: new Signal(),
    profileActivityOpen: new Signal(),
    profileTalkOpen: new Signal(),
    profileSettingOpen: new Signal(),
    myAssetUpload: new Signal(),
    profileSubpageReset: new Signal(),
    resetAboutPage: new Signal(),
    assetUploadUpdate: new Signal(),
    assetEditMode: new Signal(),
    testAlert: new Signal(),
};

onAuthStateChanged( auth, ( user ) => {

    if( user ) {

        console.log('유저 로그인')
        userMain( headerEle, mainEle, footerEle, user )
      
    } else {

        console.log('Guest');
        guestMain( headerEle, mainEle , footerEle )
            .then( () => {
                console.log('route guest page 실행');
                routeGuestPage( mainEle, footerEle );
            });
        
    }

});

/*******************/
/*    Function     */
/*******************/

// Loading Login Page
function userMain() {
    
    let mountUrls = [
        { 'http://localhost:8080/': new HomeMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/': new HomeMount( signals ) },
        { 'http://localhost:8080/assets': new AssetMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/assets': new AssetMount( signals ) },
        { 'http://localhost:8080/mypage': new MypageMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/mypage': new MypageMount( signals ) }
    ];
    
    let currentUrl = window.location.href;
    
    mountUrls.map( mounts => {
    
        if ( mounts[currentUrl ] ) {
    
            mounts[currentUrl].mount();
        }
    
    });
    
    mobileExe( mainEle, footerEle );
   
}

// Loading Guest Page
function guestMain( header, main, footer ) {

    return new Promise( ( resolve, reject ) => {
        console.log('guestMain Promise 실행')
        header.appendChild( GuestHeader() );
        main.appendChild( Main() );
        footer.appendChild( Footer().footer01 );
        footer.appendChild( Footer().footer02 );

        resolve()

        //@ mobileExe( mainEle, footerEle );

    })

}

/*******************/
/*    Mounting     */
/*******************/
function routeGuestPage( mainEle, footerEle ) {

    let pre_loader = document.querySelector('.preloader');
    console.log('guest page mounting ');

    detectUrlChange.on('change', (newUrl) => {

        console.log('url: ' + newUrl );

        switch ( newUrl ) {

            case 'http://localhost:8080/login' :
                hookSigninMount( mainEle, footerEle, LoginGUI, pre_loader );
            case 'https://octa3d-439a2.firebaseapp.com/login':
                hookSigninMount( mainEle, footerEle, LoginGUI, pre_loader );
                break;

            case 'http://localhost:8080/signup' :
                hookSignupMount( mainEle, footerEle, SignupGUI, pre_loader );
            case 'https://octa3d-439a2.firebaseapp.com/signup':
                hookSignupMount( mainEle, footerEle, SignupGUI, pre_loader );
                break;

            case 'http://localhost:8080/assets' :
                console.log('Case: asset 라우팅');
                hookAssetMount( mainEle, footerEle, guestAssetMount, false, pre_loader );
            case 'https://octa3d-439a2.firebaseapp.com/assets':
                hookAssetMount( mainEle, footerEle, guestAssetMount, false, pre_loader );
                break;

            case 'http://localhost:8080/octa3d-editor' :
                hookAssetMount( mainEle, footerEle, guestEditorMount, false, pre_loader );
            case 'https://octa3d-editor.firebaseapp.com/assets':
                hookAssetMount( mainEle, footerEle, guestEditorMount, false, pre_loader );
                break;

        }
    
    });
    
}


/*******************/
/*    Mobile Evt   */
/*******************/

function mobileExe( mainEle, footerEle ) {

    console.log('모바일 버튼 실행');
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
}
