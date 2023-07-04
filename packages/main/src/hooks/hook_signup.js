import { auth } from "../db/firebaseDB";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const hook_Signup = () => {

    const hookSignup = ( email, password, nickName ) => {

        createUserWithEmailAndPassword( auth, email, password )
            .then( res => {

                for( let item in res.user ) {
                    console.log( `key: ${ item }, value: ${ res.user[item]} `)
                }
                // fireFunction sending another site or 전역변수로 res.user 저장
                // React: Context변수로 저장 => 싱글턴 패턴으로 전역객체 저장 필요 
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

    return { hookSignup }

}