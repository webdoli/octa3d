import abstractMount from "./abstractMount";
import UserHeader from "../components/userHeader";
import Footer from "../components/footer";
import { mount as asset_mount } from 'assets/Assets';
import { hookSignout } from "./hook_signout";

export default class AssetMount extends abstractMount {
    
    constructor() {
        console.log('asset마운트 class 시작')
        super();
    }

    mount( db ) {

        const header = document.querySelector('.header-one');
        const main = document.querySelector('#main');
        const footer = document.querySelector('.footer1');

        header.appendChild( UserHeader() );
        footer.appendChild( Footer().footer02 );

        main.innerHTML = '';
        const { res } = asset_mount( main, db );

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