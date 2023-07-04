import { hookSignin } from "./hook_signin";

const hookSigninMount = ( main, footer, mount, loader ) => {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );

    main.appendChild( mount() );
    history.pushState({ data: '로긴' }, 'Login Page', '/login');
    loader.style.display = 'none';

    document.querySelector('#octa3d-signin-form').addEventListener('submit', (e) => {

        e.preventDefault();
        const { hookLogin } = hookSignin();
        let userID = document.querySelector('#floatingInput').value;
        let userPW = document.querySelector('#floatingPassword').value;

        hookLogin( userID, userPW );

    })

}

export default hookSigninMount