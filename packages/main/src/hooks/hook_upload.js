import { ref, uploadBytesResumable, getDownloadURL, deleteObject, getStorage } from "firebase/storage";
import { db, storage, timestamp } from "../db/firebaseDB";
import { Timestamp, arrayUnion, doc, getDoc, setDoc, updateDoc, query, where, getDocs, collection, addDoc } from "firebase/firestore";

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

function texOutput( textures, texName, ext, uid, secure ) {

    return new Promise( ( resolve, reject ) => {

        let tmpTex = [];
        

        for( let tex of textures ) {

            let uploadTexPath;
            ( secure === 'private' ) 
            ? uploadTexPath = `octa3d/assets/private/models/${ext}/texture/${tex.name}`
            : uploadTexPath = `octa3d/assets/public/models/${ext}/texture/${tex.name}`;
            
            const storageRef = ref( storage, uploadTexPath );
            // const httpRef = ref( storage, `https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/${tex.name}` )
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
                        let tmpObj = {}
                        let textureName = tex.name;
                        let textureUrl = downloadURL;
                        tmpObj[ textureName ] = textureUrl;

                        tmpTex.push( tmpObj );

                        if( textures.length === tmpTex.length ) resolve( tmpTex );

                    })
            })

        }

    })

    
}


function insertStorage( assets, uid, secure ) {

    return new Promise( ( resolve, reject ) => {

        let tmpArr = new Array();

        assets.map( asset => {
            let uploadAssetPath;
            ( secure === 'private' ) 
            ? uploadAssetPath = `octa3d/assets/private/models/${asset.ext}/${Timestamp.now().toMillis()}_octa_stg_${asset.name}`
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
                        texOutput( asset.texture, asset.name, asset.ext, uid, secure )
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

async function insertAssetToUserDB ( res, docRef, docID, update ) {
    try {
        res.map( async (usrObj) => {

            usrObj.docID = await docID;
            
            if( update === 'update' ) {
                console.log('3) Update @@ insrtAssetToUserDB 업데이트 ');
                const q = query( collection(db, 'users'), where( "model", "==", true ));
                const querySnapshot = await getDocs( q );

                console.log( 'usrObj: ', usrObj );

                console.log('쿼리 querySnapshot 결과값: ', querySnapshot );
                querySnapshot.forEach( doc => {
                    console.log('쿼리 doc: ', doc );

                    doc.data().map( (asset, index) => {
                        let docInID = Object.values( asset )
                        if (docInID === docID ) asset[index] = usrObj; 
                    //     console.log( 'asset: ', asset[index] );

                        // if( asset.docID === docID ) {
                        //     asset[index] = usrObj
                        // }
                    })
                })
                // user.model에서 docID와 같은 model을 배열에서 찾음
                // 해당 배열에 덮어쓰기
            } else if( update === 'create' ){
                console.log('3) Create @@ insrtAssetToUserDB');
                await updateDoc( docRef, {
                    model: arrayUnion( usrObj )
                });
            }

        })
    
    } catch (e) {
    
        console.error(e); // handle your error here
    
    } finally {
    
        console.log('user db Cleanup here'); // cleanup, always executed
        
    }
}

async function makeAssetRTServer ( res, usr, assetDB, datas, updateDocUID ) {

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
        if( updateDocUID ) {
            console.log('2) Update makeAssetRTServer, docID: ', updateDocUID );
            //docID 경로에서 기존 Storage에 있는 파일 모두 삭제 
            const storage = getStorage();
            const docRef = doc( db, 'models', updateDocUID );
            const docSnap = await getDoc( docRef );

            if( docSnap.exists() ) {
                let removeModelUrl = docSnap.data().model.map( item => {
                    if( item.obj ) {

                        const desertRef = ref( storage, item.obj );
                        deleteObject( desertRef ).then( () => {
                            console.log( 'Storage 파일 삭제' );
                        }).catch( err => console.log('파일삭제 Err: ', err ))
                    }

                    if( item.tex ) {
                        item.tex.map( texture => {
                            let value = Object.values( texture )[0];
                            const desertRef = ref( storage, value );
                            deleteObject( desertRef ).then( () => {
                                console.log( 'Storage 텍스처 삭제' );
                            }).catch( err => console.log('파일삭제 Err: ', err ))
                        })
                    }
                })  
            }

            await updateDoc( docRef, assetDB );
            insertAssetToUserDB( res, doc( db, 'users', usr.uid ), updateDocUID, 'update' );

        } else {
            console.log('2) Create makeAssetRTServer docID');
            const docRef = await addDoc( collection( db, 'models' ), assetDB );
            await setDoc(
                doc( db, 'models', `${ docRef.id }` ), 
                { docID: docRef.id }, 
                { merge: true }
            );

            insertAssetToUserDB( res, doc( db, 'users', usr.uid ), docRef.id, 'create' );

        }
        
    
    } catch (e) {
    
        console.error(e); // handle your error here
    
    } finally {
    
        console.log('asset to Storage Cleanup here'); // cleanup, always executed
        //@ window.location.href= '/mypage';
        // created 페이지 생성 signal dispatch 실행
    }
}


const assetPublicUpload = ( datas, usr, update ) => {
    
    let { assets, publish } = datas;
    let docRef = doc( db, 'users', usr.uid );
    let assetDB = {
        uid: usr.uid, //이메일 변경
        model: null
    }
    let updateDocID = ( update ) ? update : '';
    
    if( publish === 'publish') {
        
        insertStorage( assets, usr.uid, 'public' )
        .then( async ( res ) => {

            // insertAssetToUserDB( res, docRef );
            makeAssetRTServer( res, usr, assetDB, datas, updateDocID );

        });

    } else {

        insertStorage( assets, usr.uid, 'private' )
            .then( async ( res ) => {

                // insertAssetToUserDB( res, docRef );
                makeAssetRTServer( res, usr, assetDB, datas );

            });
    
    }
    
}


export { coverUpload, avatarUpload, assetPublicUpload }