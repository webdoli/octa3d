import { auth, db } from "../db/firebaseDB";


const userPWValidChk = ( userPW ) => {

    console.log('userPW: ', userPW );
    /*
    let user = auth.currentUser;
    let credential = auth.EmailAuthProvider.credential(
        auth.currentUser.email,
        userPW
    );

    user.reauthenticateWithCredential( credential ).then( ( res ) => {

        console.log( '인증 됨: ', res );

    }).catch( (err) => {

        console.log('err: ', err );
    
    })
    */

}


export { userPWValidChk }