import { hookSignup } from "../../auth/hook_signup";
import { auth } from "../../../db/firebaseDB";
import { RecaptchaVerifier } from "firebase/auth";

const hookSignupMount = ( main, footer, mount, loader ) => {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );

    main.appendChild( mount() );
    history.pushState({ data: '회원가입' }, 'Signup Page', '/signup');
    loader.style.display = 'none';

    // window.recaptchaVerifier = new RecaptchaVerifier( auth, 'phoneVerifyBtn', {
    //     'size': 'invisible',
    //     'callback': () => {
    //         alert('인증');
    //     }
    // }) ;

    // document.querySelector('#octa3d-signup-form').addEventListener('submit', (e) => {
    
    //     e.preventDefault();
    //     const { signup } = hookSignup();
    //     let userID = document.querySelector('#userIdInput').value;
    //     let userPW = document.querySelector('#confirmPass').value;
    //     let userName = document.querySelector('#floatingInput').value;

    //     console.log( `ID: ${ userID }, PW: ${ userPW }, Name: ${ userName }` );

    //     signup( userID, userPW, userName );

    // })

}

export default hookSignupMount