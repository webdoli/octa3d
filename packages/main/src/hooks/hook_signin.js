import { auth, db } from "../db/firebaseDB"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const hookSignin = () => {

    const hookLogin = ( email, password ) => {

        signInWithEmailAndPassword( auth, email, password )
            .then( res => {

                updateDoc( doc( db, 'users', res.user.uid ), {
                    online: 'on'
                })

            })
            .catch( (err) => {

                console.log( err );

            })

    }

    return { hookLogin }

}