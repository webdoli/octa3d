import abstractMount from "./abstractMount";
import UserHeader from "../components/userHeader";
import Footer from "../components/footer";
//import { mount as asset_mount } from 'assets/Assets';
import MypageGUI from "../components/mypageGUI";
import { hookSignout } from "./hook_signout";

const createScript = ( urls, ele ) => {

    urls.map( url => {

        let script01 = document.createElement('script');
        script01.src = url;

        ele.appendChild( script01 );
    })

}

export default class MypageMount extends abstractMount {
    
    constructor() {
        console.log('mypage 마운트 class 시작')
        super();
    }

    mount( db ) {

        let libUrls = [

            'lib/mypage/js/jquery-3.6.0.min.js',
            'lib/mypage/js/bootstrap.bundle.min.js',
            'lib/mypage/js/lightcase.js',
            'lib/mypage/js/swiper-bundle.min.js',
            'lib/mypage/js/isotope.pkgd.min.js',

        ]
        const header = document.querySelector('.header-one');
        const main = document.querySelector('#main');
        const footer = document.querySelector('.footer1');

        header.appendChild( UserHeader() );
        footer.appendChild( Footer().footer02 );

        main.innerHTML = '';

        main.appendChild( MypageGUI() );

        
        createScript( libUrls, main ); 

        //main.appendChild( bootstrapCSS );

        //const { res } = asset_mount( main, db );

        document.querySelector('.preloader').style.display = 'none';
        this.setEvent();

    }

    setEvent() {
            
        if( document.querySelector('.octa3d-logout-btn') ) {

            let { logout } = hookSignout();

            document.querySelector('.octa3d-logout-btn').addEventListener('click', (e) => {

                logout();
            })
        }
    }

}