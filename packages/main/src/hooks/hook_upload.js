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

    // console.log('assets Upload Start: ', datas );

    let { title, assets, description, field, madeBy, publish, texIn, rigIn } = datas;
    
    // console.log( 'title: ', title );
    // console.log( 'asset: ', assets );
    // console.log( 'description: ', description  );
    console.log( 'field: ', field );
    // console.log( 'madeBy: ', madeBy );
    // console.log( 'publish: ', publish );
    // console.log( 'texIn: ', texIn );
    // console.log( 'rigIn: ', rigIn );
    

    if( publish === 'publish') {
        
        console.log('공개용');
        let tmpAssetDB = [];
        let assetDB = {
            id: uid, //이메일 변경
            asset: null,
            tex: []
        }

        assets.map( asset => {

            console.log( 'filed: ', field );
            const uploadAssetPath = `octa3d/assets/public/${field}/${asset.name.split('.').shift()}/${asset.name}`;
            const storageRef = ref( storage, uploadAssetPath );
            const uploadTask = uploadBytesResumable( storageRef, asset.file );

            uploadTask.on( 'state_changed', ( snapshot ) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log( 'Upload is ' + progress + '% done.');
            }, (err) => {

            }, () =>{
                getDownloadURL( uploadTask.snapshot.ref )
                    .then( (downloadURL) => {
                        console.log( 'File available at downloadURL: ' + downloadURL );
                        assetDB.asset = downloadURL
                    })
            });

            console.log( 'assetDB: ', assetDB );

            // const uploadAssetPath = `octa3d/assets/public/${field}/${asset.name.split('.').shift()}/${ Timestamp.fromDate(new Date()) }?${asset.name}`;
            // const storageRef = ref( storage, uploadAssetPath );
            // const uploadTask = uploadBytesResumable( storageRef, asset.file );

            // if( asset.texture ) {
            //     const uploadTexPath = `octa3d/assets/public/texture/${ Timestamp.fromDate(new Date()) }?${asset.name}`;
            //     const storageRef = ref( storage, uploadTexPath );
                
            //     for( let tex of asset.texture ) {
            //         const texUploadTask = uploadBytesResumable( storageRef, tex );
            //         texUploadTask.on( 'state_changed', ( snapshot ) => {
            //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //             console.log( 'Upload is ' + progress + '% done.');
        
            //         }, (err) => {
            //             console.log('err: ' + err )
            //         }, () => {
            //             getDownloadURL( texUploadTask.snapshot.ref )
            //                 .then( (downloadURL) => {
            //                     console.log( 'File available at downloadURL: ' + downloadURL );
            //                     assetDB.tex.push( downloadURL)

            //                 })
            //         })
            //     }
            // }

            // uploadTask.on( 'state_changed', ( snapshot ) => {
            //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //     console.log( 'Upload is ' + progress + '% done.');
                

            // }, (err) => {
            //     console.log('err: ' + err )
            // }, () => {
                
            //     async function run() {

            //         try {
                    
            //             await setDoc(doc(db, 'users', uid), assetDB, { merge: true })
                    
            //         } catch (e) {
                    
            //             console.error(e); 
                    
            //         } finally {
                    
            //             console.log('Cleanup here'); 
            //             window.location.href= '/mypage';
            //         }

            //     }
                
            //     run();
            // })

        })

    } else {
        //private
        
    
    }
    
}


export { coverUpload, avatarUpload, assetPublicUpload }