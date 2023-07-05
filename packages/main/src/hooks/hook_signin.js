import { auth, db } from "../db/firebaseDB"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const hookSignin = () => {

    const hookLogin = ( email, password ) => {

        signInWithEmailAndPassword( auth, email, password )
            .then( (res) => {

                const updateRef = doc( db, 'users', res.user.uid );
                
                updateDoc( updateRef, {

                    online: true
                
                });

                return res.user.uid;

            })
            .then( (uid) => {

                window.location.href = '/';

            })
            .catch( (err) => {

                console.log( err );

            })

    }

    return { hookLogin }

}