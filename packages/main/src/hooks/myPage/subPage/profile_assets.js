import { OctaUI, UIButton, UIDiv, UIRow, UIP, UIInput, UITextArea } from "../../../libs/octaUI";

const profileAssetPage = () => {

    let container = new UIDiv();
        container.setAttr({ 'class': 'tab-pane activity-page active', 'id': 'assets-page', 'role': 'tabpanel' });

    let row = new UIRow();
    let article = new OctaUI( document.createElement('article') );
    let activeTab = new UIDiv().setAttr({'class': 'activity-tab'});
    let topUL = new OctaUI( document.createElement('ul') );
        topUL.setAttr({'class':'nav nav-pills mb-30 px-2', 'id':'pills-tab', 'role':'tablist' });

    let tabContent = new UIDiv().setAttr({'class':'tab-content activity-content', 'id':'pills-tabContent'});
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
    let formWrap05Slc = new OctaUI(document.createElement('select')).setAttr({'class':'form-select','id':'selectCrypto', 'aria-label':'Floating label select'});
    let option01 = new OctaUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('Building & Architecture');
    let option02 = new OctaUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('Interior');
    let option03 = new OctaUI(document.createElement('option')).setAttr({'selected':'2'}).setTextContent('Vehicles');
    let option04 = new OctaUI(document.createElement('option')).setAttr({'selected':'3'}).setTextContent('Electronics');
    let option05 = new OctaUI(document.createElement('option')).setAttr({'selected':'4'}).setTextContent('Humans & Characters');
    let option06 = new OctaUI(document.createElement('option')).setAttr({'selected':'5'}).setTextContent('Weapons & Amor ');
    let option07 = new OctaUI(document.createElement('option')).setAttr({'selected':'6'}).setTextContent('Food');
    let option08 = new OctaUI(document.createElement('option')).setAttr({'selected':'7'}).setTextContent('Clothes & Accessories');
    let option09 = new OctaUI(document.createElement('option')).setAttr({'selected':'8'}).setTextContent('Mecatronics & Parts');
    let option10 = new OctaUI(document.createElement('option')).setAttr({'selected':'9'}).setTextContent('Anatomy');
    let option11 = new OctaUI(document.createElement('option')).setAttr({'selected':'10'}).setTextContent('Sports');
    let option12 = new OctaUI(document.createElement('option')).setAttr({'selected':'11'}).setTextContent('Animals');
    let option13 = new OctaUI(document.createElement('option')).setAttr({'selected':'12'}).setTextContent('Fantasy & Fiction');

    let formWrap05Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Select Currency');

    formWrap05Slc.add( option01, option02, option03, option04, option05, option06, option07, option08, option09, option10, option11, option12, option13 );
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
    let form06Slc = new OctaUI(document.createElement('select')).setAttr({'class':'form-select'});
    let form06Opt01 = new OctaUI(document.createElement('option')).setAttr({'selected':''}).setTextContent('select your major s/w');
    let form06Opt02 = new OctaUI(document.createElement('option')).setAttr({'selected':'1'}).setTextContent('blender');
    let form06Opt03 = new OctaUI(document.createElement('option')).setAttr({'selected':'2'}).setTextContent('maya');
    let form06Opt04 = new OctaUI(document.createElement('option')).setAttr({'selected':'3'}).setTextContent('max');
    let form06Opt05 = new OctaUI(document.createElement('option')).setAttr({'selected':'4'}).setTextContent('c4d');
    let form06Opt06 = new OctaUI(document.createElement('option')).setAttr({'selected':'5'}).setTextContent('houdini');
    let form06Opt07 = new OctaUI(document.createElement('option')).setAttr({'selected':'6'}).setTextContent('cad');
    let form06Label = new OctaUI(document.createElement('label')).setAttr({'for':'selectCrypto'}).setTextContent('Made by');

    form06Slc.add(form06Opt01, form06Opt02, form06Opt03, form06Opt04, form06Opt05, form06Opt06, form06Opt07);
    form06Col01Float.add(form06Slc, form06Label);
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

    form06Col03Float.add(form06Input, form06Label03);
    form06Col03.add( form06Col03Float );

    form06Row.add(form06Col01, form06Col02, form06Col03 );
    formWrap06.add( form06Row );

    //formWrap last:: submit btn
    let submitDiv = new UIDiv().setAttr({'class':'submit-btn-field text-center'});
    let submitBtn = new UIButton('Create Item').setAttr({'type':'submit'});
    submitDiv.add( submitBtn );

    // form inner06:: 

    formEle.add( formWrap01, formWrap02, formWrap03, formWrap04, formWrap05, submitDiv );
    //insert form inners
    tabContent.addSeq( tabPane, row02, col01, uploadWrap, formEle );


    let li01 = new OctaUI( document.createElement('li') ).setAttr({'class':'nav-item', 'role':'presentation'});
    let btn01 = new UIButton( 'Upload Asset' ).setAttr({
        'class':'nav-link', 
        'id':'pills-personal-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#upload-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'upload-assets', 
        'aria-selected':'false'
    });
    let icon01 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-flask'});

    let li02 = new OctaUI( document.createElement('li') ).setAttr({'class': 'nav-item', 'role':'presentation'});
    let btn02 = new UIButton( 'Created' ).setAttr({
        'class':'nav-link active', 
        'id':'pills-groups-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#created-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'created-assets', 
        'aria-selected':'false'
    });
    let icon02 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-puzzle'});

    let li03 = new OctaUI( document.createElement('li') ).setAttr({'class': 'nav-item', 'role':'presentation'});
    let btn03 = new UIButton( 'Picked' ).setAttr({
        'class':'nav-link', 
        'id':'pills-friends-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#picked-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'picked-assets', 
        'aria-selected':'false'
    });
    let icon03 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-library'});

    li01.addSeq( btn01, icon01 );
    li02.addSeq( btn02, icon02 );
    li03.addSeq( btn03, icon03 );
    topUL.add( li01, li02, li03 );

    //tap start

    activeTab.add( topUL, tabContent )
    container.addSeq( row, article, activeTab );

    return container.dom;

    // async function making() {

    //     try{

    //         let row = await createEle( 'div', { class: 'row' });
    //         let article01 = await createEle( 'article' );
    //         let div01 = await createEle( 'div', { class: 'activity-tab'});
    //         let ul01 = await createEle( 'ul', { class: 'nav nav-pills mb-30 px-2', id: 'pills-tab', role: 'tablist'});
            
    //         let li01 = await createEle( 'li', { class: 'nav-item', role: 'presentation' });
    //         let btn01 = await createEle( 'button', 
    //             { class: 'nav-link', id: 'pills-personal-tab', 'data-bs-toggle': 'pill', 'data-bs-target':'#upload-assets', type:'button', 
    //                     role:'tab', 'aria-controls':'upload-assets', 'aria-selected':'false' 
    //             }
    //         );
    //         let i01 = await createEle( 'i', { class: 'icofont-flask'} );
    //         let test01 = await createTextNode( 'Upload Asset' );

    //         addElement( container, row, article01, div01, ul01, li01, btn01 );

    //     } catch ( err ) {

    //     } finally {

    //     }
    // }

    // making();


    // async function run() {

    //     try {

    //         container.innerHTML += `
    //             <article>
    //                 <div class="activity-tab">
    //                     <ul class="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">
    //                         <li class="nav-item" role="presentation">
    //                             <button class="nav-link" id="pills-personal-tab"
    //                                 data-bs-toggle="pill" data-bs-target="#upload-assets"
    //                                 type="button" role="tab" aria-controls="upload-assets"
    //                                 aria-selected="false">
    //                                 <i class="icofont-flask"></i>
    //                                 Upload Asset
    //                             </button>
    //                         </li>
    //                         <li class="nav-item" role="presentation">
    //                             <button class="nav-link active" id="pills-groups-tab"
    //                                 data-bs-toggle="pill" data-bs-target="#created-assets"
    //                                 type="button" role="tab" aria-controls="created-assets"
    //                                 aria-selected="false"><i class="icofont-puzzle"></i>
    //                                 Created
    //                             </button>
    //                         </li>
    //                         <li class="nav-item" role="presentation">
    //                             <button class="nav-link" id="pills-friends-tab"
    //                                 data-bs-toggle="pill" data-bs-target="#picked-assets"
    //                                 type="button" role="tab" aria-controls="picked-assets"
    //                                 aria-selected="false"><i class="icofont-library"></i>
    //                                 Picked
    //                             </button>
    //                         </li>
    //                         <!--<li class="custom-select">
    //                             <select>
    //                                 <option value="1">All</option>
    //                                 <option value="2">Recent</option>
    //                                 <option value="3">Relevant</option>
    //                                 <option value="4">Popular</option>
    //                             </select>
    //                         </li>-->
    //                     </ul>
    //                     <div class="tab-content activity-content" id="pills-tabContent">
    //                         <div class="tab-pane" id="upload-assets" role="tabpanel"
    //                             aria-labelledby="pills-personal-tab">
    //                             <div class="row">
    //                                 <div class="col">
    //                                     <!-- Upload Assets -->
    //                                     <div class="create-nft py-5 px-4">
    //                                         <form class="create-nft-form">
    //                                         <!-- upload field -->
    //                                             <div class="upload-item mb-30">
    //                                                 <p>FBX,OBJ,GLTF (Max-30mb)</p>
    //                                                 <div class="custom-upload">
    //                                                     <div class="file-btn">
    //                                                         <i class="icofont-upload-alt"></i>
    //                                                             Upload a file
    //                                                     </div>
    //                                                     <input type="file" id="myAssetUpload">
    //                                                 </div>
    //                                             </div>
    //                                             <!-- item name input -->
    //                                             <div class="form-floating item-name-field mb-3">
    //                                                 <input type="text" class="form-control"
    //                                                     id="itemNameInput"
    //                                                     placeholder="Item Name">
    //                                                 <label for="itemNameInput">
    //                                                     Item Name
    //                                                 </label>
    //                                             </div>
    //                                             <!-- item-description -->
    //                                             <div class="form-floating item-desc-field mb-30">
    //                                                 <textarea class="form-control"
    //                                                     placeholder="Item Description"
    //                                                     id="itemDesc">
    //                                                 </textarea>
    //                                                 <label for="itemDesc">
    //                                                     Item Description
    //                                                 </label>
    //                                             </div>
    //                                             <!-- item-category -->
    //                                             <div class="item-category-field mb-30">
    //                                                 <h4>Select Item Catergory</h4>
    //                                                 <!--<ul class="item-cat-list d-flex flex-wrap">
    //                                                     <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Interior </li>
    //                                                     <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Vehicle </li>
    //                                                 </ul>-->
    //                                             </div>
    //                                             <!-- item price -->
    //                                             <div class="item-price-field mb-3">
    //                                                 <div class="row g-3">
    //                                                     <div class="col-md-6">
    //                                                         <div class="form-floating">
    //                                                             <select class="form-select"
    //                                                                 id="selectCrypto"
    //                                                                 aria-label="Floating label select">
    //                                                                 <option selected> Building & Architecture </option>
    //                                                                 <option value="1"> Interior </option>
    //                                                                 <option value="2"> Vehicles </option>
    //                                                                 <option value="3"> Electronics </option>
    //                                                                 <option value="4"> Humans & Characters </option>
    //                                                                 <option value="5"> Weapons & Amor </option>
    //                                                                 <option value="6"> Food </option>
    //                                                                 <option value="7"> Clothes & Accessories </option>
    //                                                                 <option value="8"> Mecatronics & Parts </option>
    //                                                                 <option value="9"> Anatomy </option>
    //                                                                 <option value="10"> Sports </option>
    //                                                                 <option value="11"> Animals </option>
    //                                                                 <option value="12"> Fantasy & Fiction </option>
    //                                                             </select>
    //                                                             <label for="selectCrypto">Select Currency</label>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="col-md-3">
    //                                                         <div class="form-floating">
    //                                                             <select class="form-select">
    //                                                                 <option selected> yes </option>
    //                                                                 <option value="1"> no </option>
    //                                                             </select>
    //                                                             <label for="selectCrypto">Texture included</label>
    //                                                             <!--<input type="text"
    //                                                                 class="form-control"
    //                                                                 id="itemPriceInput"
    //                                                                 placeholder="Item Price">
    //                                                             <label for="itemPriceInput">
    //                                                                 Item Price
    //                                                             </label>-->
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="col-md-3">
    //                                                         <div class="form-floating">
    //                                                             <select class="form-select">
    //                                                                 <option selected> yes </option>
    //                                                                 <option value="1"> no </option>
    //                                                             </select>
    //                                                             <label for="selectCrypto">Rig included</label>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <!-- Royalites, Size & copy -->
    //                                             <div class="item-price-field mb-5">
    //                                                 <div class="row g-3 justify-content-center">
    //                                                     <div class="col-md-6 col-lg-4">
    //                                                         <div class="form-floating">
    //                                                             <select class="form-select">
    //                                                                 <option selected> blender </option>
    //                                                                 <option value="1"> maya </option>
    //                                                                 <option value="1"> max </option>
    //                                                                 <option value="1"> c4d </option>
    //                                                                 <option value="1"> houdini </option>
    //                                                                 <option value="1"> cad </option>
    //                                                             </select>
    //                                                             <label for="selectCrypto">Made by</label>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="col-md-6 col-lg-4">
    //                                                         <div class="form-floating">
    //                                                             <select class="form-select">
    //                                                                 <option selected> yes </option>
    //                                                                 <option value="1"> no </option>
    //                                                             </select>
    //                                                             <label for="selectCrypto"> Public </label>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="col-md-6 col-lg-4">
    //                                                         <div class="form-floating">
    //                                                             <input type="text"
    //                                                                 class="form-control"
    //                                                                 id="itemNumbersInput"
    //                                                                 placeholder="License">
    //                                                             <label for="itemNumbersInput">  
    //                                                                 License
    //                                                             </label>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <!-- submit button -->
    //                                             <div class="submit-btn-field text-center">
    //                                                 <button type="submit">Create Item</button>
    //                                             </div>
    //                                         </form>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
                    
    //                     </div>
    //                 </div>
    //             </article>   
        
    //         `
        
    //     } catch (e) {
        
    //         console.error(e); // handle your error here
        
    //     } finally {

    //         let script = document.createElement('script');
    //         script.innerHTML += `
    //             let assetUploadBtn = document.querySelector('#myAssetUpload');
    //             assetUploadBtn.addEventListener('change', (e) => {
    //                 for(let item in e.target.files[0]) {
    //                     console.log('item: '+item+' , '+e.target.files[0][item])
    //                 }
    //                 console.log('e.target: ', e.target.files[0] )
    //                 window.signals.myAssetUpload.dispatch()
    //             })
    //         `
    //         container.appendChild( script );
        
    //         console.log('Cleanup here'); // cleanup, always executed
            
    //     }

    // }

    // run();

    //return container.dom;

    // let container = document.createElement('div');
    // container.innerHTML += `
    
    // <div class="tab-pane activity-page active" id="assets-page" role="tabpanel">                        
    //     <div class="row">
    //         <article>
    //             <div class="activity-tab">
    //                 <ul class="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">
    //                     <li class="nav-item" role="presentation">
    //                         <button class="nav-link" id="pills-personal-tab"
    //                             data-bs-toggle="pill" data-bs-target="#upload-assets"
    //                             type="button" role="tab" aria-controls="upload-assets"
    //                             aria-selected="false">
    //                             <i class="icofont-flask"></i>
    //                             Upload Asset
    //                         </button>
    //                     </li>
    //                     <li class="nav-item" role="presentation">
    //                         <button class="nav-link active" id="pills-groups-tab"
    //                             data-bs-toggle="pill" data-bs-target="#created-assets"
    //                             type="button" role="tab" aria-controls="created-assets"
    //                             aria-selected="false"><i class="icofont-puzzle"></i>
    //                             Created
    //                         </button>
    //                     </li>
    //                     <li class="nav-item" role="presentation">
    //                         <button class="nav-link" id="pills-friends-tab"
    //                             data-bs-toggle="pill" data-bs-target="#picked-assets"
    //                             type="button" role="tab" aria-controls="picked-assets"
    //                             aria-selected="false"><i class="icofont-library"></i>
    //                             Picked
    //                         </button>
    //                     </li>
    //                     <!--<li class="custom-select">
    //                         <select>
    //                             <option value="1">All</option>
    //                             <option value="2">Recent</option>
    //                             <option value="3">Relevant</option>
    //                             <option value="4">Popular</option>
    //                         </select>
    //                     </li>-->
    //                 </ul>
    //                 <div class="tab-content activity-content" id="pills-tabContent">
    //                     <div class="tab-pane" id="upload-assets" role="tabpanel"
    //                         aria-labelledby="pills-personal-tab">
    //                         <div class="row">
    //                             <div class="col">
    //                                 <!-- Upload Assets -->
    //                                 <div class="create-nft py-5 px-4">
    //                                     <form class="create-nft-form">
    //                                     <!-- upload field -->
    //                                         <div class="upload-item mb-30">
    //                                             <p>FBX,OBJ,GLTF (Max-30mb)</p>
    //                                             <div class="custom-upload">
    //                                                 <div class="file-btn">
    //                                                     <i class="icofont-upload-alt"></i>
    //                                                         Upload a file
    //                                                 </div>
    //                                                 <input type="file" id="myAssetUpload">
    //                                             </div>
    //                                         </div>
    //                                         <!-- item name input -->
    //                                         <div class="form-floating item-name-field mb-3">
    //                                             <input type="text" class="form-control"
    //                                                 id="itemNameInput"
    //                                                 placeholder="Item Name">
    //                                             <label for="itemNameInput">
    //                                                 Item Name
    //                                             </label>
    //                                         </div>
    //                                         <!-- item-description -->
    //                                         <div class="form-floating item-desc-field mb-30">
    //                                             <textarea class="form-control"
    //                                                 placeholder="Item Description"
    //                                                 id="itemDesc">
    //                                             </textarea>
    //                                             <label for="itemDesc">
    //                                                 Item Description
    //                                             </label>
    //                                         </div>
    //                                         <!-- item-category -->
    //                                         <div class="item-category-field mb-30">
    //                                             <h4>Select Item Catergory</h4>
    //                                             <!--<ul class="item-cat-list d-flex flex-wrap">
    //                                                 <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Interior </li>
    //                                                 <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Vehicle </li>
    //                                             </ul>-->
    //                                         </div>
    //                                         <!-- item price -->
    //                                         <div class="item-price-field mb-3">
    //                                             <div class="row g-3">
    //                                                 <div class="col-md-6">
    //                                                     <div class="form-floating">
    //                                                         <select class="form-select"
    //                                                             id="selectCrypto"
    //                                                             aria-label="Floating label select">
    //                                                             <option selected> Building & Architecture </option>
    //                                                             <option value="1"> Interior </option>
    //                                                             <option value="2"> Vehicles </option>
    //                                                             <option value="3"> Electronics </option>
    //                                                             <option value="4"> Humans & Characters </option>
    //                                                             <option value="5"> Weapons & Amor </option>
    //                                                             <option value="6"> Food </option>
    //                                                             <option value="7"> Clothes & Accessories </option>
    //                                                             <option value="8"> Mecatronics & Parts </option>
    //                                                             <option value="9"> Anatomy </option>
    //                                                             <option value="10"> Sports </option>
    //                                                             <option value="11"> Animals </option>
    //                                                             <option value="12"> Fantasy & Fiction </option>
    //                                                         </select>
    //                                                         <label for="selectCrypto">Select Currency</label>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="col-md-3">
    //                                                     <div class="form-floating">
    //                                                         <select class="form-select">
    //                                                             <option selected> yes </option>
    //                                                             <option value="1"> no </option>
    //                                                         </select>
    //                                                         <label for="selectCrypto">Texture included</label>
    //                                                         <!--<input type="text"
    //                                                             class="form-control"
    //                                                             id="itemPriceInput"
    //                                                             placeholder="Item Price">
    //                                                         <label for="itemPriceInput">
    //                                                             Item Price
    //                                                         </label>-->
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="col-md-3">
    //                                                     <div class="form-floating">
    //                                                         <select class="form-select">
    //                                                             <option selected> yes </option>
    //                                                             <option value="1"> no </option>
    //                                                         </select>
    //                                                         <label for="selectCrypto">Rig included</label>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <!-- Royalites, Size & copy -->
    //                                         <div class="item-price-field mb-5">
    //                                             <div class="row g-3 justify-content-center">
    //                                                 <div class="col-md-6 col-lg-4">
    //                                                     <div class="form-floating">
    //                                                         <select class="form-select">
    //                                                             <option selected> blender </option>
    //                                                             <option value="1"> maya </option>
    //                                                             <option value="1"> max </option>
    //                                                             <option value="1"> c4d </option>
    //                                                             <option value="1"> houdini </option>
    //                                                             <option value="1"> cad </option>
    //                                                         </select>
    //                                                         <label for="selectCrypto">Made by</label>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="col-md-6 col-lg-4">
    //                                                     <div class="form-floating">
    //                                                         <select class="form-select">
    //                                                             <option selected> yes </option>
    //                                                             <option value="1"> no </option>
    //                                                         </select>
    //                                                         <label for="selectCrypto"> Public </label>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="col-md-6 col-lg-4">
    //                                                     <div class="form-floating">
    //                                                         <input type="text"
    //                                                             class="form-control"
    //                                                             id="itemNumbersInput"
    //                                                             placeholder="License">
    //                                                         <label for="itemNumbersInput">  
    //                                                             License
    //                                                         </label>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <!-- submit button -->
    //                                         <div class="submit-btn-field text-center">
    //                                             <button type="submit">Create Item</button>
    //                                         </div>
    //                                     </form>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <!-- Created Tap -->
    //                     <div class="tab-pane show active" id="created-assets" role="tabpanel"
    //                         aria-labelledby="created-assets-tab">
    //                         <div class="row justify-content-center gx-3 gy-2">
    //                             <div class="col-lg-4 col-sm-6">
    //                                 <div class="nft-item">
    //                                     <div class="nft-inner">
    //                                         <!-- nft top part -->
    //                                         <h2>Created Page</h2>
    //                                         <div class="nft-item-top d-flex justify-content-between align-items-center">
    //                                             <div class="author-part">
    //                                                 <ul class="author-list d-flex">
    //                                                     <li class="single-author">
    //                                                         <a href="author.html">
    //                                                             <img src="assets/images/seller/02.png" alt="author-img">
    //                                                         </a>
    //                                                     </li>
    //                                                     <li class="single-author d-flex align-items-center">
    //                                                         <a href="author.html" class="veryfied">
    //                                                             <img src="assets/images/seller/04.png" alt="author-img">
    //                                                         </a>
    //                                                         <h6>
    //                                                             <a href="author.html">Jhon Doe</a>
    //                                                         </h6>
    //                                                     </li>
    //                                                 </ul>
    //                                             </div>
    //                                             <div class="more-part">
    //                                                 <div class=" dropstart">
    //                                                     <a class=" dropdown-toggle"
    //                                                         href="#" role="button"
    //                                                         data-bs-toggle="dropdown"
    //                                                         aria-expanded="false"
    //                                                         data-bs-offset="25,0">
    //                                                         <i class="icofont-flikr"></i>
    //                                                     </a>
    //                                                     <ul class="dropdown-menu">
    //                                                         <li>
    //                                                             <a class="dropdown-item" href="#">
    //                                                                 <span><i class="icofont-warning"></i></span> Report 
    //                                                             </a>
    //                                                         </li>
    //                                                         <li>
    //                                                             <a class="dropdown-item" href="#">
    //                                                                 <span><i class="icofont-reply"></i></span>Share
    //                                                             </a>
    //                                                         </li>
    //                                                     </ul>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <!-- nft-bottom part -->
    //                                         <div class="nft-item-bottom">
    //                                             <div class="nft-thumb">
    //                                                 <img src="assets/images/nft-item/03.gif"
    //                                                     alt="nft-img">
    //                                                 <!-- nft countdwon -->
    //                                                 <!-- <ul class="nft-countdown count-down"
    //                                                     data-date="July 05, 2022 21:14:01">
    //                                                     <li>
    //                                                         <span class="days">34</span>
    //                                                         <span class="count-txt">D</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span class="hours">09</span>
    //                                                         <span class="count-txt">H</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span class="minutes">32</span>
    //                                                         <span class="count-txt">M</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span class="seconds">32</span>
    //                                                         <span class="count-txt">S</span>
    //                                                     </li>
    //                                                 </ul> -->
    //                                             </div>
    //                                             <div class="nft-content">
    //                                                 <h4>
    //                                                     <a href="item-details.html"> Walking On Air </a>
    //                                                 </h4>
    //                                                 <div class="price-like d-flex justify-content-between align-items-center">
    //                                                     <p class="nft-price">Price: <span class="yellow-color"> 0.34 ETH </span></p>
    //                                                     <a href="#" class="nft-like"><i class="icofont-heart"></i> 230 </a>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div> 
    //                         </div>
    //                         <div class="load-btn">
    //                             <a href="#" class="default-btn move-bottom"><span> Load More </span></a>
    //                         </div>
    //                     </div>
    //                     <!--Picked Tap --> 
    //                     <div class="tab-pane fade" id="picked-assets" role="tabpanel"
    //                         aria-labelledby="picked-assets-tab">
    //                         <div class="row justify-content-center gx-3 gy-2">
    //                             <div class="col-lg-4 col-sm-6">
    //                                 <div class="nft-item">
    //                                     <div class="nft-inner">
    //                                         <!-- nft top part -->
    //                                         <div class="nft-item-top d-flex justify-content-between align-items-center">
    //                                             <div class="author-part">
    //                                                 <ul class="author-list d-flex">
    //                                                     <li class="single-author">
    //                                                         <a href="author.html">
    //                                                             <img src="assets/images/seller/05.png"
    //                                                                 alt="author-img">
    //                                                         </a>
    //                                                     </li>
    //                                                     <li class="single-author d-flex align-items-center">
    //                                                         <a href="author.html" class="veryfied">
    //                                                             <img src="assets/images/seller/05.gif"
    //                                                                 alt="author-img">
    //                                                         </a>
    //                                                         <h6><a href="author.html">Jhon Doe</a></h6>
    //                                                     </li>
    //                                                 </ul>
    //                                             </div>
    //                                             <div class="more-part">
    //                                                 <div class=" dropstart">
    //                                                     <a class=" dropdown-toggle"
    //                                                         href="#" role="button"
    //                                                         data-bs-toggle="dropdown"
    //                                                         aria-expanded="false"
    //                                                         data-bs-offset="25,0">
    //                                                         <i class="icofont-flikr"></i>
    //                                                     </a>
    //                                                     <ul class="dropdown-menu">
    //                                                         <li>
    //                                                             <a class="dropdown-item" href="#">
    //                                                                 <span><i class="icofont-warning"></i></span> Report 
    //                                                             </a>
    //                                                         </li>
    //                                                         <li>
    //                                                             <a class="dropdown-item" href="#">
    //                                                                 <span><i class="icofont-reply"></i></span> Share 
    //                                                             </a>
    //                                                         </li>
    //                                                     </ul>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <!-- nft-bottom part -->
    //                                         <div class="nft-item-bottom">
    //                                             <div class="nft-thumb">
    //                                                 <img src="assets/images/nft-item/06.gif" alt="nft-img">
    //                                                 <!-- nft countdwon -->
    //                                                 <!-- <ul class="nft-countdown count-down"
    //                                                     data-date="July 05, 2022 21:14:01">
    //                                                     <li>
    //                                                         <span
    //                                                             class="days">34</span><span
    //                                                             class="count-txt">D</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span
    //                                                             class="hours">09</span><span
    //                                                             class="count-txt">H</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span
    //                                                             class="minutes">32</span><span
    //                                                             class="count-txt">M</span>
    //                                                     </li>
    //                                                     <li>
    //                                                         <span
    //                                                             class="seconds">32</span><span
    //                                                             class="count-txt">S</span>
    //                                                     </li>
    //                                                 </ul> -->
    //                                             </div>
    //                                             <div class="nft-content">
    //                                                 <h4>
    //                                                     <a href="item-details.html">Walking On Air</a>
    //                                                 </h4>
    //                                                 <div class="price-like d-flex justify-content-between align-items-center">
    //                                                     <p class="nft-price">Price:
    //                                                         <span class="yellow-color">0.34 ETH </span>
    //                                                     </p>
    //                                                     <a href="#" class="nft-like">
    //                                                         <i class="icofont-heart"></i>230
    //                                                     </a>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class="load-btn">
    //                             <a href="#" class="default-btn move-bottom">
    //                                 <span>Load More</span>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </article>   
    //     </div>
    // </div>
    // `
    // return container
}

export default profileAssetPage