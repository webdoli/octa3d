import { auth, db } from "../db/firebaseDB"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const hookSignin = () => {

    const hookLogin = async ( email, password ) => {

        await signInWithEmailAndPassword( auth, email, password )
            .then( async (res) => {

                const updateRef = doc( db, 'users', res.user.uid );

                try {

                    await updateDoc( updateRef, {

                        online: true
                    
                    }).then( () => {
                        console.log('로그인 성공: ')
                        //window.location.href = '/';

                    });

                } 
                catch ( err ) {

                    console.log('Error Occured: ', err );
                
                } 
                
                return res.user.uid;

            })
            .catch( (err) => {

                console.log( err );

            })

    }

    return { hookLogin }

}