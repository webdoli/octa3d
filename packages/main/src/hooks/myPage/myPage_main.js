import { auth, db } from "../../db/firebaseDB";
import getData from "../hook_realtimeData";
import { UIDiv, UIIcon, UIImg, UIInput, UILI, UISpan, UIUL, UIH, UIP, UIA, OctaUI, UIButton } from "../../libs/octaUI";

const createCSSLib = ( url  ) => {

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    document.head.appendChild( link );
}

const myPageMain = () => {

    let currentUser = auth.currentUser.uid;
    let collection = 'users';

    // let container = document.createElement('div');
    // container.className = 'container';
    
    let container = new UIDiv().setAttr({ 'class':'container' });

    createCSSLib( './lib/mypage/bootstrap.min.css' );
    createCSSLib( './lib/mypage/icofont.min.css' );
    createCSSLib( './lib/mypage/swiper-bundle.min.css' );

    getData( collection, currentUser )
        .then( (user) => {

            let userDB = user.data();
            
            //Wrapper
            let sectionWrapper = new UIDiv().setAttr({ 'class':'section-wrapper' });
            let memberProfile = new UIDiv().setAttr({ 'class':'member-profile' });

            //profile item
            let profileItem = new UIDiv().setAttr({ 'class':'profile-item' });

            let coverImg = new UIImg().setAttr({ 'src':'', 'alt':'cover-pic' });
            let editPic = new UIDiv().setAttr({ 'class':'edit-photo custom-upload' })
            let editFile = new UIDiv().setAttr({ 'class':'file-btn' }).setTextContent('Edit Photo');
            let editFileIcon = new UIIcon().setAttr({ 'class':'icofont-camera' });
            let editPicInput = new UIInput().setAttr({ 'type':'file', 'id':'profile-cover-pic' });

            let profileCover = new UIDiv().setAttr({ 'class':'profile-cover' });
            editFile.add( editFileIcon );
            editPic.add( editFile, editPicInput );
            profileCover.add( coverImg, editPic );

            let profileInfo = new UIDiv().setAttr({ 'class':'profile-information' });

            let profilePic = new UIDiv().setAttr({ 'class':'profile-pic' });
            let profilePicImg = new UIImg().setAttr({ 'src':'', 'alt':'DP' });
            let customUpload = new UIDiv().setAttr({ 'class':'custom-upload' });
            let fileBtn = new UIDiv().setAttr({ 'class':'file-btn' });
            let span01 = new UISpan().setAttr({ 'class':'d-none d-lg-inline-block' }).setTextContent('Edit');
            let icon01 = new UIIcon().setAttr({ 'class':'icofont-camera' })
            let span02 = new UISpan().setAttr({ 'class':'d-lg-none mr-0' });
            let icon02 = new UIIcon().setAttr({ 'class':'icofont-plus' });
            let profileInfoIpt = new UIInput().setAttr({ 'type':'file', 'id':'profile-avatar' });

            span01.add( icon01, icon02 );
            fileBtn.add( span01, span02 );
            customUpload.add( fileBtn, profileInfoIpt );
            profilePic.add( profilePicImg, customUpload );

            let profileName = new UIDiv().setAttr({ 'class':'profile-name' });
            let profileH04 = new UIH( '', 4 );
            let profileNameP = new UIP();
            profileName.add( profileH04, profileNameP );

            let profileContact = new UIUL().setAttr({ 'class':'profile-contact' });

            let pfContactLi01 = new UILI();
            let pfConA01 = new UIA().setAttr({ 'href':'#' });
            let pfConIconDiv01 = new UIDiv().setAttr({ 'class':'icon' });
            let pfConIcon01 = new UIIcon().setAttr({ 'class':'icofont-ui-rate-add' });
            let pfText01 = new UIDiv().setAttr({ 'class':'text' });
            let pfP01 = new UIP().setTextContent('Follow');

            let pfContactLi02 = new UILI();
            let pfConA02 = new UIA().setAttr({ 'href':'#' });
            let pfConIconDiv02 = new UIDiv().setAttr({ 'class':'icon' });
            let pfConIcon02 = new UIIcon().setAttr({ 'class':'icofont-speech-comments' });
            let pfText02 = new UIDiv().setAttr({ 'class':'text' });
            let pfP02 = new UIP().setTextContent('Send Message');

            pfConIconDiv01.add( pfConIcon01 );
            pfText01.add( pfP01 );
            pfConA01.add( pfConIconDiv01, pfText01 );
            pfContactLi01.add( pfConA01 );

            pfConIconDiv02.add( pfConIcon02 );
            pfText02.add( pfP02 );
            pfConA02.add( pfConIconDiv02, pfText02 );
            pfContactLi02.add( pfConA02 );

            profileContact.add( pfContactLi01, pfContactLi02 );

            profileInfo.add( profilePic, profileName, profileContact );
            profileItem.add( profileCover, profileInfo )

            //profile details
            let profileDetail = new UIDiv().setAttr({ 'class':'profile-details' });

            let profileNav = new OctaUI( document.createElement('nav') ).setAttr({ 'class':'profile-nav' });
            let navTabs = new UIDiv().setAttr({ 'class':'nav nav-tabs', 'id':'nav-tab', 'role':'tablist' });
            let aboutBtn = new UIButton().setAttr({ 
                'class':'nav-link profile-sub-btn', 'id':'nav-about-tab', 'data-pageBtn':'about', 'type':'button',
                'data-bs-toggle':'tab', 'data-bs-target':'#about', 'role':'tab', 'aria-controls':'about', 'aria-selected':'false'
            }).setTextContent('About');
            let assetBtn = new UIButton().setAttr({ 
                'class':'nav-link active profile-sub-btn', 'id':'nav-assets-tab', 'data-pageBtn':'assets', 'type':'button',
                'data-bs-toggle':'tab', 'data-bs-target':'#assets-page', 'role':'tab', 'aria-controls':'assets-page', 'aria-selected':'true'
            }).setTextContent('My Assets');
            let coworkBtn = new UIButton().setAttr({ 
                'class':'nav-link profile-sub-btn', 'id':'nav-coworking-tab', 'data-pageBtn':'coworking', 'type':'button',
                'data-bs-toggle':'tab', 'data-bs-target':'#coworking', 'role':'tab', 'aria-controls':'coworking', 'aria-selected':'false'
            }).setTextContent('Coworking');
            let coworkSpan = new UISpan().setAttr({ 'class':'item-number' }).setTextContent('231');
            let activityBtn = new UIButton().setAttr({ 
                'class':'nav-link profile-sub-btn', 'id':'nav-activity-tab', 'data-pageBtn':'activity', 'type':'button',
                'data-bs-toggle':'tab', 'data-bs-target':'#activity', 'role':'tab', 'aria-controls':'activity', 'aria-selected':'false'
            }).setTextContent('Activity');
            let talkBtn = new UIButton().setAttr({ 
                'class':'nav-link profile-sub-btn', 'id':'nav-talk-tab', 'data-pageBtn':'talk', 'type':'button',
                'data-bs-toggle':'tab', 'data-bs-target':'#talk', 'role':'tab', 'aria-controls':'talk', 'aria-selected':'false'
            }).setTextContent('Talk');
            let talkSpan = new UISpan().setAttr({ 'class':'item-number' }).setTextContent('145');

            coworkBtn.add( coworkSpan );
            talkBtn.add( talkSpan );
            navTabs.add( aboutBtn, assetBtn, coworkBtn, activityBtn, talkBtn );
            profileNav.add( navTabs );

            let pfContainer = new UIDiv().setAttr({ 'class':'container', 'style':'display:flex;' });
            let pfConTab = new UIDiv().setAttr({ 'class':'tab-content', 'id':'nav-tabContent', 'style':'width:100%;' });

            //Aside
            let asideWrapper = new UIDiv().setAttr({ 'class':'col-xl-3' });
            let asideTag = new OctaUI( document.createElement('aside' )).setAttr({ 'class':'mt-5 mt-xl-0', 'style':'padding-left:15px;' });
            
            //Aside:: pfWidget
            let pfWidget = new UIDiv().setAttr({ 'class':'profile-widget search-widget' });
            let widgetInner = new UIDiv().setAttr({ 'class':'widget-inner' });
            let widgetTitle = new UIDiv().setAttr({ 'class':'widget-title' });
            let widgetTitleH05 = new UIH( 'Search 3D Assets', 5 );

            let widgetCon = new UIDiv().setAttr({ 'class':'widget-content' });
            let widgetP01 = new UIP().setTextContent('Search from best Rarest NFT collections');
            let widgetConForm = new UIDiv().setAttr({ 'class':'form-floating nft-search-input' });
            let widgetConIpt = new UIInput().setAttr({ 'type':'text', 'class':'form-control', 'placeholder':'Search Assets' });
            let widgetLabel = new OctaUI( document.createElement('label') ).setTextContent('Search Assets');
            let widgetBtn = new UIButton().setAttr({ 'type':'button' });
            let widgetBtnIcon = new UIIcon().setAttr({ 'class':'icofont-search-1' });

            widgetTitle.add( widgetTitleH05 );
            widgetBtn.add( widgetBtnIcon );
            widgetConForm.add( widgetConIpt, widgetLabel, widgetBtn );
            widgetCon.add( widgetP01, widgetConForm );
            widgetInner.add( widgetTitle, widgetCon );
            pfWidget.add( widgetInner );

            //Aside:: snsWidget
            let snsWidget = new UIDiv().setAttr({ 'class':'widget widget-instagram' });
            let snsWidgetHeader = new UIDiv().setAttr({ 'class':'widget-header' });
            let snsWidgetH05 = new UIH('Featured NFT', 5 ).setAttr({ 'class':'title' });
            let snsWidgetUl = new UIUL().setAttr({ 'class':'widget-wrapper d-flex flex-wrap justify-content-center' });
            let snsWidgetLi = new UILI();
            let snsWidgetA01 = new UIA().setAttr({ 'data-rel':'lightcase', 'href':'#' });
            let snsWidgetImg = new UIImg().setAttr({ 'loading':'lazy', 'src':'', 'alt':'nft-img' });

            snsWidgetHeader.add( snsWidgetH05 );

            snsWidget.add( snsWidgetHeader, snsWidgetUl );
            snsWidgetUl.addSeq( snsWidgetLi, snsWidgetA01, snsWidgetImg );

            asideTag.add( pfWidget, snsWidget );
            asideWrapper.add( asideTag );

            pfContainer.add( pfConTab, asideWrapper );
            profileDetail.add( profileNav, pfContainer );

            // Conversion
            memberProfile.add( profileItem, profileDetail );
            sectionWrapper.add( memberProfile );
            container.add( sectionWrapper );

            window.signals.profileAssetsOpen.dispatch( pfConTab.dom );

            // container.innerHTML += `
    
            //     <div class="section-wrapper">
            //         <div class="member-profile">
            //             <div class="profile-item" >
            //                 <div class="profile-cover">
            //                     <img src=${ userDB.cover_img } alt="cover-pic">
            //                     <div class="edit-photo custom-upload">
            //                         <div class="file-btn"><i class="icofont-camera"></i>
            //                             Edit Photo
            //                         </div>
            //                         <input type="file" id="profile-cover-pic">
            //                     </div>
            //                 </div>
            //                 <div class="profile-information">
            //                     <div class="profile-pic">
            //                         <img src=${ userDB.user_icon }  alt="DP">
            //                         <div class="custom-upload">
            //                             <div class="file-btn">
            //                                 <span class="d-none d-lg-inline-block"> <i class="icofont-camera"></i>
            //                                     Edit
            //                                 </span>
            //                                 <span class="d-lg-none mr-0"><i class="icofont-plus"></i></span>
            //                             </div>
            //                             <input type="file" id="profile-avatar">
            //                         </div>
            //                     </div>
            //                     <div class="profile-name">
            //                         <h4> ${ userDB.nickName }</h4>
            //                         <p> ${ userDB.id } </p>
            //                     </div>
            //                     <ul class="profile-contact">
            //                         <li>
            //                             <a href="#">
            //                                 <div class="icon"><i class="icofont-ui-rate-add"></i></div>
            //                                 <div class="text">
            //                                     <p>Follow</p>
            //                                 </div>
            //                             </a>
            //                         </li>
            //                         <li>
            //                             <a href="#">
            //                                 <div class="icon"><i class="icofont-speech-comments"></i></div>
            //                                 <div class="text">
            //                                     <p>Send Message</p>
            //                                 </div>
            //                             </a>
            //                         </li>
            //                     </ul>
            //                 </div>
            //             </div>
            //             <div class="profile-details">
                            
            //                 <nav class="profile-nav">
            //                     <div class="nav nav-tabs" id="nav-tab" role="tablist">
            //                         <button class="nav-link profile-sub-btn" id="nav-about-tab" data-pageBtn="about" data-bs-toggle="tab" data-bs-target="#about"
            //                             type="button" role="tab" aria-controls="about" aria-selected="false">About
            //                         </button>
            //                         <button class="nav-link active profile-sub-btn" id="nav-assets-tab" data-pageBtn="assets" data-bs-toggle="tab"
            //                             data-bs-target="#assets-page" type="button" role="tab" aria-controls="assets-page"
            //                             aria-selected="true">My Assets
            //                         </button>
            //                         <button class="nav-link profile-sub-btn" id="nav-coworking-tab" data-pageBtn="coworking" data-bs-toggle="tab"
            //                             data-bs-target="#coworking" type="button" role="tab" aria-controls="coworking"
            //                             aria-selected="false">CoWorking <span class="item-number">231</span>
            //                         </button>
            //                         <button class="nav-link profile-sub-btn" id="nav-activity-tab" data-pageBtn="activity" data-bs-toggle="tab"
            //                             data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
            //                             aria-selected="false">
            //                             Activity
            //                         </button>
            //                         <button class="nav-link profile-sub-btn" id="nav-talk-tab" data-pageBtn="talk" data-bs-toggle="tab"
            //                             data-bs-target="#talk" type="button" role="tab" aria-controls="following"
            //                             aria-selected="false"> Talk <span class="item-number">145</span>
            //                         </button>
            //                         <!--<button class="nav-link" id="nav-wallet-tab" data-bs-toggle="tab"
            //                             data-bs-target="#wallet" type="button" role="tab" aria-controls="wallet"
            //                             aria-selected="false">My Wallet
            //                         </button>-->
            //                         <!--<div class="dropdown"> 
            //                             <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            //                                 aria-expanded="false">
            //                                 Setting
            //                             </a>
            //                             <ul class="dropdown-menu">
            //                                 <li><a class="dropdown-item" href="#">Profile</a></li>
            //                                 <li><a class="dropdown-item" href="#">Editor</a></li>
            //                                 <li><a class="dropdown-item" href="#">Block user</a></li>
            //                             </ul>
            //                         </div>-->
            //                     </div>
            //                 </nav>
            //                 <div class="container" style="display:flex;">
            //                 <div class="tab-content" id="nav-tabContent" style="width:100%;">
            //                 </div>
                            
            //                 <div class="col-xl-3">
            //                     <!-- Aside Part -->
            //                     <aside class="mt-5 mt-xl-0" style="padding-left:15px;">
            //                         <div class="profile-widget search-widget">
            //                             <div class="widget-inner">
            //                                 <div class="widget-title">
            //                                     <h5>Search NFT</h5>
            //                                 </div>
            //                                 <div class="widget-content">
            //                                     <p>Search from best Rarest NFT collections</p>
            //                                     <div class="form-floating nft-search-input">
            //                                         <input type="text" class="form-control"
            //                                             placeholder="Search Assets">
            //                                         <label>Search Assets</label>
            //                                         <button type="button">
            //                                             <i class="icofont-search-1"></i>
            //                                         </button>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                         <div class="widget widget-instagram">
            //                             <div class="widget-header">
            //                                 <h5 class="title">Featured NFT</h5>
            //                             </div>
            //                             <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
            //                                 <li><a data-rel="lightcase"
            //                                         href="assets/images/nft-item/01.jpg">
            //                                         <img loading="lazy"
            //                                              src="assets/images/nft-item/01.jpg"
            //                                              alt="nft-img">
            //                                     </a>
            //                                 </li>
            //                             </ul>
            //                         </div>
            //                     </aside>
            //                 </div>
            //                 </div>
            //             </div>  

            //         </div>
            //     </div>
            // `
        })
        .then(( uid ) => {
            
            // let script01 = document.createElement('script');
            // // about 페이지 html script넣는 함수 생성 = window.signals에 등록
            // script01.innerHTML += `

            //     let parent = document.querySelector('#nav-tabContent');
            //     let aboutBtn = document.querySelector('#myprofile-about');
            //     let coverImgEdit = document.querySelector('#profile-cover-pic');
            //     let avatarImgEdit = document.querySelector('#profile-avatar');

            //     window.signals.profileAssetsOpen.dispatch( parent );

            //     coverImgEdit.addEventListener('change', (e) => {
                    
            //         let selected = e.target.files[0];
            //         if( !selected ) return;
            //         if( !selected.type.includes('image') ) return;
            //         if( selected.size > 1000000 ) return;
            //         console.log('커버 이미지 사이즈: ', selected.size );
            //         window.signals.profileCoverEdit.dispatch( selected );
            //     });

            //     avatarImgEdit.addEventListener('change', (e) => {
            //         let selected = e.target.files[0];
            //         if( !selected ) return;
            //         if( !selected.type.includes('image') ) return;
            //         if( selected.size > 100000 ) return;
            //         window.signals.profileAvatarEdit.dispatch( selected );
            //     })
                
                // document.querySelector('#nav-about-tab').addEventListener('click', (e) => {
                //     window.signals.profileAboutOpen.dispatch( parent );
                // });

                // document.querySelector('#nav-assets-tab').addEventListener('click', (e) => {
                //     window.signals.profileAssetsOpen.dispatch( parent );
                // });

                // document.querySelector('#nav-coworking-tab').addEventListener('click', (e) => {
                //     window.signals.profileCoworkOpen.dispatch( parent );
                // });

                // document.querySelector('#nav-activity-tab').addEventListener('click', (e) => {
                //     window.signals.profileActivityOpen.dispatch( parent );
                // });

                // document.querySelector('#nav-talk-tab').addEventListener('click', (e) => {
                //     window.signals.profileTalkOpen.dispatch( parent );
                // });
            // `
            // container.appendChild( script01 );
        })
    
    return container.dom;

}

export default myPageMain;