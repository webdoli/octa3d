import { auth, db } from "../../db/firebaseDB";
import getData from "../hook_realtimeData";
import { UIDiv, UIIcon, UIImg, UIInput, UILI, UISpan, UIUL, UIH, UIP, UIA, MoglUI, UIButton } from "../../libs/moglUI";
import { coverUpload, avatarUpload } from "../hook_upload";

//import pages
import profileAssetPage from "./subPage/profile_assets";
import profileAboutPage from "./subPage/profile_about";
import profileCoworkPage from "./subPage/profile_coworking";
import profileActivityPage from "./subPage/profile_activity";
import profileTalkPage from "./subPage/profile_talk";

const createCSSLib = ( url  ) => {

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    document.head.appendChild( link );
}

const myPageMain = ( signals ) => {

    let currentUser = auth.currentUser.uid;
    let collection = 'users';
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

            let coverImg = new UIImg().setAttr({ 'src':userDB.cover_img, 'alt':'cover-pic' });
            let editPic = new UIDiv().setAttr({ 'class':'edit-photo custom-upload' })
            let editFile = new UIDiv().setAttr({ 'class':'file-btn' }).setTextContent('Edit Photo');
            let editFileIcon = new UIIcon().setAttr({ 'class':'icofont-camera' });
            let editCoverInput = new UIInput().setAttr({ 'type':'file', 'id':'profile-cover-pic' });

            let profileCover = new UIDiv().setAttr({ 'class':'profile-cover' });
            editFile.add( editFileIcon );
            editPic.add( editFile, editCoverInput );
            profileCover.add( coverImg, editPic );

            let profileInfo = new UIDiv().setAttr({ 'class':'profile-information' });

            let profilePic = new UIDiv().setAttr({ 'class':'profile-pic' });
            let profilePicImg = new UIImg().setAttr({ 'src':userDB.user_icon, 'alt':'DP' });
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

            let profileNav = new MoglUI( document.createElement('nav') ).setAttr({ 'class':'profile-nav' });
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
            let asideTag = new MoglUI( document.createElement('aside' )).setAttr({ 'class':'mt-5 mt-xl-0', 'style':'padding-left:15px;' });
            
            //Aside:: pfWidget
            let pfWidget = new UIDiv().setAttr({ 'class':'profile-widget search-widget' });
            let widgetInner = new UIDiv().setAttr({ 'class':'widget-inner' });
            let widgetTitle = new UIDiv().setAttr({ 'class':'widget-title' });
            let widgetTitleH05 = new UIH( 'Search 3D Assets', 5 );

            let widgetCon = new UIDiv().setAttr({ 'class':'widget-content' });
            let widgetP01 = new UIP().setTextContent('Search from best 3D Asset collections');
            let widgetConForm = new UIDiv().setAttr({ 'class':'form-floating nft-search-input' });
            let widgetConIpt = new UIInput().setAttr({ 'type':'text', 'class':'form-control', 'placeholder':'Search Assets' });
            let widgetLabel = new MoglUI( document.createElement('label') ).setTextContent('Search Assets');
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
            let snsWidgetH05 = new UIH('Featured Scenes', 5 ).setAttr({ 'class':'title' });
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

            // Execute & Func
            pfConTab.dom.appendChild( profileAssetPage( signals ) );

            function subPageExe( subpage ) {
                signals.profileSubpageReset.dispatch();
                pfConTab.dom.appendChild( subpage( signals) );
            }

            // Evt
            editCoverInput.dom.addEventListener('change', e => {
                
                let slc = e.target.files[0];
                if( !slc ) return;
                if( !slc.type.includes('image') ) return;
                if( slc.size > 1000000 ) return;
                //upload
                coverUpload( slc, currentUser, 'cover' );
            });

            profileInfoIpt.dom.addEventListener('change', e => {

                let slc = e.target.files[0];
                if( !slc ) return;
                if( !slc.type.includes('image') ) return;
                if( slc.size > 100000 ) return;
                avatarUpload( slc, currentUser, 'avatar' );

            })

            let subPages = [ aboutBtn, assetBtn, coworkBtn, activityBtn, talkBtn ];
            subPages.map( subPage => {

                subPage.dom.addEventListener('click', (e) => {
                    
                    switch ( e.target.id ) {
                        case 'nav-about-tab':
                            subPageExe( profileAboutPage );
                            break;

                        case 'nav-assets-tab':
                            subPageExe( profileAssetPage );
                            break;

                        case 'nav-coworking-tab':
                            subPageExe( profileCoworkPage );
                            break;

                        case 'nav-activity-tab':
                            subPageExe( profileActivityPage );
                            break;

                        case 'nav-talk-tab':
                            subPageExe( profileTalkPage );
                            break;
                    }

                })
            });



            //signals
            signals.profileAssetsOpen.dispatch( pfConTab.dom );
            signals.profileSubpageReset.add( () => {

                while ( pfConTab.dom.firstChild ) {
                    pfConTab.dom.removeChild( pfConTab.dom.firstChild );
                }

            });

            signals.resetAboutPage.add(() => {
                subPageExe( profileAboutPage );
            })

        })
        .then(( uid ) => {
            
            // db 입력

        })
    
    return container.dom;

}

export default myPageMain;