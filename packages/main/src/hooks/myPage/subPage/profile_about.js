import { auth } from "../../../db/firebaseDB";
import getData from "../../hook_getData";
import { OctaUI, UIButton, UIDiv, UIH, UILI, UIP, UIUL } from "../../../libs/octaUI";

const profileAboutPage = () => {

    let collection = 'users';
    let currentUser = auth.currentUser.uid;
    let container = new UIDiv();
    // let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'about', 'role':'tabpanel', 'aria-labelledby':'nav-about-tab' });
    // let container = document.createElement('div');
    
    getData( collection, currentUser )
        .then( ( data ) => {

            let user = data.data();
            let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'about', 'role':'tabpanel', 'aria-labelledby':'nav-about-tab' });
            let row = new UIDiv().setAttr({ 'class':'row' });
            let articleMain = new OctaUI( document.createElement('article' )).setAttr({ 'class':'visible', 'id':'profile-intro-article' });
            
            //cardInfo
            let cardInfo = new UIDiv().setAttr({ 'class':'info-card mb-3' });
            let cardTitle = new UIDiv().setAttr({ 'class':'info-card-title' });
            let cardInfoH4 = new UIH( 'About', 4 );
            let cardContent = new UIDiv().setAttr({ 'class':'info-card-content' });
            let cardConP = new UIP().setTextContent( user.self_intro );

            let cardInfo2 = new UIDiv().setAttr({ 'class':'info-card' });
            let cardInfo2Title = new UIDiv().setAttr({ 'class':'info-card-title' });
            let cardInfoH402 = new UIH( 'Other Info', 4 );
            let cardContent02 = new UIDiv().setAttr({ 'class':'info-card-content' });
            let cardInfo2Ul = new UIUL().setAttr({ 'class':'info-list' });
            let cardInfo2Li01 = new UILI();
            let cardInfoP01 = new UIP().setAttr({ 'class':'info-name' }).setTextContent( 'Nick Name' );
            let cardInfoP02 = new UIP().setAttr({ 'class':'info-details' }).setTextContent( user.nickName );
            let cardInfo2Li02 = new UILI();
            let cardInfoP03 = new UIP().setAttr({ 'class':'info-name' }).setTextContent( 'Country' );
            let cardInfoP04 = new UIP().setAttr({ 'class':'info-details' }).setTextContent( user.country );

            let aboutBtn = new UIButton().setAttr({ 'type':'button', 'class':'btn btn-primary', 'data-bs-toggle':'modal', 'data-bs-target':'#confirmPWModal', 
            'style':'margin-top:20px; margin-left:41%; padding:10px 30px' }).setTextContent('Edit');
            
            cardContent.add( cardConP );
            cardTitle.add( cardInfoH4 );
            cardInfo.add( cardTitle, cardContent );

            cardInfo2Title.add( cardInfoH402 );
            cardContent02.add( cardInfo2Ul );

            cardInfo2Li01.add( cardInfoP01, cardInfoP02 );
            cardInfo2Li02.add( cardInfoP03, cardInfoP04 );
            cardInfo2Ul.add( cardInfo2Li01, cardInfo2Li02 );

            cardInfo2.add( cardInfo2Title, cardContent02 );

            articleMain.add( cardInfo, cardInfo2, aboutBtn );
            row.add( articleMain )
            tabPane.add( row )
            container.add( tabPane );
        

    //         container.innerHTML += `
    // <!-- about tab -->
    // <div class="tab-pane" id="about" role="tabpanel" aria-labelledby="nav-about-tab">
    //     <div class="row">
    //     <article class="visible" id="profile-intro-article">
    //             <div class="info-card mb-3">
    //                 <div class="info-card-title">
    //                     <h4>About</h4>
    //                 </div>
    //                 <div class="info-card-content">
    //                     <p> ${ user.self_intro } </p>
    //                 </div>
    //             </div>
    //             <div class="info-card">
    //                 <div class="info-card-title">
    //                     <h4>Other Info</h4>
    //                 </div>
    //                 <div class="info-card-content">
    //                     <ul class="info-list">
    //                         <li>
    //                             <p class="info-name">Nick Name</p>
    //                             <p class="info-details"> ${ user.nickName } </p>
    //                         </li>
    //                         <li>
    //                             <p class="info-name">Country</p>
    //                             <p class="info-details"> ${ user.country } </p>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             <button type="button" 
    //                 class="btn btn-primary" 
    //                 data-bs-toggle="modal" 
    //                 data-bs-target="#confirmPWModal"
    //                 style="margin-top:20px; margin-left:41%; padding:10px 30px"
    //             >
    //                 Edit
    //             </button>

    //             <!-- Modal -->
    //             <div class="modal fade" id="confirmPWModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //               <div class="modal-dialog">
                   
    //                 <div class="modal-content">
    //                   <div class="modal-header">
    //                     <h1 class="modal-title fs-5" id="exampleModalLabel" style="color:black;"> Confirm Password </h1>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
    //                   </div>
    //                   <div class="modal-body">
    //                     <label style="color:black;">insert password</label>
    //                     <input type="text" id="profile-valid-pw-input"/>
    //                     <br/>
    //                     <span id="profileForm-pw-valid" style="color:tomato;font-size:0.7em;"></span>
    //                   </div>
    //                   <div class="modal-footer">
    //                     <button type="submit"
    //                         onclick="{ (() => {
    //                             let modalEl = document.querySelector('#confirmPWModal');
    //                             let errorEl = document.querySelector('#profileForm-pw-valid');
    //                             let editForm = document.querySelector('#intro-article-form');
    //                             let profile = document.querySelector('#profile-intro-article');
    //                             let newPW = document.querySelector('#profile-valid-pw-input').value;
    //                             window.usrNewPW( newPW, modalEl, errorEl, editForm, profile );
                                
    //                             })()
    //                         }"
    //                         class="btn btn-primary" 
    //                         id="profile-pw-valid"
    //                     >
    //                         Submit
    //                     </button>
    //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                   </div>
    //                 </div>
                    
    //               </div>
    //             </div>

    //         </article>

    //         <article id="intro-article-form" style="display:none;">
                
    //                 <div class="input-group">
    //                     <span class="input-group-text">My Intro</span>
    //                     <textarea class="form-control" id="profile-myIntro-edit" aria-label="With textarea" rows="6" required></textarea>
    //                 </div>
    //                 <div class="mb-3 profile-edit-form-otherinfo" style="font-size:1.2em; padding:30px 0">
    //                     <label class="form-label"> Other Info </label>
    //                     <div class="input-group mb-3">
    //                         <span class="input-group-text">nick name</span>
    //                         <input type="text" id="profile-nickName-edit" class="form-control" placeholder="Nickname" required>
    //                     </div>
    //                     <div id="nickname-alert" style="color:tomato;"></div>
    //                     <select class="form-select" id="profile-nation-edit" aria-label="Default select example" required>
    //                         <option selected> Select Country </option>
    //                         <option value="America">America</option>
    //                         <option value="Japan">Japan</option>
    //                         <option value="South Korea">Korea</option>
    //                     </select>
    //                     <div id="nation-alert" style="color:tomato;"></div>
    //                     <div style="margin-top:35px;">
    //                         <div class="row g-3 align-items-center">
    //                             <div class="col-auto">
    //                                 <label for="inputPassword6" class="col-form-label">new Password</label>
    //                             </div>
    //                             <div class="col-auto">
    //                                 <input type="password" id="newPassword" class="form-control" aria-labelledby="passwordHelpInline" required>

    //                             </div>
    //                         </div>
    //                         <div class="row g-3 align-items-center" style="margin-top:10px;">
    //                             <div class="col-auto">
    //                                 <label for="inputPassword6" class="col-form-label">confirm Password</label>
    //                             </div>
    //                             <div class="col-auto">
    //                                 <input type="password" id="confirmPassword" class="form-control" aria-labelledby="passwordHelpInline" required>
    //                                 <div class="invalid-feedback02" style="color:tomato; font-size:.8em;"> </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="submit-btn-field text-center">
    //                     <button type="submit" 
    //                         id="profile-edit-submitBtn" 
    //                         onclick="{ (() => {
                                
    //                             let myIntro = document.querySelector('#profile-myIntro-edit').value;
    //                             let nickName = document.querySelector('#profile-nickName-edit').value;
    //                             let country = document.querySelector('#profile-nation-edit').value;
    //                             let newPW = document.querySelector('#newPassword').value;
    //                             let confirmPW = document.querySelector('#confirmPassword').value;
    //                             let originForm = document.querySelector('#profile-intro-article');
    //                             let parent = document.querySelector('#nav-tabContent');

    //                             console.log('nation: ' + country );
    //                             if( nickName === '' ) {
    //                                 $('#nickname-alert').empty();
    //                                 $('#nickname-alert').append('make your nickName');
    //                             }
    //                             if( country === 'Select Country' ) {
    //                                 $('#nation-alert').empty();
    //                                 $('#nation-alert').append('select your country');
    //                             }
                                
    //                             if( newPW !== confirmPW ) {
    //                                 console.log('비밀번호 불일치');
    //                                 $('.invalid-feedback02').empty();
    //                                 $('.invalid-feedback02').append('<span> password not matched </span>')
    //                             } else {
    //                                 console.log('Edit 제출');
    //                                 let editForm = $('#intro-article-form').remove();
    //                                 $('#nickname-alert').empty();
    //                                 $('#nation-alert').empty();
    //                                 $('.invalid-feedback02').empty();
    //                                 window.profileEditFunc( myIntro, nickName, country, newPW, originForm, parent )
    //                             }
                                
    //                         })() }" 
    //                         style="padding:10px 25px; margin: 20px 0"
    //                     >   Edit
    //                     </button>
    //                 </div>
                
    //         </article>     
            
    //     </div>
    // </div>
    // `
        });

    return container.dom

}

export default profileAboutPage