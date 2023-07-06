import { db } from "../db/firebaseDB";
import { doc, getDoc } from "firebase/firestore";

const getData = ( collection, usrDoc ) => {

    const promiseData = new Promise( async ( resolve, reject ) => {

        const docRef = doc( db, collection , usrDoc );
        const userDB = await getDoc( docRef )

        resolve( userDB )

    })

    // console.log('hook userDB: ' + userDB.data().nickName );

    return promiseData

}

export default getData