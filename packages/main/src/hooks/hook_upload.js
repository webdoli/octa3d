import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage, timestamp } from "../db/firebaseDB";
import { Timestamp, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

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

function texOutput( textures, texName, uid ) {

    return new Promise( ( resolve, reject ) => {

        let tmpTex = []; //texture arr initialize

        for( let tex of textures ) {

            let uploadTexPath;
            ( uid ) 
            ? uploadTexPath = `octa3d/assets/private/texture/${uid}/${Timestamp.now().toMillis()}_octaTex_${texName}`
            : uploadTexPath = `octa3d/assets/public/texture/${Timestamp.now().toMillis()}_octaTex_${texName}`;
            
            const storageRef = ref( storage, uploadTexPath );
            const texUploadTask = uploadBytesResumable( storageRef, tex );

            texUploadTask.on( 'state_changed', ( snapshot ) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log( 'Texture upload is ' + progress + '% done.');

            }, (err) => {
                console.log('err: ' + err )
            }, () => {
                getDownloadURL( texUploadTask.snapshot.ref )
                    .then( (downloadURL) => {
                        console.log( 'Texture available at downloadURL: ' + downloadURL );
                        tmpTex.push( downloadURL);

                        if( textures.length === tmpTex.length ) resolve( tmpTex );

                    })
            })

        }

    })

    
}


function insertStorage( assets, uid ) {

    return new Promise( ( resolve, reject ) => {

        let tmpArr = new Array();

        assets.map( asset => {
            let uploadAssetPath;
            ( uid ) 
            ? uploadAssetPath = `octa3d/assets/private/models/${asset.ext}/${uid}/${Timestamp.now().toMillis()}_octa_stg_${asset.name}`
            : uploadAssetPath = `octa3d/assets/public/models/${asset.ext}/${Timestamp.now().toMillis()}_octa_stg_${asset.name}`;
            
            const storageRef = ref( storage, uploadAssetPath );
            const uploadTask = uploadBytesResumable( storageRef, asset.file );
    
            uploadTask.on( 'state_changed', ( snapshot ) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log( 'Upload is ' + progress + '% done.');
                return progress;
            }, ( err ) => {
                console.log( 'storage upload errors: ', err );
            }, () =>{
    
                getDownloadURL( uploadTask.snapshot.ref )
                .then( (downloadURL) => {
    
                    console.log( 'File available at downloadURL: ' + downloadURL );

                    // Texture check@ Promise return
                    if( asset.texture ) {
                        texOutput( asset.texture, asset.name, uid )
                            .then(( resTex ) => {

                                tmpArr.push( { obj: downloadURL, tex: resTex, ext: asset.ext, name: asset.name } );
                                if( assets.length === tmpArr.length ) resolve( tmpArr );

                            })
                    } // Texture Chk End@
    
                });

            });
    
        });

    })
    
}

async function insertAssetToUserDB ( res, docRef ) {
    try {
        res.map( async (usrObj) => {
            
            await updateDoc( docRef, {
                model: arrayUnion( usrObj )
            });

        })
    
    } catch (e) {
    
        console.error(e); // handle your error here
    
    } finally {
    
        console.log('user db Cleanup here'); // cleanup, always executed
        
    }
}

async function makeAssetRTServer ( res, usr, assetDB, datas ) {

    let { title, assets, description, field, madeBy, publish, texIn, rigIn } = datas;

    assetDB.title = title;
    assetDB.description = description;
    assetDB.field = field;
    assetDB.madeBy = madeBy;
    assetDB.publish = publish;
    assetDB.texIn = texIn;
    assetDB.rigIn = rigIn;
    assetDB.model = res;
    assetDB.user = usr.email;

    let assetsNames = '';
    assets.map( db => {
        assetsNames += `${db.name}_`
    })

    try {
    
        await setDoc( 
            doc( 
                db, 
                'models', 
                `${ Timestamp.now().toMillis() }_octa3dPublicModels_${assetsNames}`
            ), 
            assetDB, 
            { merge: true }
        )
    
    } catch (e) {
    
        console.error(e); // handle your error here
    
    } finally {
    
        console.log('asset to Storage Cleanup here'); // cleanup, always executed
        window.location.href= '/mypage';
        // created 페이지 생성 signal dispatch 실행
    }
}


const assetPublicUpload = ( datas, usr ) => {
    
    let { assets, publish } = datas;
    let docRef = doc( db, 'users', usr.uid );

    let assetDB = {
        uid: usr.uid, //이메일 변경
        model: null
    }
    
    if( publish === 'publish') {
        
        insertStorage( assets )
        .then( async ( res ) => {

            insertAssetToUserDB( res, docRef );
            makeAssetRTServer( res, usr, assetDB, datas );

        });

    } else {

        insertStorage( assets, usr.uid )
            .then( async ( res ) => {

                insertAssetToUserDB( res, docRef );
                makeAssetRTServer( res, usr, assetDB, datas );

            });
    
    }
    
}


export { coverUpload, avatarUpload, assetPublicUpload }