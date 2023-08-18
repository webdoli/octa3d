import { UIDiv, UIRow, MoglUI, UIInput, UITextArea, UIP, UIButton, UISpan, UIIcon } from "../../../libs/moglUI";
import "bootstrap-icons/font/bootstrap-icons.css";
import { assetPublicUpload, firebaseQueryTest } from "../../hook_upload";
import { db, auth } from "../../../db/firebaseDB";
import { getDoc, doc } from 'firebase/firestore';
import { getStorage, ref, getBlob } from "firebase/storage";

function makeSlcOpt ( slc, opts ) {
    let slcTag = new MoglUI( document.createElement('select') ).setAttr( slc );
    opts.map( opt => {

        let option = new MoglUI( document.createElement('option')).setAttr( opt.attr ).setTextContent( opt.val );
        slcTag.add( option );
    });

    return slcTag

}

const profileAssetEdit = ( signals, docUID ) => {

    const storage = getStorage();
    let dt = new DataTransfer();
    let changeEvt = new Event('change');
    let docID = docUID;
    let tabPane = new UIDiv().setAttr({'class':'tab-pane', 'id':'edit-asset', 'role':'tabpanel', 'aria-labelledby':'edit-assets-tab'});

    let getModelData = async () => {
        const docRef = doc( db, 'models', docID );
        const docSnap = await getDoc( docRef );
        
        if( docSnap.exists() ) {

            let modelData = docSnap.data();

            let row02 = new UIRow();
            let col01 = new UIDiv().setAttr({'class':'col'});
            let uploadWrap = new UIDiv().setAttr({'class':'create-nft py-5 px-4'});
            let formEle = new MoglUI( document.createElement('form')).setAttr({'class':'create-nft-form'});

            // form inner01
            let formWrap01 = new UIDiv().setAttr({'class':'upload-item mb-30' });
            let formP01 = new UIP('FBX,OBJ,GLTF (Max-30mb)');
            let formDiv02 = new UIDiv().setAttr({'class':'custom-upload' });
            let file01 = new UIDiv().setAttr({'class':'file-btn'}).setTextContent('Upload a file');
            let icon04 = new MoglUI(document.createElement('i')).setAttr({'class':'icofont-upload-alt'})
            let fileIpt = new UIInput().setAttr({'type':'file', 'id':'myAssetUpload', 'class':'form-control' });
            let fileTable = new UIDiv().setAttr({ 'id':'uploadedFileList', 'style':'display:none;' });

            file01.add( icon04 );
            formDiv02.add( file01, fileIpt );
            formWrap01.add( formP01, formDiv02 );

            // Drop & Drag Evt
            fileIpt.dom.addEventListener( 'click', () => {
                fileIpt.value = '';
                console.log( fileIpt.value );
            });
            fileIpt.dom.addEventListener('change', e => {

                fileTable.dom.innerHTML += `<p class="uploadFile-list">added: ${e.target.files[0].name } </p>`;
                fileTable.dom.style.cssText = 'display:flex;'

            });
        
            ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => {
                formWrap01.dom.addEventListener( evt, e => {
                    e.preventDefault();
                    e.stopPropagation();
                    if( e.target.style.border === '2px solid tomato') {
                        e.target.style.cssText = 'border:2px dashed rgba(81,56,238,.5);padding:30px 15px;border-radius:15px;background:rgba(4,11,41,.15);transition:all .3s ease';
                    }

                })
            });
        
            ["dragover", "dragenter"].forEach( evt => { 
                formWrap01.dom.addEventListener( evt, e => {
                    e.preventDefault();
                    e.stopPropagation();
                    file01.dom.innerHTML = 'Drop your file here!';
                });
            });
        
            //func
            function makeFileList( parent, file ) {

                let listWrap = new UIDiv().setAttr({ 'class':`uploadList-${file.name}` });
                let removeBtn = new UIIcon().setAttr({ 'class':'bi bi-x-square', 'id':`${file.name}` });
            
                let listItem = new UISpan().setTextContent(` ${ file.name }  `);
                listWrap.add( listItem, removeBtn );
                parent.add( listWrap );
            
                fileIpt.dom.files = dt.files;
            
                removeBtn.dom.addEventListener('click', e => {
                
                    e.preventDefault();
                    dt = null;
                    dt = new DataTransfer();
                    let removeNode = e.target.parentNode;
                    const { files } = fileIpt.dom;

                    for( let i = 0; i < files.length; i ++ ) {
                    
                        ( e.target.id === files[i].name ) ? fileTable.dom.removeChild( removeNode ) : dt.items.add( files[i] );
                    
                    }
                
                    fileIpt.dom.files = dt.files;
                
                })

            }
        
            formWrap01.dom.addEventListener( 'drop', e => {
            
                file01.dom.innerHTML = 'Upload a file';
                let fileAll = e.dataTransfer.files;

                for( let i=0; i< fileAll.length; i++ ) {
                    console.log('upload file blob: ', fileAll[i] );
                    dt.items.add( fileAll[i] );
                    makeFileList( fileTable, fileAll[i] );
                }
            
                fileTable.dom.style.cssText = 'display:flex;flex-direction:column;';
            
            });

            //firebase storage get input files
            modelData.model.map( file => {
                console.log('obj: ', file.obj );
                console.log('text length: ', file.tex.length );
                let modelTexFiles = file.tex;
                let modelObj = file.obj;

                getBlob( ref( storage, modelObj ) )
                    .then( ( blob ) => {
                        let myFileObj = new File( [blob], `${file.name}.${file.ext}`, {type:'',lastModified:new Date().getTime()} )
                        //console.log('Blob File: ', myFileObj );
                        dt.items.add( myFileObj );
                        makeFileList( fileTable, myFileObj );
                    })

                if( modelTexFiles.length > 0 ) {
                    modelTexFiles.map( texFile => {

                        let texFileUrls = Object.values( texFile );
                        let texFileTitle = Object.keys( texFile );

                        getBlob( ref( storage, texFileUrls[0] ))
                            .then((blob) => {
                                let texCvtFile = new File( [blob], `${texFileTitle[0]}`, {type:'',lastModified:new Date().getTime()} );
                                dt.items.add( texCvtFile );
                                makeFileList( fileTable, texCvtFile );
                            })
                    })
                }

                fileTable.dom.style.cssText = 'display:flex;flex-direction:column;';

            }); 

            // form inner02:: item name input
            let formWrap02 = new UIDiv().setAttr({'class':'form-floating item-name-field mb-3'});
            let formWrap02Input = new UIInput('Item Name').setAttr({
                'type':'text', 'class':'form-control','id':'itemNameInput', 
                'placeholder':'Item Name', 'value':`${ modelData.title }`,'required':''});
            let formWrap02Label = new MoglUI(document.createElement('label')).setAttr({'for':'itemNameInput'}).setTextContent('Item Name');
            formWrap02.add( formWrap02Input, formWrap02Label );
        
            // form inner03:: item description
            let formWrap03 = new UIDiv().setAttr({'class':'form-floating item-desc-field mb-30'});
            let formWrap03Textarea = new UITextArea().setAttr({'class':'form-control', 'placeholder':'Item Description', 'id':'itemDesc'});
            let formWrap03Label = new MoglUI(document.createElement('label')).setAttr({'for':'itemDesc'}).setTextContent(`${ modelData.description }`);
        
            formWrap03.add( formWrap03Textarea, formWrap03Label );
        
            // form inner04:: item category
            let formWrap04 = new UIDiv().setAttr({'class':'item-category-field mb-30'});
            let formWrapH01 = new MoglUI(document.createElement('h4')).setTextContent('Select Item Category');
            formWrap04.add( formWrapH01 );
        
            // form inner05: form item option select
            let formWrap05 = new UIDiv().setAttr({'class':'item-price-field mb-3'});
            let formWrap05Row = new UIRow().setAttr({'class':'row g-3'});
            let formWrap05Col01 = new UIDiv().setAttr({'class':'col-md-6 col-lg-4'});
            let formWrap05Col02 = new UIDiv().setAttr({'class':'col-md-3 col-lg-4'});
            let formWrap05Col03 = new UIDiv().setAttr({'class':'col-md-3 col-lg-4'});
        
            let formWrap05Float = new UIDiv().setAttr({'class':'form-floating'});
            let formWrap05Slc = makeSlcOpt( 
                {'class':'form-select','id':'selectCrypto', 'aria-label':'Floating label select'},
                [

                    { attr: {'selected': '1'}, val: 'Building & Architecture' },
                    { attr: {'selected': '2'}, val: 'Interior' },
                    { attr: {'selected': '3'}, val: 'Vehicles' },
                    { attr: {'selected': '4'}, val: 'Electronics' },
                    { attr: {'selected': '5'}, val: 'Humans & Characters' },
                    { attr: {'selected': '6'}, val: 'Weapons & Amor' },
                    { attr: {'selected': '7'}, val: 'Food' },
                    { attr: {'selected': '8'}, val: 'Clothes & Accessories' },
                    { attr: {'selected': '9'}, val: 'Mecatronics & Parts' },
                    { attr: {'selected': '10'}, val: 'Anatomy' },
                    { attr: {'selected': '11'}, val: 'Sports' },
                    { attr: {'selected': '12'}, val: 'Animals' },
                    { attr: {'selected': '13'}, val: 'Fantasy & Fiction' },
                    { attr: {'selected': ''}, val: 'Select Asset Fields' },
                ]
            );
            
            
            formWrap05Slc.dom.value = `${ modelData.field }`;
            formWrap05Slc.dom.dispatchEvent( changeEvt );

            let formWrap05Label = new MoglUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Select Fields');
            formWrap05Float.add( formWrap05Slc, formWrap05Label );
            formWrap05Col01.add( formWrap05Float );

            let formWrap05Col02Float = new UIDiv().setAttr({'class':'form-floating'});
            let formWrapCol02Slc = new MoglUI(document.createElement('select')).setAttr({'class':'form-select'});
            let formWRapCol02Option03 = new MoglUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('-');
            let formWRapCol02Option01 = new MoglUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('yes');
            let formWRapCol02Option02 = new MoglUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('no');
            let formWrapCol02Label = new MoglUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Texture Exist');
            formWrapCol02Slc.add( formWRapCol02Option01, formWRapCol02Option02, formWRapCol02Option03 );
            formWrap05Col02Float.add( formWrapCol02Slc, formWrapCol02Label );

            formWrapCol02Slc.dom.value = `${ modelData.texIn }`;
            formWrapCol02Slc.dom.dispatchEvent( changeEvt );
            formWrap05Col02.add( formWrap05Col02Float );

            let formWrap05Col03Float = new UIDiv().setAttr({'class':'form-floating'});
            let formWrap05Col03Slc = new MoglUI(document.createElement('select')).setAttr({'class':'form-select'});
            let formWRapCol03Option03 = new MoglUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('-');
            let formWRapCol03Option01 = new MoglUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('yes');
            let formWRapCol03Option02 = new MoglUI(document.createElement('option')).setAttr({'selected':'2'}).setTextContent('no');
            let formWrapCol03Label = new MoglUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Rig Included');

            formWrap05Col03Slc.add( formWRapCol03Option01, formWRapCol03Option02, formWRapCol03Option03 );
            formWrap05Col03Float.add( formWrap05Col03Slc, formWrapCol03Label );

            formWrap05Col03Slc.dom.value = `${ modelData.rigIn }`;
            formWrap05Col03Slc.dom.dispatchEvent( changeEvt );
            formWrap05Col03.add( formWrap05Col03Float );

            formWrap05Row.add( formWrap05Col01, formWrap05Col02, formWrap05Col03 );
            formWrap05.add( formWrap05Row );


            //formWrap06:: select made s/w
            let formWrap06 = new UIDiv().setAttr({'class':'item-price-field mb-5'});
            let form06Row = new UIDiv().setAttr({'class':'row g-3 justify-content-center'});
            let form06Col01 = new UIDiv().setAttr({'class':'col-md-6 col-lg-8'});
            let form06Col01Float = new UIDiv().setAttr({'class': 'form-floating'});

            let form06Slc = makeSlcOpt( {'class':'form-select'}, [
                { attr: {'selected':'1'}, val: 'blender' },
                { attr: {'selected':'2'}, val: 'maya' },
                { attr: {'selected':'3'}, val: 'max' },
                { attr: {'selected':'4'}, val: 'c4d' },
                { attr: {'selected':'5'}, val: 'houdini' },
                { attr: {'selected':'6'}, val: 'cad' },
                { attr: {'selected':''}, val: 'select your major s/w' }
            ]);

            form06Slc.dom.value = `${ modelData.madeBy }`;
            form06Slc.dom.dispatchEvent( changeEvt );

            let form06Label = new MoglUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Made by');

            form06Col01Float.add( form06Slc, form06Label );
            form06Col01.add( form06Col01Float );

            let form06Col02 = new UIDiv().setAttr({'class':'col-md-6 col-lg-4'});
            let form06Col02Float = new UIDiv().setAttr({'class': 'form-floating'});
            let form06Slc02 = new MoglUI(document.createElement('select')).setAttr({'class':'form-select'});
            let form06Slc02Opt01 = new MoglUI(document.createElement('option')).setAttr({'selected':'2'}).setTextContent('publish');
            let form06Slc02Opt02 = new MoglUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('private');
            let form06Slc02Opt03 = new MoglUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('-');

            let form06Label02 = new MoglUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Public & private');

            

            form06Slc02.add(form06Slc02Opt01, form06Slc02Opt02, form06Slc02Opt03 );
            form06Col02Float.add( form06Slc02, form06Label02 );

            form06Slc02.dom.value = `${ modelData.publish }`;
            form06Slc02.dom.dispatchEvent( changeEvt );
            form06Col02.add( form06Col02Float );

            form06Row.add(form06Col01, form06Col02 );
            formWrap06.add( form06Row );

            //formWrap last:: submit btn
            let submitDiv = new UIDiv().setAttr({'class':'submit-btn-field text-center'});
            let submitBtn = new UIButton('Edit').setAttr({ 'type':'button' });
            submitDiv.add( submitBtn );

            // form inner06:: 
            formEle.add( formWrap01, fileTable, formWrap02, formWrap03, formWrap04, formWrap05, formWrap06, submitDiv );

            // insert form inners
            tabPane.addSeq( row02, col01, uploadWrap, formEle );

            // Evt
            let focusEvtEle = [
                formWrap02Input, formWrap03Textarea, formWrapCol02Slc,
                formWrap05Col03Slc, formWrap05Slc, form06Slc, form06Slc02
            ];

            focusEvtEle.map( ele => {
                ele.dom.addEventListener( 'focus', e => {
                    ele.dom.style.cssText = 'border:none;'
                })
            });

            submitBtn.dom.addEventListener( 'click', e => {

                e.preventDefault();

                let uploadedFiles, nameForm, descriptionForm, filedsForm, majorForm, publicForm, textureForm, rigForm = false;

                ( !fileIpt.dom.files.length ) ? uploadedFiles = false : uploadedFiles = true;
                ( !formWrap02Input.dom.value ) ? nameForm = false : nameForm = true;
                ( !formWrap03Textarea.dom.value ) ? descriptionForm = false : descriptionForm = true;
                ( formWrap05Slc.dom.value === 'Select Asset Fields' ) ? filedsForm = false : filedsForm = true;
                ( formWrapCol02Slc.dom.value === '-' ) ? textureForm = false : textureForm = true;
                ( formWrap05Col03Slc.dom.value === '-' ) ? rigForm = false : rigForm = true;
                ( form06Slc.dom.value === 'select your major s/w' ) ? majorForm = false : majorForm = true;
                ( form06Slc02.dom.value === '-' ) ? publicForm = false : publicForm = true;

                if( !uploadedFiles ) {
                    alertOutline( formWrap01, 'insert 3d Assets' );
                } else if( !nameForm ) {
                    alertOutline( formWrap02Input, 'insert asset`s name' );
                } else if( !descriptionForm) {
                    alertOutline( formWrap03Textarea, 'insert asset`s description' );
                } else if( !filedsForm ) {
                    alertOutline( formWrap05Slc, 'select asset`s fields' );
                } else if( !textureForm ) {
                    alertOutline( formWrapCol02Slc, 'select texture`s included' );
                } else if( !rigForm ) {
                    alertOutline( formWrap05Col03Slc, 'select rig`s included' );
                }else if( !majorForm ) {
                    alertOutline( form06Slc, 'select artist`s major sw' );
                } else if( !publicForm ) {
                    alertOutline( form06Slc02, 'decide publish & private ' );
                } else {
                    const { files } = fileIpt.dom;
                    // let classifyObj = classifyFiles( files );
                    classifyFiles({ 
                        assets: files, 
                        title: formWrap02Input.dom.value,
                        description: formWrap03Textarea.dom.value,
                        field: formWrap05Slc.dom.value,
                        madeBy: form06Slc.dom.value,
                        publish: form06Slc02.dom.value,
                        texIn: formWrapCol02Slc.dom.value,
                        rigIn: formWrap05Col03Slc.dom.value
                    }).then( file => {

                        assetPublicUpload( file, auth.currentUser, docID );
                        // firebaseQueryTest( file, auth.currentUser, docID );

                    })

                    // assetPublicUpload( classifyObj, auth.currentUser.uid )

                }

            });

            // function dbUpload( data ) {
            //     console.log('data upload: ', data );
            //     assetPublicUpload( data, auth.currentUser.uid, )
            // }

            function alertOutline( ele, text ) {

                ele.dom.style.cssText = 'border:2px solid tomato;';
                alert( text );

            }

            function sumAssets( assets ) {

                let tmpObj = { assetFiles:[], assetTex:[] };

                return new Promise( ( resolve, reject ) => {

                    for( let asset of assets ) {

                        let fileExt = asset.name.split('.').pop();

                        switch ( fileExt ) {
                            case 'fbx' || 'obj' || 'gltf' :
                                tmpObj.assetFiles.push( asset ); 
                                break;

                            case 'jpg' || 'jpeg' || 'png' || 'gif' || 'tif' || 'exr' :
                                tmpObj.assetTex.push(asset);
                                break;
                        }

                    } //for End

                    resolve( tmpObj )

                })

            }

            function classifyFiles ( datas ) {

                let { assets, title, description, field, madeBy, publish, texIn, rigIn } = datas

                return new Promise( (resolve, reject) => {

                    let resObj = {};
                        resObj.assets = new Array();

                        resObj.title = title;
                        resObj.description = description;
                        resObj.field = field;
                        resObj.madeBy = madeBy;
                        resObj.publish = publish;
                        resObj.texIn = texIn;
                        resObj.rigIn = rigIn;

                        sumAssets( assets )
                            .then( files => {

                                if( files.assetFiles.length ) {

                                    files.assetFiles.map( file => {

                                        let fileName = file.name.split('.').shift();
                                        let fileExt = file.name.split('.').pop();
                                        let tmpTexArr= [];

                                        files.assetTex.map( tex => {

                                            let texName = tex.name.split('.').shift();
                                            if( texName.includes( fileName ) ) tmpTexArr.push( tex );
                                            // if( texName.includes( fileName ) ) resObj.assets.map( data => data.texture.add( tex ) )                                       

                                        });

                                        resObj.assets.push({
                                            name: fileName,
                                            file: file,
                                            ext: fileExt,
                                            texture: tmpTexArr
                                        });

                                    });
                                }

                                resolve( resObj );

                            })

                })

            }

        } else {
            console.log('no model data!')
        }
    }

    getModelData();

    return tabPane;

}

export default profileAssetEdit