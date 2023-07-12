import abstractMount from "./abstractMount";
import UserHeader from "../../../components/userHeader";
import Main from "../../../components/main";
import Footer from "../../../components/footer";
import { hookSignout } from "../../auth/hook_signout";

export default class HomeMount extends abstractMount {
    
    constructor() {
        super();
    }

    mount() {

        const header = document.querySelector('.header-one');
        const main = document.querySelector('#main');
        const footer = document.querySelector('.footer1');

        header.appendChild( UserHeader() );
        main.appendChild( Main() );
        footer.appendChild( Footer().footer01 );
        footer.appendChild( Footer().footer02 );

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