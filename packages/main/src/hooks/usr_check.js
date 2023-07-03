import { auth } from "../db/firebaseDB";
import { onAuthStateChanged } from "firebase/auth";

const onAuthStateChangedPromise = new Promise( (resolve, reject) => {

    onAuthStateChanged( auth, (user) => {

        if( user ) {

            resolve( user )
        
        }  

    }, err => {

        reject( err )

    })

});

export const onAuthStateInit = () => onAuthStateChangedPromise