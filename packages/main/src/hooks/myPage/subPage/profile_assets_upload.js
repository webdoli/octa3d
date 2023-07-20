import { UIDiv, UIRow, OctaUI, UIInput, UITextArea, UIP, UIButton, UISpan, UIIcon } from "../../../libs/octaUI";
import "bootstrap-icons/font/bootstrap-icons.css";

function makeSlcOpt ( slc, opts ) {
    let slcTag = new OctaUI( document.createElement('select') ).setAttr( slc );
    opts.map( opt => {

        let option = new OctaUI( document.createElement('option')).setAttr( opt.attr ).setTextContent( opt.val );
        slcTag.add( option );
    });

    return slcTag

}

const profileAssetUpload = ( signals ) => {

    //signals
    signals.myAssetUpload.add( ( assets ) => {
        console.log('3D Asset upload start: ', assets );
    });

    let UsrAssetFiles = null;

    let tabPane = new UIDiv().setAttr({'class':'tab-pane', 'id':'upload-assets', 'role':'tabpanel', 'aria-labelledby':'pills-personal-tab'});
    let row02 = new UIRow();
    let col01 = new UIDiv().setAttr({'class':'col'});
    let uploadWrap = new UIDiv().setAttr({'class':'create-nft py-5 px-4'});
    let formEle = new OctaUI( document.createElement('form')).setAttr({'class':'create-nft-form'});

    // form inner01
    let formWrap01 = new UIDiv().setAttr({'class':'upload-item mb-30' });
    let formP01 = new UIP('FBX,OBJ,GLTF (Max-30mb)');
    let formDiv02 = new UIDiv().setAttr({'class':'custom-upload' });
    let file01 = new UIDiv().setAttr({'class':'file-btn'}).setTextContent('Upload a file');
    let icon04 = new OctaUI(document.createElement('i')).setAttr({'class':'icofont-upload-alt'})
    let fileIpt = new UIInput().setAttr({'type':'file', 'id':'myAssetUpload', 'class':'form-control' });
    //let dropText = new UISpan().setAttr({ 'class':'dropdownText' })
    let fileTable = new UIDiv().setAttr({ 'id':'uploadedFileList', 'style':'display:none;' });
    let removeBtn = new UIIcon().setAttr({ 'class':'bi bi-x-square' });
    
    file01.add( icon04 );
    formDiv02.add( file01, fileIpt );
    formWrap01.add( formP01, formDiv02 );

    // Drop & Drag Evt
    let dt = new DataTransfer();

    fileIpt.dom.addEventListener( 'click', () => {
        fileIpt.value = '';
        console.log( fileIpt.value );
    });
    fileIpt.dom.addEventListener('change', e => {
        
        fileTable.dom.innerHTML += `<p class="uploadFile-list">added: ${e.target.files[0].name } </p>`;
        fileTable.dom.cssText = 'display:flex;'
    });

    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => {
        formWrap01.dom.addEventListener( evt, e => {
            e.preventDefault();
            e.stopPropagation();
        })
    });

    ["dragover", "dragenter"].forEach( evt => { 
        formWrap01.dom.addEventListener( evt, e => {
            e.preventDefault();
            e.stopPropagation();
            //dropText.dom.innerHTML = 'Drop your file here!';
            file01.dom.innerHTML = 'Drop your file here!';
        });
    });

    
    

    //func
    function makeFileList( parent, file ) {
        //for( let file of lists ) {
            
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
                    
                    if( e.target.id !== files[i].name ) {
                        dt.items.add( files[i] );
                    } else {
                        fileTable.dom.removeChild( removeNode );
                    }

                }

                fileIpt.dom.files = dt.files;
                // console.log( fileIpt.dom.files );

            })
        //}
    }

    formWrap01.dom.addEventListener( 'drop', e => {

        file01.dom.innerHTML = 'Upload a file';
        let fileAll = e.dataTransfer.files;
        
        for( let i=0; i< fileAll.length; i++ ) {
            dt.items.add( fileAll[i] );
            makeFileList( fileTable, fileAll[i] );
        }
        // let files = e.dataTransfer.files;
        // fileIpt.dom.files.items = files;
        // fileIpt.dom.files = dt;
        //console.log('dt: ', dt.files );
        // makeFileList( fileTable, files );
        //makeFileList( fileTable, dt.files );
        
        fileTable.dom.style.cssText = 'display:flex;flex-direction:column;';

    });
    
    // form inner02:: item name input
    let formWrap02 = new UIDiv().setAttr({'class':'form-floating item-name-field mb-3'});
    let formWrap02Input = new UIInput('Item Name').setAttr({'type':'text', 'class':'form-control','id':'itemNameInput', 'placeholder':'Item Name'});
    let formWrap02Label = new OctaUI(document.createElement('label')).setAttr({'for':'itemNameInput'}).setTextContent('Item Name');
    formWrap02.add( formWrap02Input, formWrap02Label );

    // form inner03:: item description
    let formWrap03 = new UIDiv().setAttr({'class':'form-floating item-desc-field mb-30'});
    let formWrap03Textarea = new UITextArea().setAttr({'class':'form-control', 'placeholder':'Item Description', 'id':'itemDesc'});
    let formWrap03Label = new OctaUI(document.createElement('label')).setAttr({'for':'itemDesc'}).setTextContent('Item Description');

    formWrap03.add( formWrap03Textarea, formWrap03Label );

    // form inner04:: item category
    let formWrap04 = new UIDiv().setAttr({'class':'item-category-field mb-30'});
    let formWrapH01 = new OctaUI(document.createElement('h4')).setTextContent('Select Item Category');
    formWrap04.add( formWrapH01 );

    // form inner05: form item option select
    let formWrap05 = new UIDiv().setAttr({'class':'item-price-field mb-3'});
    let formWrap05Row = new UIRow().setAttr({'class':'row g-3'});
    let formWrap05Col01 = new UIDiv().setAttr({'class':'col-md-6'});
    let formWrap05Col02 = new UIDiv().setAttr({'class':'col-md-3'});
    let formWrap05Col03 = new UIDiv().setAttr({'class':'col-md-3'});

    let formWrap05Float = new UIDiv().setAttr({'class':'form-floating'});
    let formWrap05Slc = makeSlcOpt( 
        {'class':'form-select','id':'selectCrypto', 'aria-label':'Floating label select'},
        [
            { attr: {'selected': ''}, val: 'Building & Architecture' },
            { attr: {'selected': '1'}, val: 'Interior' },
            { attr: {'selected': '2'}, val: 'Vehicles' },
            { attr: {'selected': '3'}, val: 'Electronics' },
            { attr: {'selected': '4'}, val: 'Humans & Characters' },
            { attr: {'selected': '5'}, val: 'Weapons & Amor' },
            { attr: {'selected': '6'}, val: 'Food' },
            { attr: {'selected': '7'}, val: 'Clothes & Accessories' },
            { attr: {'selected': '8'}, val: 'Mecatronics & Parts' },
            { attr: {'selected': '9'}, val: 'Anatomy' },
            { attr: {'selected': '10'}, val: 'Sports' },
            { attr: {'selected': '11'}, val: 'Animals' },
            { attr: {'selected': '12'}, val: 'Fantasy & Fiction' },
        ]
    );

    let formWrap05Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Select Fields');
    formWrap05Float.add( formWrap05Slc, formWrap05Label );
    formWrap05Col01.add( formWrap05Float );

    let formWrap05Col02Float = new UIDiv().setAttr({'class':'form-floating'});
    let formWrapCol02Slc = new OctaUI(document.createElement('select')).setAttr({'class':'form-select'});
    let formWRapCol02Option01 = new OctaUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('yes');
    let formWRapCol02Option02 = new OctaUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('no');
    let formWrapCol02Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Texture included');
    formWrapCol02Slc.add( formWRapCol02Option01, formWRapCol02Option02);
    formWrap05Col02Float.add( formWrapCol02Slc, formWrapCol02Label );

    formWrap05Col02.add( formWrap05Col02Float );

    let formWrap05Col03Float = new UIDiv().setAttr({'class':'form-floating'});
    let formWrap05Col03Slc = new OctaUI(document.createElement('select')).setAttr({'class':'form-select'});
    let formWRapCol03Option01 = new OctaUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('yes');
    let formWRapCol03Option02 = new OctaUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('no');
    let formWrapCol03Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Rig Included');

    formWrap05Col03Slc.add(formWRapCol03Option01, formWRapCol03Option02);
    formWrap05Col03Float.add(formWrap05Col03Slc, formWrapCol03Label );
    formWrap05Col03.add(formWrap05Col03Float);

    formWrap05Row.add( formWrap05Col01, formWrap05Col02, formWrap05Col03 );
    formWrap05.add( formWrap05Row );


    //formWrap06:: select field
    let formWrap06 = new UIDiv().setAttr({'class':'item-price-field mb-5'});
    let form06Row = new UIDiv().setAttr({'class':'row g-3 justify-content-center'});
    let form06Col01 = new UIDiv().setAttr({'class':'col-md-6 col-lg-4'});
    let form06Col01Float = new UIDiv().setAttr({'class': 'form-floating'});

    let form06Slc = makeSlcOpt( {'class':'form-select'}, [
        { attr: {'selected':''}, val: 'select your major s/w' },
        { attr: {'selected':'1'}, val: 'blender' },
        { attr: {'selected':'2'}, val: 'maya' },
        { attr: {'selected':'3'}, val: 'max' },
        { attr: {'selected':'4'}, val: 'c4d' },
        { attr: {'selected':'5'}, val: 'houdini' },
        { attr: {'selected':'6'}, val: 'cad' }
    ]);

    let form06Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Made by');

    form06Col01Float.add( form06Slc, form06Label );
    form06Col01.add( form06Col01Float );

    let form06Col02 = new UIDiv().setAttr({'class':'col-md-6 col-lg-4'});
    let form06Col02Float = new UIDiv().setAttr({'class': 'form-floating'});
    let form06Slc02 = new OctaUI(document.createElement('select')).setAttr({'class':'form-select'});
    let form06Slc02Opt01 = new OctaUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('yes');
    let form06Slc02Opt02 = new OctaUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('no');
    let form06Label02 = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Public');

    form06Slc02.add(form06Slc02Opt01, form06Slc02Opt02 );
    form06Col02Float.add( form06Slc02, form06Label02 );
    form06Col02.add( form06Col02Float );

    let form06Col03 = new UIDiv().setAttr({'class':'col-md-6 col-lg-4'});
    let form06Col03Float = new UIDiv().setAttr({'class': 'form-floating'});
    let form06Input = new UIInput().setAttr({'type':'text', 'id':'itemNumbersInput', 'placeholder':'License'});
    let form06Label03 = new OctaUI(document.createElement('label')).setAttr({'for':'itemNumbersInput'}).setTextContent('License');

    form06Col03Float.add( form06Label03, form06Input );
    form06Col03.add( form06Col03Float );

    form06Row.add(form06Col01, form06Col02, form06Col03 );
    formWrap06.add( form06Row );

    //formWrap last:: submit btn
    let submitDiv = new UIDiv().setAttr({'class':'submit-btn-field text-center'});
    let submitBtn = new UIButton('Create Item').setAttr({ 'type':'button' });
    submitDiv.add( submitBtn );

    // form inner06:: 
    formEle.add( formWrap01, fileTable, formWrap02, formWrap03, formWrap04, formWrap05, formWrap06, submitDiv );
    
    // insert form inners
    tabPane.addSeq( row02, col01, uploadWrap, formEle );

    // Evt
    submitBtn.dom.addEventListener( 'click', e => {
        
        const { files } = fileIpt.dom;
        classifyFiles( files );

        //1] firebase 넘기기
        //2] 로딩페이지 띄우기
        //3] created 페이지 실행 및 파일 받아오기
        //4] 완료 후 created 띄우기

        // for( let file of files ) {
        //     console.log( file );
        // }

    });

    function sumAssets( assets ) {

        let tmpObj = { 
            assetFiles:[],
            assetTex:[],
        };

        return new Promise( ( resolve, reject ) => {
            for( let asset of assets ) {

                let fileExt = asset.name.split('.').pop();
    
                if ( fileExt === 'fbx' || 'obj' || 'gltf' ) { 
                    tmpObj.assetFiles.push( asset ); 
                } else if ( fileExt === 'jpg' || 'jpeg' || 'png' || 'gif' || 'tif' || 'exr' ) {
                    tmpObj.assetTex.push(asset);
                } 
            }

            resolve( tmpObj )
            
        })
        
    }

    function classifyFiles( assets ) {

        // console.log( 'asset name: ', asset.name.split('.').shift() );

        let conversion = async () => {

            try {
                let files = await sumAssets( assets );
                console.log('files: ', files );
            }
            catch(err) {

            } 
            finally {

            }
        
        }

        conversion();
        

    }


    return tabPane;

}

export default profileAssetUpload