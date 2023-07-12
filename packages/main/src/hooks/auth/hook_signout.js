import { auth, db } from "../../db/firebaseDB";
import { signOut } from 'firebase/auth';
import { doc, updateDoc } from "firebase/firestore";

export const hookSignout = () => {

    const logout = async () => {

        const { uid } = auth.currentUser;
        console.log('uid: ', uid );
        const updateRef = doc( db, 'users', uid );

        try {
            await updateDoc( updateRef, {

                online: false 
            
            }).then( () => {

                signOut( auth )
                    .then( () => {
                    
                        console.log('유저 로그아웃 성공');
                        window.location.href = '/';
                    
                    })
                    .catch( ( err ) => {

                        console.log( err );
                    
                    })

            })
        }
        catch ( err ) {

            console.log( 'Logout Error: ', err );

        }

        
    }

    return { logout }

}