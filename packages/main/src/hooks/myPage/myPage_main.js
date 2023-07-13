import { auth, db } from "../../db/firebaseDB";
import getData from "../hook_realtimeData";

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

    let container = document.createElement('div');
    container.className = 'container';
    createCSSLib( './lib/mypage/bootstrap.min.css' );
    createCSSLib( './lib/mypage/icofont.min.css' );
    createCSSLib( './lib/mypage/swiper-bundle.min.css' );

    getData( collection, currentUser )
        .then( (user) => {

            let userDB = user.data(); 
            container.innerHTML += `
    
                <div class="section-wrapper">
                    <div class="member-profile">
                        <div class="profile-item" >
                            <div class="profile-cover">
                                <img src=${ userDB.cover_img } alt="cover-pic">
                                <div class="edit-photo custom-upload">
                                    <div class="file-btn"><i class="icofont-camera"></i>
                                        Edit Photo
                                    </div>
                                    <input type="file" id="profile-cover-pic">
                                </div>
                            </div>
                            <div class="profile-information">
                                <div class="profile-pic">
                                    <img src=${ userDB.user_icon }  alt="DP">
                                    <div class="custom-upload">
                                        <div class="file-btn">
                                            <span class="d-none d-lg-inline-block"> <i class="icofont-camera"></i>
                                                Edit
                                            </span>
                                            <span class="d-lg-none mr-0"><i class="icofont-plus"></i></span>
                                        </div>
                                        <input type="file">
                                    </div>
                                </div>
                                <div class="profile-name">
                                    <h4> ${ userDB.nickName }</h4>
                                    <p> ${ userDB.id } </p>
                                </div>
                                <ul class="profile-contact">
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-ui-rate-add"></i></div>
                                            <div class="text">
                                                <p>Follow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-speech-comments"></i></div>
                                            <div class="text">
                                                <p>Send Message</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-details">
                            
                            <nav class="profile-nav">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link profile-sub-btn" id="nav-about-tab" data-pageBtn="about" data-bs-toggle="tab" data-bs-target="#about"
                                        type="button" role="tab" aria-controls="about" aria-selected="false">About
                                    </button>
                                    <button class="nav-link active profile-sub-btn" id="nav-assets-tab" data-pageBtn="assets" data-bs-toggle="tab"
                                        data-bs-target="#assets-page" type="button" role="tab" aria-controls="assets-page"
                                        aria-selected="true">My Assets
                                    </button>
                                    <button class="nav-link profile-sub-btn" id="nav-coworking-tab" data-pageBtn="coworking" data-bs-toggle="tab"
                                        data-bs-target="#coworking" type="button" role="tab" aria-controls="coworking"
                                        aria-selected="false">CoWorking <span class="item-number">231</span>
                                    </button>
                                    <button class="nav-link profile-sub-btn" id="nav-activity-tab" data-pageBtn="activity" data-bs-toggle="tab"
                                        data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
                                        aria-selected="false">
                                        Activity
                                    </button>
                                    <button class="nav-link profile-sub-btn" id="nav-talk-tab" data-pageBtn="talk" data-bs-toggle="tab"
                                        data-bs-target="#talk" type="button" role="tab" aria-controls="following"
                                        aria-selected="false"> Talk <span class="item-number">145</span>
                                    </button>
                                    <!--<button class="nav-link" id="nav-wallet-tab" data-bs-toggle="tab"
                                        data-bs-target="#wallet" type="button" role="tab" aria-controls="wallet"
                                        aria-selected="false">My Wallet
                                    </button>-->
                                    <!--<div class="dropdown"> 
                                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Setting
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li><a class="dropdown-item" href="#">Editor</a></li>
                                            <li><a class="dropdown-item" href="#">Block user</a></li>
                                        </ul>
                                    </div>-->
                                </div>
                            </nav>
                            <div class="container" style="display:flex;">
                            <div class="tab-content" id="nav-tabContent" style="width:100%;">
                            </div>
                            
                            <div class="col-xl-3">
                                <!-- Aside Part -->
                                <aside class="mt-5 mt-xl-0" style="padding-left:15px;">
                                    <div class="profile-widget search-widget">
                                        <div class="widget-inner">
                                            <div class="widget-title">
                                                <h5>Search NFT</h5>
                                            </div>
                                            <div class="widget-content">
                                                <p>Search from best Rarest NFT collections</p>
                                                <div class="form-floating nft-search-input">
                                                    <input type="text" class="form-control"
                                                        placeholder="Search Assets">
                                                    <label>Search Assets</label>
                                                    <button type="button">
                                                        <i class="icofont-search-1"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget widget-instagram">
                                        <div class="widget-header">
                                            <h5 class="title">Featured NFT</h5>
                                        </div>
                                        <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                            <li><a data-rel="lightcase"
                                                    href="assets/images/nft-item/01.jpg">
                                                    <img loading="lazy"
                                                         src="assets/images/nft-item/01.jpg"
                                                         alt="nft-img">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            </div>
                        </div>  

                    </div>
                </div>
            `
        })
        .then(() => {
            
            let script01 = document.createElement('script');
            // about 페이지 html script넣는 함수 생성 = window.signals에 등록
            script01.innerHTML += `

                let parent = document.querySelector('#nav-tabContent');
                let aboutBtn = document.querySelector('#myprofile-about');
                let coverImgEdit = document.querySelector('#profile-cover-pic');

                window.signals.profileAssetsOpen.dispatch( parent );

                coverImgEdit.addEventListener('change', (e) => {
                    
                    let selected = e.target.files[0];
                    if( !selected ) return;
                    if( !selected.type.includes('image') ) return;
                    if( selected.size > 1000000 ) return;
                    console.log('커버 이미지 사이즈: ', selected.size );
                    //window.signals.profileCoverEdit.dispatch( selected );
                })
                
                document.querySelector('#nav-about-tab').addEventListener('click', (e) => {
                    window.signals.profileAboutOpen.dispatch( parent );
                });

                document.querySelector('#nav-assets-tab').addEventListener('click', (e) => {
                    window.signals.profileAssetsOpen.dispatch( parent );
                });

                document.querySelector('#nav-coworking-tab').addEventListener('click', (e) => {
                    window.signals.profileCoworkOpen.dispatch( parent );
                });

                document.querySelector('#nav-activity-tab').addEventListener('click', (e) => {
                    window.signals.profileActivityOpen.dispatch( parent );
                });

                document.querySelector('#nav-talk-tab').addEventListener('click', (e) => {
                    window.signals.profileTalkOpen.dispatch( parent );
                });
            `
            container.appendChild( script01 );
        })
    
    return container;

}

export default myPageMain;