import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './db/firebaseDB';
import detectUrlChange from 'detect-url-change';

import GuestHeader from './components/guestHeader';
import UserHeader from './components/userHeader';
import Main from './components/main';
import Footer from './components/footer';

import { mount as AssetMount } from 'assets/Assets';
import LoginGUI from './components/login';
import SignupGUI from './components/signup';

import { hookSignout } from './hooks/hook_signout';
import hookAssetMount from './hooks/hook_AssetMount';
import hookSignupMount from './hooks/hook_SignupMount';
import hookSigninMount from './hooks/hook_SigninMount';

const headerEle = document.querySelector('.header-one');
const mainEle = document.querySelector('#main');
const footerEle = document.querySelector('.footer1');

onAuthStateChanged( auth, ( user ) => {

    if( user ) {

        console.log('유저 로그인')
        userMain( headerEle, mainEle, footerEle, user );
      
    } else {

        console.log('Guest');
        guestMain( headerEle, mainEle , footerEle );
        routeGuestPage( mainEle, footerEle );

    }

})

/*******************/
/*    Function     */
/*******************/

// Loading Login Page
function userMain( header, main, footer, user ) {

    if( window.location.href === 'http://localhost:8080/' || window.location.href === 'https://octa3d-439a2.firebaseapp.com/' ) {

        header.appendChild( UserHeader() );
        main.appendChild( Main() );
        footer.appendChild( Footer().footer01 );
        footer.appendChild( Footer().footer02 );

    } else if( window.location.href === 'http://localhost:8080/assets' || window.location.href === 'https://octa3d-439a2.firebaseapp.com/assets'){

        
        header.appendChild( UserHeader() );
        footer.appendChild( Footer().footer02 );

        mountAsset( mainEle, footerEle, AssetMount, user );
        document.querySelector('.preloader').style.display = 'none';

    } else {

        window.location.href = '/';

    }

    if( document.querySelector('.octa3d-logout-btn') ) {

        let { logout } = hookSignout();

        document.querySelector('.octa3d-logout-btn').addEventListener('click', (e) => {
            console.log('로그아웃');
            logout();
        })
    }

    mobileExe( mainEle, footerEle );

}

// Loading Guest Page
function guestMain( header, main, footer ) {

    header.appendChild( GuestHeader() );
    main.appendChild( Main() );
    footer.appendChild( Footer().footer01 );
    footer.appendChild( Footer().footer02 );

    mobileExe( mainEle, footerEle );

}

function mountAsset( mainSec, footerSec, pageMount, user ) {

    //removeMainFooterSection( mainSec, footerSec );
    mainSec.innerHTML = '';

    const { res } = pageMount( mainSec, user );
    console.log( 'res: ' + res );

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
                hookAssetMount( mainEle, footerEle, AssetMount, false, pre_loader );
            case 'https://octa3d-439a2.firebaseapp.com/assets':
                hookAssetMount( mainEle, footerEle, AssetMount, false, pre_loader );
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



