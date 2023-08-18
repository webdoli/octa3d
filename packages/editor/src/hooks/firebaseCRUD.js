import { getDownloadURL, ref, getBlob } from "firebase/storage";
import { db, storage } from "../db/firebaseDB";
import { collection, doc, query, where, getDocs } from "firebase/firestore";

// function getModel( modelUrl, modelName, modelExt ) {
//     return new Promise( (resolve, reject) => {

//         let modelSrc = new Array();

//         getBlob( ref( storage, modelUrl ) )
//             .then( blob => {
                
//                 let objFile = new File( 
//                     [blob], 
//                     `${ modelName }.${ modelExt }`,
//                     { 
//                         type: 'file',
//                         lastModified:new Date().getTime()
//                     }    
//                 );
                
//                 modelSrc.push( objFile );
//                 resolve( modelSrc )
                
                
//             })

//     })
// }

function getDataFromStorage( originName, value, type ) {

    return new Promise(( resolve, reject ) => {

        getBlob( ref( storage, value ) )
        .then( blob => {

            let texFile = new File(
                [blob],
                `${ originName }`,
                { type: type, lastModified: new Date().getTime() }
            );
            
            resolve( texFile );
            
        })

    })
}

function getTexData ( textures ) {

    console.log('getTexData 실행, textures: ', textures );
    let textureFiles = new Array();

    return new Promise( resolve => {

        textures.map( (texArr) => {

            for( let tex in texArr ) {
    
                let texName = tex;
                let texValue = texArr[tex];
                let texExt = texName.split( '.' ).pop().toLowerCase();
                
                getDataFromStorage( `${ texName }`,`${ texValue }`, `image/jpeg` )
                .then( ( texRes ) => {
    
                    texRes.cloudName = texValue+texExt;
                    texRes.textureOriginName = texName;
                    textureFiles.push( texRes );
                })
            }
    
        });

        resolve( textureFiles )

    })

}

function setDataArr( modelUrlArr, modelSrc ) {

    console.log('setDataArr 실행');

    return new Promise( resolve => {

        modelUrlArr.forEach( model => {
                    
            // let dt = new DataTransfer();
            let modelUrl = model.obj;
            let modelExt = model.ext;
            let modelName = model.name;
            let modelTex = model.tex;

            getBlob( ref( storage, modelUrl ) )
            .then( blob => {

                let objFile = new File( 
                    [blob], 
                    `${ modelName }.${ modelExt }`,
                    { 
                        type: 'file',
                        lastModified:new Date().getTime()
                    }, 
                );

                modelSrc.push( objFile );
                console.log('modelTex: ', modelTex );

                if( modelTex ) {

                    getTexData( modelSrc, modelTex )
                    .then(( res ) => {

                        console.log('텍스처 결과: ', res );
                        resolve( res );
                    })

                } else {

                    resolve( modelSrc );

                }
                
            })

        }); //model End

    })
}

function getData( c, documents, editor ) {
   
    return new Promise( ( resolve, reject ) => {

        documents.map( async (item) => {
            
            let q = query( collection( db, c ), where( "docID", "==", item ) );
            const modelDatas = await getDocs( q );

            modelDatas.forEach( datas => {

                let modelUrlArr = datas.data().model;
                let modelSrc = new Array();
                console.log('modelUrlArr: ', modelUrlArr );
                resolve( modelUrlArr );
                // setDataArr( modelUrlArr, modelSrc )
                //     .then( ( res ) => {
                //         resolve( res );
                //     })

            });
    
        });

    })

}


function getFBModelData ( url, name, ext ) {

    console.log('getModelData 실행, modelDB: ' );

    return new Promise( resolve => {

        getBlob( ref( storage, url ) )
            .then( blob => {

                let objFile = new File( 
                    [blob], 
                    `${ name }.${ ext }`,
                    { 
                        type: 'file',
                        lastModified:new Date().getTime()
                    }, 
                );

                resolve( objFile );
                
            })

    })

}

function getFBTexData ( texureDB ) {

    console.log('getTexData 실행, textureDB: ', texureDB );

    return new Promise( resolve => {

        let texName = Object.keys( texureDB )[0];
        let texValue = Object.values( texureDB )[0];
        let texExt = texName.split( '.' ).pop().toLowerCase();
        
        getDataFromStorage( `${ texName }`,`${ texValue }`, `image/jpeg` )
        .then( ( texRes ) => {

            texRes.cloudName = texValue+texExt;
            texRes.textureOriginName = texName;
            resolve( texRes );

        })

    })

}


const getDatas = ( c, docs ) => {

    let res = [];

    if( docs ) {

        
        return new Promise( resolve => {

            getData( c, docs )
                .then( fbDocs => {

                    for( let i = 0; i < fbDocs.length; i++ ) {

                        let objUrl = fbDocs[i].obj;
                        let objName = fbDocs[i].name;
                        let objExt = fbDocs[i].ext;

                        if( fbDocs[i].tex.length > 1 ) {

                            let getTextures = fbDocs[i].tex.map( texInfo => getFBTexData( texInfo ) );

                            Promise.all( getTextures )
                                .then( texFile => {

                                    getFBModelData( objUrl, objName, objExt )
                                     .then( objModelDB => {
                                        texFile.unshift( objModelDB );
                                        resolve( texFile );
                                     });
                                    
                                })

                        }

                        // console.log( 'fbDocs: ', fbDocs[i] );
                    }
                })

        })    

    }
    
}

export { getDatas }