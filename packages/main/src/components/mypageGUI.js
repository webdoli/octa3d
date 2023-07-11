import { auth, db } from '../db/firebaseDB';
import getData from './../hooks/hook_getData';
import getRealData from './../hooks/hook_getData';
import mypageCSS from "./mypageCSS";
import Strings from './strings';
import { userPWValidChk } from '../hooks/hookAuth';

const createCSSLib = ( url  ) => {

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    document.head.appendChild( link );
}


const MypageGUI = () => {

    function pwValidFunc ( ) {
        
        console.log('비번검증 실행');

        if( document.querySelector('#profile-valid-pw-input') ) {
            console.log( document.querySelector('#profile-valid-pw-input').value );
        }
        
    }
    
    let currentUser = auth.currentUser.uid;
    
    let newPW = null;

    createCSSLib( './lib/mypage/bootstrap.min.css' );
    createCSSLib( './lib/mypage/icofont.min.css' );
    createCSSLib( './lib/mypage/swiper-bundle.min.css' );

    let container = document.createElement('section');
    container.className = 'profile-section padding-top padding-bottom';
    container.appendChild( mypageCSS() );

    getRealData( 'users', currentUser )
        .then( res => {

            return res.data();
        
        })
        .then( user => {
            container.innerHTML += `
    <div class="container">
        <div class="section-wrapper">
                <div class="member-profile">

                    <div class="profile-item" >
                        <div class="profile-cover">
                            <img src=${ user.cover_img } alt="cover-pic">
                            <div class="edit-photo custom-upload">
                                <div class="file-btn"><i class="icofont-camera"></i>
                                    Edit Photo
                                </div>
                                <input type="file">
                            </div>
                        </div>
                        <div class="profile-information">
                            <div class="profile-pic">
                                <img src= ${ user.user_icon } alt="DP">
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
                                <h4> ${ user.nickName } </h4>
                                <p> ${ user.id } </p>
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

                    <div class="profile-item d-none">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <a href="#"><img src="assets/images/profile/Profile.jpg" alt="profile"></a>
                            </div>
                            <div class="lab-content">
                                <div class="profile-name">
                                    <div class="p-name-content">
                                        <h4>William Smith</h4>
                                        <p>Active 02 Minutes Ago</p>
                                    </div>

                                    <div class="contact-button">
                                        <button class="contact-btn">
                                            <i class="icofont-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                                <ul class="profile-contact">
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-user"></i></div>
                                            <div class="text">
                                                <p>Add Friends</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-envelope"></i></div>
                                            <div class="text">
                                                <p>Publice Message</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="icofont-envelope"></i></div>
                                            <div class="text">
                                                <p>Private Message</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="profile-details">
                        <nav class="profile-nav">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#about"
                                    type="button" role="tab" aria-controls="about" aria-selected="false">About
                                </button>
                                <button class="nav-link active" id="nav-allNft-tab" data-bs-toggle="tab"
                                    data-bs-target="#allNft" type="button" role="tab" aria-controls="allNft"
                                    aria-selected="true">My Assets
                                </button>
                                <button class="nav-link" id="nav-follower-tab" data-bs-toggle="tab"
                                    data-bs-target="#follower" type="button" role="tab" aria-controls="follower"
                                    aria-selected="false">CoWorking <span class="item-number">231</span>
                                </button>
                                <button class="nav-link" id="nav-activity-tab" data-bs-toggle="tab"
                                    data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
                                    aria-selected="false">
                                    Activity
                                </button>
                                <button class="nav-link" id="nav-following-tab" data-bs-toggle="tab"
                                    data-bs-target="#following" type="button" role="tab" aria-controls="following"
                                    aria-selected="false"> Talk <span class="item-number">145</span>
                                </button>
                                <!--<button class="nav-link" id="nav-wallet-tab" data-bs-toggle="tab"
                                    data-bs-target="#wallet" type="button" role="tab" aria-controls="wallet"
                                    aria-selected="false">My Wallet
                                </button>-->
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Setting
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Editor</a></li>
                                        <li><a class="dropdown-item" href="#">Block user</a></li>
                                    </ul>
                                </div>

                            </div>
                        </nav>

                        <div class="tab-content" id="nav-tabContent" style="display:flex;">
                            
                            <!-- My Asset tab -->
                            <div class="col-xl-9 tab-pane activity-page fade show active" id="allNft" role="tabpanel">
                                
                                    <div class="row">
                                        <div>
                                            <article>
                                                <div class="activity-tab">
                                                    <ul class="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-personal-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-personal"
                                                                type="button" role="tab" aria-controls="pills-personal"
                                                                aria-selected="false">
                                                                <i class="icofont-flask"></i>
                                                                Upload Asset
                                                            </button>
                                                        </li>
                                                        <!--<li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="pills-mentions-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-mentions"
                                                                type="button" role="tab" aria-controls="pills-mentions"
                                                                aria-selected="true"><i class="icofont-flash"></i>
                                                                On Sale
                                                            </button>
                                                        </li>-->
                                                        <!--<li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-favorites-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-favorites"
                                                                type="button" role="tab" aria-controls="pills-favorites"
                                                                aria-selected="false"><i class="icofont-license"></i>
                                                                owned
                                                            </button>
                                                        </li>-->
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-groups-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-groups"
                                                                type="button" role="tab" aria-controls="pills-groups"
                                                                aria-selected="false"><i class="icofont-puzzle"></i>
                                                                Created
                                                            </button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-friends-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-friends"
                                                                type="button" role="tab" aria-controls="pills-friends"
                                                                aria-selected="false"><i class="icofont-library"></i>
                                                                Picked
                                                            </button>
                                                        </li>

                                                        <li class="custom-select">
                                                            <select>
                                                                <option value="1">All</option>
                                                                <option value="2">Recent</option>
                                                                <option value="3">Relevant</option>
                                                                <option value="4">Popular</option>
                                                            </select>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                        <div class="tab-pane fade" id="pills-personal" role="tabpanel"
                                                            aria-labelledby="pills-personal-tab">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <!-- Upload Assets -->
                                                                    <div class="create-nft py-5 px-4">
                                                                        <form class="create-nft-form">
                                                            
                                                                        <!-- upload field -->
                                                                            <div class="upload-item mb-30">
                                                                                <p>FBX,OBJ,GLTF (Max-30mb)</p>
                                                                                <div class="custom-upload">
                                                                                    <div class="file-btn">
                                                                                        <i class="icofont-upload-alt"></i>
                                                                                            Upload a file
                                                                                    </div>
                                                                                    <input type="file">
                                                                                </div>
                                                                            </div>
                                                                            <!-- item name input -->
                                                                            <div
                                                                                class="form-floating item-name-field mb-3">
                                                                                <input type="text" class="form-control"
                                                                                    id="itemNameInput"
                                                                                    placeholder="Item Name">
                                                                                <label for="itemNameInput">
                                                                                    Item Name
                                                                                </label>
                                                                            </div>
                                                                            <!-- item-description -->
                                                                            <div class="form-floating item-desc-field mb-30">
                                                                                <textarea class="form-control"
                                                                                    placeholder="Item Description"
                                                                                    id="itemDesc">
                                                                                </textarea>
                                                                                <label for="itemDesc">
                                                                                    Item Description
                                                                                </label>
                                                                            </div>
                                                                            <!-- item-category -->
                                                                            <div class="item-category-field mb-30">
                                                                                <h4>Select Item Catergory</h4>
                                                                                <!--<ul class="item-cat-list d-flex flex-wrap">
                                                                                    <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Interior </li>
                                                                                    <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Vehicle </li>
                                                                                </ul>-->
                                                                            </div>
                                                                            <!-- item price -->
                                                                            <div class="item-price-field mb-3">
                                                                                <div class="row g-3">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select"
                                                                                                id="selectCrypto"
                                                                                                aria-label="Floating label select">
                                                                                                <option selected> Building & Architecture </option>
                                                                                                <option value="1"> Interior </option>
                                                                                                <option value="2"> Vehicles </option>
                                                                                                <option value="3"> Electronics </option>
                                                                                                <option value="4"> Humans & Characters </option>
                                                                                                <option value="5"> Weapons & Amor </option>
                                                                                                <option value="6"> Food </option>
                                                                                                <option value="7"> Clothes & Accessories </option>
                                                                                                <option value="8"> Mecatronics & Parts </option>
                                                                                                <option value="9"> Anatomy </option>
                                                                                                <option value="10"> Sports </option>
                                                                                                <option value="11"> Animals </option>
                                                                                                <option value="12"> Fantasy & Fiction </option>
                                                                                            </select>
                                                                                            <label for="selectCrypto">Select Currency</label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-3">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select">
                                                                                                <option selected> yes </option>
                                                                                                <option value="1"> no </option>
                                                                                            </select>
                                                                                            <label for="selectCrypto">Texture included</label>
                                                                                            <!--<input type="text"
                                                                                                class="form-control"
                                                                                                id="itemPriceInput"
                                                                                                placeholder="Item Price">
                                                                                            <label
                                                                                                for="itemPriceInput">Item
                                                                                                Price
                                                                                            </label>-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-3">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select">
                                                                                                <option selected> yes </option>
                                                                                                <option value="1"> no </option>
                                                                                            </select>
                                                                                            <label for="selectCrypto">Rig included</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- Royalites, Size & copy -->
                                                                            <div class="item-price-field mb-5">
                                                                                <div class="row g-3 justify-content-center">
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select">
                                                                                                <option selected> blender </option>
                                                                                                <option value="1"> maya </option>
                                                                                                <option value="1"> max </option>
                                                                                                <option value="1"> c4d </option>
                                                                                                <option value="1"> houdini </option>
                                                                                                <option value="1"> cad </option>
                                                                                            </select>
                                                                                            <label for="selectCrypto">Made by</label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <select class="form-select">
                                                                                                <option selected> yes </option>
                                                                                                <option value="1"> no </option>
                                                                                            </select>
                                                                                            <label for="selectCrypto"> Public </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6 col-lg-4">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="itemNumbersInput"
                                                                                                placeholder="License">
                                                                                            <label for="itemNumbersInput">  
                                                                                                License
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- submit button -->
                                                                            <div class="submit-btn-field text-center">
                                                                                <button type="submit">Create Item</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="tab-pane fade mentions-section show active"
                                                            id="pills-mentions" role="tabpanel"
                                                            aria-labelledby="pills-mentions-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item">
                                                                        <div class="nft-inner">
                                                                            
                                                                            <!-- nft top part -->
                                                                            <div class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="assets/images/seller/01.png"
                                                                                                    alt="author-img"></a>
                                                                                        </li>
                                                                                        <li class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied">
                                                                                                <img
                                                                                                    src="assets/images/seller/02.gif"
                                                                                                    alt="author-img"></a>
                                                                                            <h6>
                                                                                                <a href="author.html">Jhon Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li>
                                                                                                <a class="dropdown-item" href="#">
                                                                                                    <span>
                                                                                                    <i class="icofont-warning"></i>
                                                                                                    </span> 
                                                                                                    Report 
                                                                                                </a>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a class="dropdown-item" href="#">
                                                                                                    <span><i class="icofont-reply"></i></span>
                                                                                                    Share
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- nft-bottom part -->
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="assets/images/nft-item/02.jpg"
                                                                                        alt="nft-img">

                                                                                    <!-- nft countdwon -->
                                                                                    <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span class="yellow-color">
                                                                                                0.34 ETH
                                                                                            </span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like">
                                                                                            <i class="icofont-heart"></i>
                                                                                            230
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade" id="pills-favorites" role="tabpanel"
                                                            aria-labelledby="pills-favorites-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item">
                                                                        <div class="nft-inner">
                                                                            <!-- nft top part -->
                                                                            <div class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="assets/images/seller/01.gif"
                                                                                                    alt="author-img"></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="assets/images/seller/01.png"
                                                                                                    alt="author-img"></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li>
                                                                                                <a class="dropdown-item" href="#">
                                                                                                    <span>
                                                                                                        <i class="icofont-warning"></i>
                                                                                                    </span> Report 
                                                                                                </a>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a class="dropdown-item" href="#">
                                                                                                    <span>
                                                                                                        <i class="icofont-reply"></i>
                                                                                                    </span>
                                                                                                    Share
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- nft-bottom part -->
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="assets/images/nft-item/04.jpg"
                                                                                        alt="nft-img">

                                                                                    <!-- nft countdwon -->
                                                                                    <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> -->
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4>
                                                                                        <a href="item-details.html">
                                                                                            Walking On Air
                                                                                        </a>
                                                                                    </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span class="yellow-color">0.34 ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like">
                                                                                            <i class="icofont-heart"></i> 230
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade" id="pills-friends" role="tabpanel"
                                                            aria-labelledby="pills-friends-tab">

                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item">
                                                                        <div class="nft-inner">
                                                                            <!-- nft top part -->
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html">
                                                                                                <img src="assets/images/seller/02.png"
                                                                                                     alt="author-img">
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied">
                                                                                                <img src="assets/images/seller/04.png"
                                                                                                     alt="author-img">
                                                                                            </a>
                                                                                            <h6>
                                                                                                <a href="author.html">Jhon Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#">
                                                                                                    <span>
                                                                                                        <i class="icofont-warning"></i>
                                                                                                    </span> Report 
                                                                                                </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#">
                                                                                                    <span>
                                                                                                        <i class="icofont-reply"></i>
                                                                                                    </span>
                                                                                                    Share
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- nft-bottom part -->
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="assets/images/nft-item/03.gif"
                                                                                        alt="nft-img">

                                                                                    <!-- nft countdwon -->
                                                                                    <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> -->
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4>
                                                                                        <a href="item-details.html">
                                                                                            Walking On Air
                                                                                        </a>
                                                                                    </h4>
                                                                                    <div class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span class="yellow-color">
                                                                                                0.34 ETH
                                                                                            </span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like">
                                                                                            <i class="icofont-heart"></i>
                                                                                            230
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load More</span> </a>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade" id="pills-groups" role="tabpanel"
                                                            aria-labelledby="pills-groups-tab">
                                                            <div class="row justify-content-center gx-3 gy-2">
                                                                <div class="col-lg-4 col-sm-6">
                                                                    <div class="nft-item">
                                                                        <div class="nft-inner">
                                                                            <!-- nft top part -->
                                                                            <div
                                                                                class="nft-item-top d-flex justify-content-between align-items-center">
                                                                                <div class="author-part">
                                                                                    <ul class="author-list d-flex">
                                                                                        <li class="single-author">
                                                                                            <a href="author.html"><img
                                                                                                    src="assets/images/seller/05.png"
                                                                                                    alt="author-img"></a>
                                                                                        </li>
                                                                                        <li
                                                                                            class="single-author d-flex align-items-center">
                                                                                            <a href="author.html"
                                                                                                class="veryfied"><img
                                                                                                    src="assets/images/seller/05.gif"
                                                                                                    alt="author-img"></a>
                                                                                            <h6><a href="author.html">Jhon
                                                                                                    Doe</a>
                                                                                            </h6>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="more-part">
                                                                                    <div class=" dropstart">
                                                                                        <a class=" dropdown-toggle"
                                                                                            href="#" role="button"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                            data-bs-offset="25,0">
                                                                                            <i
                                                                                                class="icofont-flikr"></i>
                                                                                        </a>

                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span>
                                                                                                        <i
                                                                                                            class="icofont-warning"></i>
                                                                                                    </span> Report </a>
                                                                                            </li>
                                                                                            <li><a class="dropdown-item"
                                                                                                    href="#"><span><i
                                                                                                            class="icofont-reply"></i></span>
                                                                                                    Share</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- nft-bottom part -->
                                                                            <div class="nft-item-bottom">
                                                                                <div class="nft-thumb">
                                                                                    <img src="assets/images/nft-item/06.gif"
                                                                                        alt="nft-img">

                                                                                    <!-- nft countdwon -->
                                                                                    <!-- <ul class="nft-countdown count-down"
                                                                                        data-date="July 05, 2022 21:14:01">
                                                                                        <li>
                                                                                            <span
                                                                                                class="days">34</span><span
                                                                                                class="count-txt">D</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="hours">09</span><span
                                                                                                class="count-txt">H</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="minutes">32</span><span
                                                                                                class="count-txt">M</span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span
                                                                                                class="seconds">32</span><span
                                                                                                class="count-txt">S</span>
                                                                                        </li>
                                                                                    </ul> -->
                                                                                </div>
                                                                                <div class="nft-content">
                                                                                    <h4><a href="item-details.html">Walking
                                                                                            On
                                                                                            Air</a> </h4>
                                                                                    <div
                                                                                        class="price-like d-flex justify-content-between align-items-center">
                                                                                        <p class="nft-price">Price:
                                                                                            <span
                                                                                                class="yellow-color">0.34
                                                                                                ETH</span>
                                                                                        </p>
                                                                                        <a href="#" class="nft-like"><i
                                                                                                class="icofont-heart"></i>
                                                                                            230</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <div class="load-btn">
                                                                <a href="#" class="default-btn move-bottom"><span>Load
                                                                        More</span> </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                
                            </div> 

                            <!-- about tab -->
                            <div class="col-xl-9 tab-pane fade" id="about" role="tabpanel" aria-labelledby="nav-about-tab">
                                <div class="row" style="border:1px solid blue">
                                    
                                <article class="visible" id="profile-intro-article">
                                        <div class="info-card mb-3">
                                            <div class="info-card-title">
                                                <h4>About</h4>
                                            </div>
                                            <div class="info-card-content">
                                                <p> ${ user.self_intro } </p>
                                            </div>
                                        </div>
                                        <div class="info-card">
                                            <div class="info-card-title">
                                                <h4>Other Info</h4>
                                            </div>
                                            <div class="info-card-content">
                                                <ul class="info-list">
                                                    <li>
                                                        <p class="info-name">Nick Name</p>
                                                        <p class="info-details"> ${ user.nickName } </p>
                                                    </li>
                                                    <li>
                                                        <p class="info-name">Country</p>
                                                        <p class="info-details"> ${ user.country } </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmPWModal">
                                            Edit
                                        </button>

                                        <!-- Modal -->
                                        <div class="modal fade" id="confirmPWModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog">
                                           
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel" style="color:black;"> Confirm Password </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                                              </div>
                                              <div class="modal-body">
                                                <label style="color:black;">insert password</label>
                                                <input type="text" id="profile-valid-pw-input"/>
                                                <br/>
                                                <span id="profileForm-pw-valid" style="color:tomato;font-size:0.7em;"></span>
                                              </div>
                                              <div class="modal-footer">
                                                <button type="submit"
                                                    onclick="{ (() => {
                                                        let modalEl = document.querySelector('#confirmPWModal');
                                                        let errorEl = document.querySelector('#profileForm-pw-valid');
                                                        let editForm = document.querySelector('#intro-article-form');
                                                        let profile = document.querySelector('#profile-intro-article');
                                                        let newPW = document.querySelector('#profile-valid-pw-input').value;
                                                        window.usrNewPW( newPW, modalEl, errorEl, editForm, profile );
                                                        
                                                        })()
                                                    }"
                                                    class="btn btn-primary" 
                                                    id="profile-pw-valid"
                                                >
                                                    Submit
                                                </button>
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                              </div>
                                            </div>
                                            
                                          </div>
                                        </div>

                                    </article>
                                    <article id="intro-article-form" style="display:none;">
                                        
                                            <div class="input-group">
                                                <span class="input-group-text">My Intro</span>
                                                <textarea class="form-control" id="profile-myIntro-edit" aria-label="With textarea" rows="6" required></textarea>
                                            </div>
                                            <div class="mb-3 profile-edit-form-otherinfo" style="font-size:1.2em; padding:30px 0">
                                                <label class="form-label"> Other Info </label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text">nick name</span>
                                                    <input type="text" id="profile-nickName-edit" class="form-control" placeholder="Nickname" required>
                                                </div>
                                                <div id="nickname-alert" style="color:tomato;"></div>
                                                <select class="form-select" id="profile-nation-edit" aria-label="Default select example" required>
                                                    <option selected> Select Country </option>
                                                    <option value="America">America</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="South Korea">Korea</option>
                                                </select>
                                                <div id="nation-alert" style="color:tomato;"></div>

                                                <div class="row g-3 align-items-center">
                                                    <div class="col-auto">
                                                        <label for="inputPassword6" class="col-form-label">new Password</label>
                                                    </div>
                                                    <div class="col-auto">
                                                        <input type="password" id="newPassword" class="form-control" aria-labelledby="passwordHelpInline" required>
                                                        
                                                    </div>
                                                </div>
                                                <div class="row g-3 align-items-center">
                                                    <div class="col-auto">
                                                        <label for="inputPassword6" class="col-form-label">confirm Password</label>
                                                    </div>
                                                    <div class="col-auto">
                                                        <input type="password" id="confirmPassword" class="form-control" aria-labelledby="passwordHelpInline" required>
                                                        <div class="invalid-feedback02" style="color:tomato; font-size:.8em;"> </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="submit-btn-field text-center">
                                                <button type="submit" 
                                                    id="profile-edit-submitBtn" 
                                                    onclick="{ (() => {
                                                        
                                                        let myIntro = document.querySelector('#profile-myIntro-edit').value;
                                                        let nickName = document.querySelector('#profile-nickName-edit').value;
                                                        let country = document.querySelector('#profile-nation-edit').value;
                                                        let newPW = document.querySelector('#newPassword').value;
                                                        let confirmPW = document.querySelector('#confirmPassword').value;
                                                        let originForm = document.querySelector('#profile-intro-article');

                                                        console.log('nation: ' + country );
                                                        if( nickName === '' ) {
                                                            $('#nickname-alert').empty();
                                                            $('#nickname-alert').append('make your nickName');
                                                        }
                                                        if( country === 'Select Country' ) {
                                                            $('#nation-alert').empty();
                                                            $('#nation-alert').append('select your country');
                                                        }
                                                        
                                                        if( newPW !== confirmPW ) {
                                                            console.log('비밀번호 불일치');
                                                            $('.invalid-feedback02').empty();
                                                            $('.invalid-feedback02').append('<span> password not matched </span>')
                                                        } else {
                                                            console.log('Edit 제출');
                                                            let editForm = $('#intro-article-form').remove();
                                                            $('#nickname-alert').empty();
                                                            $('#nation-alert').empty();
                                                            $('.invalid-feedback02').empty();
                                                            window.profileEditFunc( myIntro, nickName, country, newPW, originForm )
                                                        }
                                                        
                                                    })() }" 
                                                    style="padding:10px 25px; margin: 20px 0"
                                                >   Edit
                                                </button>
                                            </div>
                                        
                                    </article>     
                                    
                                </div>
                            </div>

                            <!-- activity Tab -->
                            <div class="col-xl-9 tab-pane fade" id="activity" role="tabpanel" aria-labelledby="nav-activity-tab">
                                <div>
                                    <div class="row">
                                        <div>
                                            <article>
                                                <h4 class="h4-title">Author's Activity</h4>
                                                <div class="row gy-3">
                                                    <div class="col-12">
                                                        <div class="activity-item">
                                                            <div
                                                                class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                                <div class="lab-thumb me-3 me-md-4">
                                                                    <img src="assets/images/activity/01.gif" alt="img">
                                                                </div>
                                                                <div class="lab-content">
                                                                    <h4><a href="nft-single.html">Gold digger x</a>
                                                                    </h4>
                                                                    <p class="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                                        #44/44 was put up for sale for
                                                                        <b>0.0991
                                                                            ETH</b>
                                                                    </p>
                                                                    <p class="user-id">By: <a
                                                                            href="author.html">@rasselmrh</a></p>
                                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   

                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- CoWorking Tab -->
                            <div class="col-xl-9 tab-pane fade" id="follower" role="tabpanel" aria-labelledby="nav-follower-tab">
                                <div>
                                    <div class="row">
                                        <div>
                                            <div class="follow-wrapper">
                                                <h4 class="h4-title">Coworking</h4>
                                                <div class="row g-3">
                                                    <div class="col-lg-6">
                                                        <div class="seller-item">
                                                            <div class="seller-inner">
                                                                <div class="seller-part">
                                                                    <p class="assets-number">21</p>
                                                                    <div class="assets-owner">
                                                                        <div class="owner-thumb veryfied">
                                                                            <a href="author.html"><img
                                                                                    src="assets/images/seller/02.png"
                                                                                    alt="seller-img"></a>
                                                                        </div>
                                                                        <div class="owner-content">
                                                                            <h5><a href="author.html">Andrea Guido</a>
                                                                            </h5>
                                                                            <p>$23,002.98</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="follow-part">
                                                                    <button class="btn-follow follow-state">
                                                                        <span class="follow"><i
                                                                                class="fa fa-user-plus"></i>
                                                                            Follow</span>
                                                                        <span class="unfollow">Unfollow</span>
                                                                        <span class="following">Following</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                                <div class="load-btn">
                                                    <a href="#" class="default-btn move-bottom"><span>Load More</span> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Talk Tab -->
                            <div class="col-xl-9 tab-pane fade" id="following" role="tabpanel"
                                aria-labelledby="nav-following-tab">
                                <div class="row">
                                    <div>
                                        <div class="follow-wrapper">
                                            <h4 class="h4-title"> Talk </h4>
                                            <div class="row g-3">
                                                <div class="col-lg-6">
                                                    <div class="seller-item">
                                                        <div class="seller-inner">
                                                            <div class="seller-part">
                                                                <p class="assets-number">21</p>
                                                                <div class="assets-owner">
                                                                    <div class="owner-thumb veryfied">
                                                                        <a href="author.html"><img
                                                                                src="assets/images/seller/02.png"
                                                                                alt="seller-img"></a>
                                                                    </div>
                                                                    <div class="owner-content">
                                                                        <h5><a href="author.html">Andrea Guido</a>
                                                                        </h5>
                                                                        <p>$23,002.98</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="follow-part activefollow">
                                                                <button class="btn-follow follow-state">
                                                                    <span class="follow"><i class="fa fa-user-plus"></i>
                                                                        Follow</span>
                                                                    <span class="unfollow">Unfollow</span>
                                                                    <span class="following">Following</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="load-btn">
                                                <a href="#" class="default-btn move-bottom"><span>Load More</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Aside Part -->
                            <div class="col-xl-3" style="padding-left:15px;">
                                <aside class="mt-5 mt-xl-0">
                                    <div class="profile-widget search-widget">
                                        <div class="widget-inner">
                                            <div class="widget-title">
                                                <h5>Search NFT</h5>
                                            </div>
                                            <div class="widget-content">
                                                <p>Search from best Rarest NFT collections</p>
                                                <div class="form-floating nft-search-input">
                                                    <input type="text" class="form-control"
                                                        placeholder="Search NFT">
                                                    <label>Search NFT</label>
                                                    <button type="button"> <i
                                                            class="icofont-search-1"></i></button>
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
                            
                        </div> <!-- tab-content (inner content) -->

                    </div> <!-- profile details -->

                </div>
            </div>
        </div>
    `
        })
    
    return container

}

export default MypageGUI