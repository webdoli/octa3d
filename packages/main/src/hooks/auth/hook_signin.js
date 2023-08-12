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
                    
                }

            })
            .catch( (err) => {

                console.log( err );

            })

    }

    return { hookLogin }

}