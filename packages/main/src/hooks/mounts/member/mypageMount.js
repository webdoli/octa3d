import abstractMount from "./abstractMount";
import UserHeader from "../../../components/userHeader";
import Footer from "../../../components/footer";
import MypageGUI from "../../../components/mypageGUI";
import { hookSignout } from "../../auth/hook_signout";
import { auth, db } from "../../../db/firebaseDB";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';

const createScript = ( url, ele ) => {

        let script01 = document.createElement('script');
        script01.type = 'module';
        script01.src = url;

        ele.appendChild( script01 );

}

export default class MypageMount extends abstractMount {
    
    constructor() {
       
        super();
        
    }

    mount( database ) {

        window.profileEditFunc = async ( intro, nickName, country, password, profile, parent ) => {
            
            let user = auth.currentUser;

            updatePassword( user, password ).then( async () => {

                console.log('pw updated!');
                await setDoc( 
                    doc( db, 'users', user.uid ), 
                    {
                        self_intro: intro,
                        country: country,
                        nickName: nickName,
                    }, 
                    { merge: true }
                );

                window.signals.profileAboutOpen.dispatch( parent )
                
            }).catch( err => {

                console.log('err: ' + err );

            });

        }

        window.usrNewPW = async ( usrPW, modal, errMsg, editForm, profile ) => {
            
            let user = auth.currentUser;
            const credential = EmailAuthProvider.credential(
                user.email,
                usrPW
            );

            try {
                const result = await reauthenticateWithCredential(
                    auth.currentUser,
                    credential
                )

                $('#'+modal.id ).modal('hide');

                profile.style.display = 'none';
                editForm.style.display = 'block';
                
            } 
            catch ( err ) {
                errMsg.innerHTML += `invalid, please correct password`
                console.log( 'err: ', err );
                
            } 

        }

        let libUrls = [
            'lib/mypage/js/bootstrap.bundle.min.js',
            'lib/mypage/js/jquery.counterup.min.js',
            'lib/mypage/js/lightcase.js',
            'lib/mypage/js/swiper-bundle.min.js',
            'lib/mypage/js/isotope.pkgd.min.js',
        ];
        const header = document.querySelector('.header-one');
        const main = document.querySelector('#main');
        const footer = document.querySelector('.footer1');

        header.appendChild( UserHeader() );
        footer.appendChild( Footer().footer02 );

        main.innerHTML = '';
        main.appendChild( MypageGUI() );

        libUrls.map( lib => {
            createScript( lib, main )
        });

        document.querySelector('.preloader').style.display = 'none';
        this.setEvent();

    }

    setEvent() {

        if( document.querySelector('#profile-pw-valid') ) {

            document.querySelector('#profile-pw-valid').addEventListener('click', (e) => {
                console.log('pw 확인 클릭');
            })

        }
            
        if( document.querySelector('.octa3d-logout-btn') ) {

            let { logout } = hookSignout();

            document.querySelector('.octa3d-logout-btn').addEventListener('click', (e) => {

                logout();
            })
        }
    }

}