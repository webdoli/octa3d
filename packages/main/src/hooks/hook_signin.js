import { auth, db } from "../db/firebaseDB"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const hookSignin = () => {

    const hookLogin = ( email, password ) => {

        signInWithEmailAndPassword( auth, email, password )
            .then( (res) => {

                return res.user.uid;
                console.log('window uid 저장: ' + res.user.uid );

            })
            .then( (uid) => {

                console.log('db저장 uid: ' + uid )
                // db 저장
                window.location.href = '/';

            })
            .catch( (err) => {

                console.log( err );

            })

    }

    return { hookLogin }

}