import { mount as AssetMount } from 'assets/Assets';
import { Header } from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import detectUrlChange from 'detect-url-change';

import Login from './components/login';
import Signup from './components/signup';
import { hook_Signup } from './hooks/hook_signup';
import { hookSignout } from './hooks/hook_signout';
import { hookSignin } from './hooks/hook_signin';

const headerEle = document.querySelector('.header-one');
const mainEle = document.querySelector('#main');
const footerEle = document.querySelector('.footer1');

mainExe( headerEle, mainEle , footerEle );
routePage( mainEle, footerEle );
// createScript( 0, mainEle, libs );

async function mainExe( headerEle, mainEle , footerEle ) {

    headerEle.appendChild( await Header() );

    if( document.querySelector('.octa3d-logout-btn') ) {

        let { logout } = hookSignout();

        document.querySelector('.octa3d-logout-btn').addEventListener('click', (e) => {
            console.log('로그아웃');
            logout();
        })
    }
    
    mainEle.appendChild( Main() );
    footerEle.appendChild( Footer().footer01 );
    footerEle.appendChild( Footer().footer02 );
    
    mobileExe( mainEle, footerEle );

}


/*******************/
/*    Function     */
/*******************/

// Asset Mount Func
function mountPage( mainSec, footerSec, mount, db ) {
    
    console.log('마운트 함수 실행');
     removeMainFooterSection( mainSec, footerSec );
     if( db ) console.log( 'db: ' + db );

     mainSec.appendChild( mount() )

}


function mountAsset( mainSec, footerSec, pageMount ) {

    //removeMainFooterSection( mainSec, footerSec );
    console.log( 'mainSec: ' + mainSec.id );
    mainSec.innerHTML = '';

    //db user & content
    const userData = {
        name: 'tmp유저', 
        id: 'tmp00',
        login: 'ok'
    }

    //const { res } = pageMount( mainSec, userData );
    //console.log( 'res: ' + res );

}

// remove mainSection & FooterSection
function removeMainFooterSection( main, footer ) {
    console.log('remove함수 실행');
    main.innerHTML = '';
    console.log('footer: ' + footer );
    footer.removeChild( footer.firstElementChild );
}

function fadeOut( target, speed ) {
    
    let fadeEffect = setInterval( () => {
        if( !target.style.opacity ) {
            target.style.opacity = 1
        }
        if( target.style.opacity > 0 ) {
            target.style.opacity -= 0.2;
        } else {
            
            clearInterval( fadeEffect )
            target.style.display = 'none';
        }
    }, speed )
}



/*******************/
/*    Mounting     */
/*******************/

function routePage( mainEle, footerEle) {

    let pre_loader = document.querySelector('.preloader');

    detectUrlChange.on('change', (newUrl) => {
    
        console.log('url 변경: ' + newUrl );
    
        if( newUrl === 'http://localhost:8080/login' || newUrl === 'https://octa3d-439a2.firebaseapp.com/login' ) {

            mountPage( mainEle, footerEle, Login );
            history.pushState({ data: '로긴' }, 'Login Page', '/login');
            fadeOut( pre_loader, 80 );

            document.querySelector('#octa3d-signin-form').addEventListener('submit', (e) => {

                e.preventDefault();
                const { hookLogin } = hookSignin();
                let userID = document.querySelector('#floatingInput').value;
                let userPW = document.querySelector('#floatingPassword').value;

                hookLogin( userID, userPW );

            })

        
        } else if( newUrl === 'http://localhost:8080/signup' || newUrl === 'https://octa3d-439a2.firebaseapp.com/signup' ) {
            
            mountPage( mainEle, footerEle, Signup );
            history.pushState({ data: '회원가입' }, 'Signup Page', '/signup'); 
            fadeOut( pre_loader, 80 );
    
            document.querySelector('#octa3d-signup-form').addEventListener('submit', (e) => {
    
                e.preventDefault();
                const { hookSignup } = hook_Signup();
                let userID = document.querySelector('#userIdInput').value;
                let userPW = document.querySelector('#confirmPass').value;
                let userName = document.querySelector('#floatingInput').value;
    
                console.log( `ID: ${ userID }, PW: ${ userPW }, Name: ${ userName }` );
    
                hookSignup( userID, userPW, userName );
    
            })
    
        } else if( newUrl === 'http://localhost:8080/assets' || newUrl === 'https://octa3d-439a2.firebaseapp.com/assets' ) {
    
            mountAsset( mainEle, footerEle, AssetMount );
            history.pushState({ data: '에셋' }, 'Asset Page', '/assets');
                
            fadeOut( pre_loader, 80 );
    
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



