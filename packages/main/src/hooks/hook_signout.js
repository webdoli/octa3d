import { auth, db } from "../db/firebaseDB";
import { signOut } from 'firebase/auth';
import { doc, updateDoc } from "firebase/firestore";

export const hookSignout = () => {

    const logout = () => {

        signOut( auth )
            .then( () => {

            })
            .then( () => {
                console.log('로그아웃');
                window.location.href = '/';
            })
            .catch( (err) => {
                console.log( err );
            })
    }

    return { logout }

}