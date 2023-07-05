import { auth, db, storage } from "../db/firebaseDB";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const hookSignup = () => {

    const signup = ( email, password, nickName ) => {

        createUserWithEmailAndPassword( auth, email, password )
            .then( async (res) => {

                if( !res ) throw new Error('Could not complete signup');

                const data = {
                    online: true,
                    nickName: nickName,
                    id: email
                }

                try {

                    const docRef = await setDoc( doc( db, "users", res.user.uid ), data );
                    console.log("Document written with ID: ", res.user.uid);

                } catch (e) {

                    console.error("Error adding document: ", e);

                }
            })
            .then( () => {

                window.location.href = '/';

                return updateProfile( auth.currentUser, {
                    displayName: nickName
                });

            })
            .catch( err => {

                console.log( '회원가입 Error: ' + err );

            })

    }

    return { signup }

}