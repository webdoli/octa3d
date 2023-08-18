
import { onAuthStateChanged, isSignInWithEmailLink, signInWithEmailLink, updateProfile } from 'firebase/auth';
import { auth } from './db/firebaseDB';
// import { RecaptchaVerifier } from 'firebase/auth';
import detectUrlChange from 'detect-url-change';
var Signal = require('signals');

import GuestHeader from './components/guestHeader';
import Main from './components/main';
import Footer from './components/footer';

import { hookSignup } from './hooks/auth/hook_signup';

//mount
import { mount as guestAssetMount } from 'assets/Assets';
import { mount as guestEditorMount } from 'editor/Editor'
import LoginGUI from './components/login';
import SignupGUI from './components/signup';
import resetPWGUI from './components/resetPW';

import hookAssetMount from './hooks/mounts/guest/hook_AssetMount';
import hookSignupMount from './hooks/mounts/guest/hook_SignupMount';
import hookSigninMount from './hooks/mounts/guest/hook_SigninMount';
import hookResetPWMount from './hooks/mounts/guest/hook_resetPWMount';
import hookEditorMount from './hooks/mounts/guest/hook_EditorMount';

import AssetMount from './hooks/mounts/member/assetMount';
import HomeMount from './hooks/mounts/member/homeMount';
import MypageMount from './hooks/mounts/member/mypageMount';
import EditorMount from './hooks/mounts/member/editorMount';

function removeLocalStroage ( result ) {
    return new Promise( resolve => {
        window.localStorage.removeItem( 'emailForSignIn: ', result );
        resolve('local storage removed')
    })
}

if( isSignInWithEmailLink( auth, window.location.href ) ) {

    console.log('@@ New Member Login @@')
    let email = window.localStorage.getItem( 'emailForSignIn' );

    if( !email ) {
        email = window.prompt( 'Please provide your email for confirmation' );
    }

    signInWithEmailLink( auth, email, window.location.href )
    .then( (result) => {
        
        removeLocalStroage( result )
        .then( () => {
            window.location.href = '/';
        })
        // window.localStorage.removeItem( 'emailForSignIn: ', result );
        // console.log('New Member Info(result): ', result.user );

        // updateProfile( result.uid, {
        //     emailVerified: true
        // });

        // 1]result로 users 모델 추가하기
        // 2]location.href = / 강제이동하기
        // 3]로그아웃 자연스럽게 해결
        
    
    }).catch( err => console.log('error: ', err) );

}

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

    let urlOrigin = window.location.origin;
    let urlPathName = window.location.pathname;
    let urlRoute = urlOrigin + urlPathName;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams( queryString );
    
    let params = ( urlParams ) ? urlParams : '';

    if( user && user.emailVerified ) {
        console.log('@@ 이메일 인증 유저 로그인 @@');
        userMain( headerEle, mainEle, footerEle, user, urlRoute, params )
      
    } else {
        console.log('Guest');
        console.log('url path name: ', urlPathName );
        console.log('url routing: ', )
        console.log('url original path: ', urlOrigin );

        guestMain( headerEle, mainEle , footerEle )
            .then( () => {
                console.log('route guest page 실행');
                routeGuestPage( mainEle, footerEle, urlRoute, params );
            });
        
    }

});

/*******************/
/*    Function     */
/*******************/

// Loading Login Page
function userMain( headerEle, mainEle, footerEle, user, urlRoute, params ) {

    let pre_loader = document.querySelector('.preloader');
    let assetParam = ( params ) ? params : '';
    
    let mountUrls = [
        { 'http://localhost:8080/': new HomeMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/': new HomeMount( signals ) },
        { 'http://localhost:8080/assets': new AssetMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/assets': new AssetMount( signals ) },
        { 'http://localhost:8080/mypage': new MypageMount( signals ) },
        { 'https://octa3d-439a2.firebaseapp.com/mypage': new MypageMount( signals ) },
        { 'http://localhost:8080/mogl3d-editor': new EditorMount( signals ) },
        // { 'http://localhost:8080/octa3d-editor': hookEditorMount( mainEle, footerEle, guestEditorMount, false, pre_loader, assetParam ) },
        { 'https://octa3d-439a2.firebaseapp.com/octa3d-editor': new EditorMount( signals ) },
    ];
    
    let currentUrl = urlRoute;
    
    mountUrls.map( mounts => {
    
        if ( mounts[currentUrl ] ) {
    
            mounts[currentUrl].mount( assetParam );
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

        mobileExe( mainEle, footerEle );

    })

}

/*******************/
/*    Mounting     */
/*******************/
function routeGuestPage( mainEle, footerEle, path, params ) {

    let pre_loader = document.querySelector('.preloader');
    let assetParam = ( params ) ? params : '';
    
    switch ( path ) {

        case 'http://localhost:8080/login' :
            hookSigninMount( mainEle, footerEle, LoginGUI, pre_loader );
            break;
        case 'https://octa3d-439a2.firebaseapp.com/login':
            hookSigninMount( mainEle, footerEle, LoginGUI, pre_loader );
            break;

        case 'http://localhost:8080/signup' :
            hookSignupMount( mainEle, footerEle, SignupGUI, pre_loader );
            break;
        case 'https://octa3d-439a2.firebaseapp.com/signup':
            hookSignupMount( mainEle, footerEle, SignupGUI, pre_loader );
            break;

        case 'http://localhost:8080/resetPW' :
            hookResetPWMount( mainEle, footerEle, resetPWGUI, pre_loader );
            break;
        case 'https://octa3d-439a2.firebaseapp.com/resetPW':
            hookResetPWMount( mainEle, footerEle, resetPWGUI, pre_loader );
            break;

        case 'http://localhost:8080/assets' :
            console.log('Case: asset 라우팅');
            hookAssetMount( mainEle, footerEle, guestAssetMount, false, pre_loader );
            break;
        case 'https://octa3d-439a2.firebaseapp.com/assets':
            hookAssetMount( mainEle, footerEle, guestAssetMount, false, pre_loader );
            break;

        case 'http://localhost:8080/mogl3d-editor' :
            hookEditorMount( mainEle, footerEle, guestEditorMount, false, pre_loader, assetParam );
            break;
        case 'https://octa3d-editor.firebaseapp.com/mogl3d-editor':
            hookEditorMount( mainEle, footerEle, guestEditorMount, false, pre_loader, assetParam );
            break;

    }
    
    
}


/*******************/
/*    Mobile Evt   */
/*******************/

function mobileExe( mainEle, footerEle ) {

    console.log('모바일 버튼 실행');
    let iconHamburger = document.querySelector('#icon-mobile-ham');
    let iconExit = document.querySelector('#icon-mobile-exit');
    let mobileMenu = document.querySelector('.mogl3d-mobile');


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
                mobileMenu.style.zIndex = '10';
                mobileMenu.insertAdjacentHTML('beforeend', `
                    <div class="mobile-hambuger-open">
                        <ul class="mobile-hambuger-open-menu">
                            <li><a href="#">About</a></li>
                            <li><a href="">MoGL3D</a></li>
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
