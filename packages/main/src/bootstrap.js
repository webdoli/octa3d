import { mount } from 'assets/Assets';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

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


// Event
document.querySelector('.octa3d-main-container-mobile svg').addEventListener('click', (e) => {
    
    let mobileMenu = document.querySelector('.octa3d-mobile');
    mobileMenu.classList.add('open');

    mobileMenu.innerHTML += `
        <div class="mobile-hambuger-open">
            <ul class="mobile-hambuger-open-menu">
                <li>About</li>
                <li>Editor</li>
                <li>Assets</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    `
})

document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();

    mainEle.innerHTML = '';
    // **첫번째 자식 삭제: mainEle.removeChild( mainEle.firstElementChild );
    
    const userData = {
        name: 'tmp유저', 
        id: 'tmp00',
        login: 'ok'
    }

    const { res } = mount( mainEle, userData );
    console.log('res: ' + res );

});