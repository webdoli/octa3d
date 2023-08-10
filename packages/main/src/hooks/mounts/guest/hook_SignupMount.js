import { hookSignup } from "../../auth/hook_signup";


const hookSignupMount = ( main, footer, mount, loader ) => {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );

    main.appendChild( mount() );
    history.pushState({ data: '회원가입' }, 'Signup Page', '/signup');
    loader.style.display = 'none';

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