import { db } from "../db/firebaseDB";
import { doc, onSnapshot } from "firebase/firestore";

const getData = ( collection, usrDoc ) => {

    const promiseData = new Promise( async ( resolve, reject ) => {

        const unsub = onSnapshot( doc( db, collection , usrDoc ), (doc) =>{
            resolve( doc )
        })
        
    })

    // console.log('hook userDB: ' + userDB.data().nickName );

    return promiseData

}

export default getData