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

            console.log('blob: ', blob );
            let texFile = new File(
                [blob],
                `${ originName }`,
                { type: type, lastModified: new Date().getTime() }
            );
            
            resolve( texFile );
            
        })

    })
}

function getData( c, documents, editor ) {
   
    return new Promise( ( resolve, reject ) => {

        documents.map( async (item) => {

            let q = query( collection( db, c ), where( "docID", "==", item ) );
            const modelDatas = await getDocs( q );
            modelDatas.forEach( datas => {

                let modelUrlArr = datas.data().model;
                
                modelUrlArr.forEach( model => {
                    
                    let dt = new DataTransfer();
                    let modelSrc = new Array();
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

                        //@ modelSrc.push( objFile );
                        dt.items.add( objFile )

                        if( modelTex.length > 0 ) {
                        
                            
                            modelTex.map( async (texArr) => {
                                for( let tex in texArr ) {
    
                                    let texName = tex;
                                    let texValue = texArr[tex];
                                    let texExt = texName.split( '.' ).pop().toLowerCase();
                                    console.log('텍스처네임: ', texName );
                                    
                                    getDataFromStorage( `${ texName }`,`${ texValue }`, `image/jpeg` )
                                        .then( ( texRes ) => {
                                            texRes.cloudName = texValue+texExt;
                                            texRes.textureOriginName = texName;
                                            //@ modelSrc.push( texRes );
                                            dt.items.add( texRes );
                                            //@ resolve( modelSrc );
                                            resolve( dt.files );

                                        })
                                    /*
                                    let texureData = await getBlob( ref( storage, texValue ) )
                                        .then( blob => {
                                            console.log('blob: ', blob );
                                            let texFile = new File(
                                                [blob],
                                                `${ texValue }`,
                                                { type: 'file', lastModified: new Date().getTime() }
                                            );
                                            // dt.items.add( texFile );
                                            // modelSrc.push( texFile );
                                            return texFile;
                                            
                                        });
                                        
                                        console.log('textureData: ', texureData );
                                        modelSrc.push( texureData );
                                    // modelSrc.push( tex );
                                    */
                                    
                                }
                            });
                        
                        } // if End
                        
                        

                        //return modelSrc;
                        // console.log('modelSrc: ', modelSrc );
                        // editor.loader.loadFiles( modelSrc );
                        
                    })
                    // getBlob( ref( storage, modelUrl ) )
                    //     .then( blob => {
                            
                    //         let objFile = new File( 
                    //             [blob], 
                    //             `${ modelName }.${ modelExt }`,
                    //             { 
                    //                 type: 'file',
                    //                 lastModified:new Date().getTime()
                    //             }    
                    //         );
                            
                    //         modelSrc.push( objFile );
                            
                    //     })

                        // if( modelTex.length > 0 ) {
                        
                        //     modelTex.map( texArr => {
                        //         for( let tex in texArr ) {
    
                        //             let texName = tex;
                        //             let texValue = texArr[tex];
    
                        //             getBlob( ref( storage, texValue ) )
                        //                 .then( blob => {
                        //                     console.log('blob: ', blob );
                        //                     let texFile = new File(
                        //                         [blob],
                        //                         `${ texValue }`,
                        //                         { type: 'file', lastModified: new Date().getTime() }
                        //                     );
                                            
                        //                     modelSrc.push( texFile );
                        //                 });
                                    
                        //         }
                        //     })
                        // }

                        
                            // resolve( dt );

                });

            });
    
        });

    })

}

const getDatas = ( c, docs ) => {

    let res = [];
    
    return new Promise( (resolve, reject) => {

        try {
            if( docs ) {

                getData( c, docs ).then( res => {
                    resolve( res );
                });
        
            }
        } catch ( err ){
            console.log( err );
        }

    });
    
}

export { getDatas }