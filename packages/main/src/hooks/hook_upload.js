import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage, timestamp } from "../db/firebaseDB";
import { Timestamp, doc, setDoc } from "firebase/firestore";

const coverUpload = ( data, uid, loc ) => {

    console.log('cover upload');
    const uploadPath = `octa3d/mypage/profile/${loc}_img/${uid}/${data.name}`;
    const storageRef = ref( storage, uploadPath );

    const uploadTask = uploadBytesResumable( storageRef, data );

    uploadTask.on( 'state_changed', 
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log( 'Upload is ' + progress + '% done.');

            switch ( snapshot.state ) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }

        }, ( err ) => {

            console.log('err: ' + err )
        
        }, () => {

            getDownloadURL( uploadTask.snapshot.ref )
                .then( (downloadURL) => {

                    console.log( 'File available at downloadURL: ' + downloadURL );
                    const data = {
                        cover_img: downloadURL
                    }

                    async function run() {

                        try {
                        
                            await setDoc(doc(db, 'users', uid), data, { merge: true })
                        
                        } catch (e) {
                        
                            console.error(e); // handle your error here
                        
                        } finally {
                        
                            console.log('Cleanup here'); // cleanup, always executed
                            window.location.href= '/mypage';
                        }

                    }
                    
                    run();
                })
        }

    )
    
}

const avatarUpload = ( data, uid, loc ) => {

    console.log('avatar upload');
    const uploadPath = `octa3d/mypage/profile/${loc}_img/${uid}/${data.name}`;
    const storageRef = ref( storage, uploadPath );

    const uploadTask = uploadBytesResumable( storageRef, data );

    uploadTask.on( 'state_changed', 
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log( 'Upload is ' + progress + '% done.');

            switch ( snapshot.state ) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }

        }, ( err ) => {

            console.log('err: ' + err )
        
        }, () => {

            getDownloadURL( uploadTask.snapshot.ref )
                .then( (downloadURL) => {

                    console.log( 'File available at downloadURL: ' + downloadURL );
                    const data = {
                        user_icon: downloadURL
                    }

                    async function run() {

                        try {
                        
                            await setDoc(doc(db, 'users', uid), data, { merge: true })
                        
                        } catch (e) {
                        
                            console.error(e); // handle your error here
                        
                        } finally {
                        
                            console.log('Cleanup here'); // cleanup, always executed
                            window.location.href= '/mypage';
                        }

                    }
                    
                    run();
                })
        }

    )
    
}

const assetPublicUpload = ( datas, uid ) => {

    console.log('assets Upload Start: ');

    for( let i=0; i<datas.length; i++) {
        console.log( 'title: ', datas[i].title );
        console.log( 'asset: ', datas[i].obj );
        console.log( 'text: ', datas[i].tex );
    }

    // for( let data of datas ) {
    //     console.log( 'title: ', data.title );
    //     console.log( 'asset: ', data.obj );
    //     console.log( 'text: ', data.tex );
    // }


    // const uploadPath = `octa3d/assets/public/${ Timestamp.fromDate(new Date()) }/${ datas.title }`;
    // const storageRef = ref( storage, uploadPath );

    // const uploadTask = uploadBytesResumable( storageRef, data );

    // uploadTask.on( 'state_changed', 
    //     (snapshot) => {

    //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log( 'Upload is ' + progress + '% done.');

    //         switch ( snapshot.state ) {
    //             case 'paused':
    //                 console.log('Upload is paused');
    //                 break;
    //             case 'running':
    //                 console.log('Upload is running');
    //                 break;
    //         }

    //     }, ( err ) => {

    //         console.log('err: ' + err )
        
    //     }, () => {

    //         getDownloadURL( uploadTask.snapshot.ref )
    //             .then( (downloadURL) => {

    //                 console.log( 'File available at downloadURL: ' + downloadURL );
    //                 const data = {
    //                     user_icon: downloadURL
    //                 }

    //                 async function run() {

    //                     try {
                        
    //                         await setDoc(doc(db, 'users', uid), data, { merge: true })
                        
    //                     } catch (e) {
                        
    //                         console.error(e); 
                        
    //                     } finally {
                        
    //                         console.log('Cleanup here'); 
    //                         window.location.href= '/mypage';
    //                     }

    //                 }
                    
    //                 run();
    //             })
    //     }

    // )
    
}


export { coverUpload, avatarUpload, assetPublicUpload }