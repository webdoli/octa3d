import { UIDiv, UIRow, OctaUI, UIInput, UITextArea, UIP, UIButton } from "../../../libs/octaUI";


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

    let tabPane = new UIDiv().setAttr({'class':'tab-pane', 'id':'upload-assets', 'role':'tabpanel', 'aria-labelledby':'pills-personal-tab'});
    let row02 = new UIRow();
    let col01 = new UIDiv().setAttr({'class':'col'});
    let uploadWrap = new UIDiv().setAttr({'class':'create-nft py-5 px-4'});
    let formEle = new OctaUI( document.createElement('form')).setAttr({'class':'create-nft-form'});

    // form inner01
    let formWrap01 = new UIDiv().setAttr({'class':'upload-item mb-30'});
    let formP01 = new UIP('FBX,OBJ,GLTF (Max-30mb)');
    let formDiv02 = new UIDiv().setAttr({'class':'custom-upload'});
    let file01 = new UIDiv().setAttr({'class':'file-btn'}).setTextContent('Upload a file');
    let icon04 = new OctaUI(document.createElement('i')).setAttr({'class':'icofont-upload-alt'})
    let input01 = new UIInput().setAttr({'type':'file', 'id':'myAssetUpload'});
        input01.dom.addEventListener('change', (e) => {
            
            // for(let item in e.target.files[0]) {
            //     console.log('item: '+item+' , '+e.target.files[0][item])
            // }
            signals.myAssetUpload.dispatch( e.target.files[0] );
            
        })
    
    file01.add( icon04 );
    formDiv02.add( file01, input01 );
    formWrap01.add( formP01, formDiv02 );
    
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
    let submitBtn = new UIButton('Create Item').setAttr({'type':'submit'});
    submitDiv.add( submitBtn );

    // form inner06:: 

    formEle.add( formWrap01, formWrap02, formWrap03, formWrap04, formWrap05, formWrap06, submitDiv );
    //insert form inners
    tabPane.addSeq( row02, col01, uploadWrap, formEle );



    return tabPane;

}

export default profileAssetUpload