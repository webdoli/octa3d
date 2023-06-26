import { mount } from 'assets/Assets';
import Header from './components/headerSection';
import Main from './components/mainSection';

const headerEle = document.querySelector('.header-one');
const mainEle = document.querySelector('#main');


headerEle.appendChild( Header() );
mainEle.appendChild( setScript("js/vendor/jquery-1.12.4.min.js") );
mainEle.appendChild( Main() );

//script 생성
let libs = [
    "js/vendor/modernizr-3.5.0.min.js",
    "js/slick.min.js",
    "js/popper.min.js",
    "js/bootstrap.min.js",
    "js/jquery.meanmenu.js",
    "js/magnific.min.js",
    "js/wow.min.js",
    "js/plugins.js",
    "js/main.js"
];

mainEle.appendChild( setScript("js/vendor/modernizr-3.5.0.min.js") );
mainEle.appendChild( setScript("js/owl.carousel.min.js") );
mainEle.appendChild( setScript("js/slick.min.js") );
mainEle.appendChild( setScript("js/popper.min.js") );
mainEle.appendChild( setScript("js/bootstrap.min.js") );
mainEle.appendChild( setScript("js/jquery.meanmenu.js") );
mainEle.appendChild( setScript("js/magnific.min.js") );
mainEle.appendChild( setScript("js/wow.min.js") );
mainEle.appendChild( setScript("js/plugins.js") );
// mainEle.appendChild( setScript("js/main.js") );


//setScripts( libs, mainEle );


function setScript ( url ) {

    let eleScript = document.createElement('script');
    eleScript.src = url;
    return eleScript;

}

//evt
function setScripts ( scripts, ele ) {

    Promise.all( scripts.map( url => {

        let eleScript = document.createElement('script');
        eleScript.src = url;
        return eleScript;
    
    })).then(( items ) => {
        
        for( let item in items ) {
            ele.appendChild( items[item] );
        }

    })

}

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

})