import { auth, db } from "../../db/firebaseDB"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const hookSignin = () => {

    const hookLogin = ( email, password ) => {

        signInWithEmailAndPassword( auth, email, password )
            .then( res => {
                
                if( res.user.emailVerified ) {
                    updateDoc( doc( db, 'users', res.user.uid ), {
                        online: 'on'
                    }).then( () => {
                        location.replace('/');
                    })
                } else {

                    alert('email not verified. check your email and verify it');
                    location.replace('/');
                }

            })
            .catch( (err) => {

                const loginMsgEle = document.querySelector('.loginMsg');
                let errMsg = err.message.includes('auth/wrong-password');
                let showMsg = 
                ( errMsg ) 
                ? 'Invalid password. Please try again or click Find Password to reset.'
                : ' Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
                
                loginMsgEle.innerHTML = showMsg;

            })

    }

    return { hookLogin }

}