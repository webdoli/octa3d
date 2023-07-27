import { db } from "../db/firebaseDB";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const getRealData = ( collection, usrDoc ) => {

    const promiseData = new Promise( async ( resolve, reject ) => {

        const docRef = doc( db, collection , usrDoc );
        const userDB = await getDoc( docRef )

        resolve( userDB )

    })

    // console.log('hook userDB: ' + userDB.data().nickName );

    return promiseData

}

export default getRealData