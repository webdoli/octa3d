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

function texOutput( textures, texName ) {

    return new Promise( ( resolve, reject ) => {

        let tmpTex = []; //texture arr initialize

        for( let tex of textures ) {

            const uploadTexPath = `octa3d/assets/public/texture/${Timestamp.now().toMillis()}_octaTex_${texName}`;
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
                        console.log('tmpTex: ', tmpTex)

                        if( textures.size === tmpTex.length ) resolve( tmpTex );

                    })
            })

        }

    })

    
}


function assetOutput( assets ) {

    return new Promise( ( resolve, reject ) => {

        let tmpArr = new Array();

        assets.map( asset => {
            
            const uploadAssetPath = `octa3d/assets/public/models/${asset.ext}/${Timestamp.now().toMillis()}_octa_stg_${asset.name}`;
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
                        texOutput( asset.texture, asset.name )
                            .then(( resTex ) => {
                                tmpArr.push( { obj: downloadURL, tex: resTex, ext: asset.ext, name: asset.name } );

                                console.log('tmpArr: ', tmpArr);
                                // console.log('asset.length: ', asset.length );
                                // console.log('tmpArr.tex.length: ', tmpArr.tex.length );
                                if( assets.length === tmpArr.length ) {
                                    console.log('최종 tmpArr: ', tmpArr ); 
                                    resolve( tmpArr );

                                }
                            })
                    } // Texture Chk End@
    
                });

            });
    
        });

    })
    
}

const assetPublicUpload = ( datas, usr ) => {

    // console.log('assets Upload Start: ', datas );

    let { title, assets, description, field, madeBy, publish, texIn, rigIn } = datas;
    
    if( publish === 'publish') {
        
        console.log('공개용');
        let assetDB = {
            uid: usr.uid, //이메일 변경
            model: null
        }

        let docRef = doc( db, 'users', usr.uid );

        assetOutput( assets )
        .then( async ( res ) => {
            
            // insert user db
            async function insertAssetToUserDB() {

                try {
                    res.map( async (usrObj) => {
                        
                        await updateDoc( doc( db, 'users', usr.uid ), {
                            model: arrayUnion( usrObj )
                        });

                    })
                
                } catch (e) {
                
                    console.error(e); // handle your error here
                
                } finally {
                
                    console.log('user db Cleanup here'); // cleanup, always executed
                    
                }

            }

            // insert public assets
            async function insertAssetToPublic() {

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
                
                    console.log('asset to Public Cleanup here'); // cleanup, always executed
                    //window.location.href= '/mypage';
                }

            }
            
            insertAssetToUserDB();
            insertAssetToPublic();

        });

    } else {
        //private
        
    
    }
    
}


export { coverUpload, avatarUpload, assetPublicUpload }