
let MainCSS = () => {

    return `

    /*--------------------------------*/
    /* Library
    /*--------------------------------*/
    @import url('css/bootstrap.min.css'); 
    @import url('css/owl.carousel.min.css');
    @import url('css/owl.transitions.css');
    @import url('css/slick-slider.css');
    @import url('css/animate.min.css');
    @import url('css/magnific-popup.css');
    @import url('css/meanmenu.min.css');
    @import url('css/flaticon.css');
    @import url('css/font-awesome.min.css');
    @import url('css/themify-icons.css');
    @import url('css/responsive.css');

    
    /*----------------------------------------*/
    /*  1. Theme default CSS
    /*----------------------------------------*/
    body {
        font-family: 'Barlow', sans-serif;
        font-weight: normal;
        font-style: normal;
        color: #d9dbed;
        font-size: 15px;
    }
    
    .img,img {
        max-width: 100%;
        transition: all 0.3s ease-out 0s;
    }
    
    .fix {
        overflow: hidden
    }
    
    a,
    .button {
        -webkit-transition: all 0.3s ease-out 0s;
        -moz-transition: all 0.3s ease-out 0s;
        -ms-transition: all 0.3s ease-out 0s;
        -o-transition: all 0.3s ease-out 0s;
        transition: all 0.3s ease-out 0s;
    }
    
    a:focus,
    .button:focus {
        text-decoration: none;
        outline: none;
    }
    
    a:focus,
    a:hover{
        color: #F0C83C;
        text-decoration: none;
    }
    
    a,
    button {
        color: #F0C83C;
        outline: medium none;
        text-decoration: none;
    }
    button{
        cursor: pointer;
        transition: .3s;
    }
    button:focus,
    input:focus,
    input:focus,
    textarea,
    textarea:focus {
        outline: 0
    }
    
    .uppercase {
        text-transform: uppercase;
    }
    
    .capitalize {
        text-transform: capitalize;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Philosopher', sans-serif;
        color: #fff;
        margin-top: 0px;
        font-weight: 500;
        margin-bottom: 15px;
    }
    
    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
        color: inherit;
    }
    
    h1 {
        font-size: 60px;
        line-height: 66px;
    }
    
    h2 {
        font-size: 40px;
        line-height: 46px;
    }
    
    h3 {
        font-size: 32px;
        line-height: 40px;
    }
    
    h4 {
        font-size: 24px;
        line-height: 32px;
    }
    
    h5 {
        font-size: 20px;
        line-height: 28px;
    }
    
    h6 {
        font-size: 16px;
        line-height: 28px;
    }
    
    ul {
        margin: 0px;
        padding: 0px;
    }
    
    li {
        list-style: none
    }
    
    p {
        font-size: 15px;
        font-weight: normal;
        line-height: 28px;
        color: #d9dbed;
        margin-bottom: 15px;
    }
    
    hr {
        border-bottom: 1px solid #eceff8;
        border-top: 0 none;
        margin: 30px 0;
        padding: 0;
    }
    
    label {
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
    }
    
    *::-moz-selection {
        background: #F7B28B;
        color: #fff;
        text-shadow: none;
    }
    
    ::-moz-selection {
        background: #444;
        color: #fff;
        text-shadow: none;
    }
    
    ::selection {
        background: #444;
        color: #fff;
        text-shadow: none;
    }
    
    *::-moz-placeholder {
        color: #555555;
        font-size: 14px;
        opacity: 1;
    }
    
    *::placeholder {
        color: #555555;
        font-size: 14px;
        opacity: 1;
    }
    .center-headline{
        padding-bottom: 30px;
    }
    .area-padding{
        padding: 120px 0px
    }
    .area-padding-2{
        padding: 120px 0px 90px
    }
    .area-padding-3{
        padding:120px 0px 0px;
    }
    .area-padding-5{
        padding:120px 0px 30px;
    }
    .area-padding-4{
        padding:0px 0px 120px
    }
    .section-headline{
        padding-bottom: 20px;
    }
    .section-headline h2 {
        color: #fff;
        font-size: 44px;
        line-height: 50px;
        text-transform: uppercase;
        position: relative;
        display: block;
        font-weight: 600;
    }
    .section-left-headline h2::after{
        left:0;
        right: auto;
        margin: inherit;
    }
    .section-bg-top .section-headline h2::after{
        bottom: -45px;
    }
    .white-headline h2{
       color:#fff; 
    }
    .white-headline p{
       color:#d9dbed; 
    }
    .section-headline p {
        color:#d9dbed; 
    }
    .mar-rt{
        margin-right: 50px;
    }
    .mar-lt{
        margin-left: 50px;
    }
    .separator {
        border-bottom: 2px solid #eae7ff
    }
    .bg-color{
       background:#080A30;
    }
    .bg-color-2{
       background:#05082F;
    }
    .bg-color-3{
       background:#262B5F;
    }
    .area-80 {
        padding: 80px 0px;
    }
    .bread-pd {
        padding: 200px 0px 10px;
    }
    .hd-btn {
        color: #fff;
        padding: 9px 25px;
        display: inline-block;
        text-transform: uppercase;
        font-size: 15px;
        border-radius: 3px;
    }
    .title-up {
        display: inline-block;
        text-transform: uppercase;
        font-size: 15px;
        margin-bottom: 10px;
        color: #F0C83C;
        background: #171B31;
        border: 1px solid #261E6E;
        padding: 3px 10px 1px;
        border-radius: 2px;
        font-family: 'Philosopher', sans-serif;
    }
    .f-right{
        float:right;
    }
    .f-left{
        float:left;
    }
    div#preloader { 
        position: fixed;
        left: 0; 
        top: 0; 
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: visible;
        background: #1A1E4A url('img/logo/preloader.gif') no-repeat center center;
    }
    .right-headline{
        margin-left: 40px;
        margin-right: 20px;
    }
    .reward-inner {
        margin-top: 20px;
    }
    .payment-wrapper{
        margin-top: 30px;
    }
    .reward-wrapper{
        margin-top: 60px;
    }
    .section-bg-top{
        margin-bottom: 30px;
    }
    .mr-top{
        margin-top: 30px;
    }
    .right-mar{
        margin-right: 40px;
    }

    /*----------------------------------------*/
    /*  3-1. Intro Area
    /*----------------------------------------*/
    
    #menu {
        display: flex;
    }
    
    
    /*----------------------------------------*/
    /*  3. Intro Area
    /*----------------------------------------*/
    .intro-area{
        position: relative;
        overflow: hidden;
    }
    .bg-wrapper{
        position: relative;
        z-index: 1;
    }
    .bg-wrapper::after{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        background: url(img/slider/bg1.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top left;
        content:"";
        opacity: 0.95;
    }
    .intro-content {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 0;
        width: 100%;
        height: auto;
        margin-top: -130px;
    }
    .slider-content {
        position: relative;
        z-index: 1;
    }
    slider-content::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        animation-name: bounce;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 700px;
        height: 400px;
        z-index: 99;
    }
    .title-2 {
        color: #fff;
        font-size: 76px;
        font-weight: 700;
        line-height: 90px;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .slide-images-inner {
        margin-left: 120px;
    }
    .slide-images {
        text-align: center;
    }
    .slide-top-image img {
        float: right;
        margin-left: 30px;
    }
    .slide-top-image img  {
        position: relative;
        z-index: 5;
    }
    .layer-3 {
        margin-top: 30px;
    }
    .slide-video-content{
        text-align: center;
        z-index: 9;
    }
    /*----------------------------------------*/
    /*  4. Wellcome Service Area 
    /*----------------------------------------*/
    .well-services {
        margin: 0px 10px;
        background: #1A1E4A;
        padding: 30px;
        overflow: hidden;
        border-radius:4px;
    }
    .down-item{
        margin-top: 50px;
    }
    .wel-under-inner {
        border-radius: 4px;
        width: 90%;
        margin: 50px auto 0px;
    }
    .small-btn {
        margin-left: 30px;
        color: #fff;
        font-size: 14px;
        position: relative;
    }
    .small-btn::after {
        position: absolute;
        right: -20px;
        top: 1px;
        content: "\e628";
        color: #fff;
        font-family: themify;
        font-size: 13px;
        transition: 0.5s;
    }
    .small-btn:hover::after{
        color:#F0C83C;
        transition: 0.5s;
        right: -30px;
    }
    
    /*----------------------------------------*/
    /*  4. About Area 
    /*----------------------------------------*/
    .about-area {
        position: relative;
    }
    .center-bg{
        position: relative;
        background: url(img/background/bg2.jpg);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        z-index: 1;
        padding: 50px;
        border-radius: 20px;
    }
    .center-bg::after {
        position: absolute;
        content: "";
        background:#05082F;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        opacity: 0.85;
    }
    .about-content{
        margin-left: 30px;
    }
    .about-images {
        width: 100%;
        height: 100%;
        min-height: 380px;
    }
    .about-top-image{
        position: relative;
        z-index: 1;
    }
    .about-top-image img {
        transition: 0.5s;
    }
    .ab-image-2 {
        position: relative;
        top: 120px;
        left: 40px;
    }
    .shape-bg {
        height: 280px;
        width: 280px;
        background: transparent;
        border-radius: 50%;
        top: 30px;
        left: 100px;
        z-index: -1;
        position: absolute;
        animation: bounce 1s infinite alternate;
        border: 3px dotted #999;
    }
    .about-content p {
        color: #d9dbed;
        margin-bottom: 0;
    }
    .about-company {
        margin-top: 20px;
        display: block;
        overflow: hidden;
    }
    .single-about {
        width: 50%;
        float: left;
    }
    .ab-text-one, .ab-text-two {
        background: #1A1E4A;
        border: 1px solid #1A1E4A;
    }
    .ab-text-one {
        margin-right: 30px;
    }
    .about-icon {
        margin-right: 20px;
        display: inline-block;
        width: 60px;
        height: 60px;
    }
    .ab-text-one, .ab-text-two {
        padding: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-radius: 3px;
        color: #fff;
    }
    .ab-text {
        font-size: 18px;
        padding-left: 0px;
        display: inline-block;
        text-transform: uppercase;
        font-family: 'Philosopher', sans-serif;
    }
    .bg-dark-2 .ab-text {
        color: #fff;
    }
    /*--------------------------------*/
    /* 5. services area
    /*--------------------------------*/
    .service-images-inner{
        position: relative;
    }
    .services-image{
        width: 70%;
        margin: 0 auto;
    }
    .row.service-wrapper {
        position: absolute;
        top: 20px;
        left: 0;
    }
    .single-services {
        padding: 20px 0px;
        position: relative;
    }
    .single-services{
        position: relative;
        background: url(img/background/ser-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .single-services {
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 30px;
        width: 50%;
    }
    .wel-content h4:hover {
        color:#F0C83C;
        transition: 0.4s;
    }
    .right-services{
        float: right;
    }
    .big-icon img {
        display: inline-block;
    }
    .services-img {
        margin-bottom: 20px;
    }
    .big-img img {
        border-radius: 5px;
    }
    .wel-content p {
        font-size: 15px;
        margin-bottom: 0px;
    }
    .well-service-text {
        margin-right: 40px;
    }
    .wel-content a h4 {
        font-weight: 400;
        transition: 0.4s;
    }
    .service-btn {
        color: #fff;
        padding: 10px;
        display: inline-block;
        text-transform: uppercase;
        font-size: 24px;
        background: #00B8FE;
        border-radius: 3px;
        border: 1px solid #00B8FE;
        line-height: 24px;
        margin-top: 15px;
    }
    .service-btn:hover{
        background: transparent;
        color:#0bfffc;
        transition: all 0.4s ease 0s;
        border: 1px solid #0bfffc;
    }
    /*--------------------------------*/
    /*  6. animation Area
    /*--------------------------------*/
    .anime-area {
        position: relative;
        background: url(img/background/bg3.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        z-index: 1;
    }
    .video-image {
        border-radius: 5px;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .video-image img {
        border-radius: 5px;
    }
    .video-content {
        display: inline-block;
    }
    .image-video-content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        margin-top:-35px;
        text-align: center;
        z-index: 9;
    }
    .video-image::after {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        right: 0;
        width: 10%;
        height: 10%;
        background: rgba(8,10,48,0.80);
        transition: 0.4s;
        margin: 0 auto;
        opacity: 0;
    }
    .animation-name-inner {
        position: relative;
        left: -30%;
        background: #131740;
        box-shadow: 0 5px 25px rgb(0 0 0 / 10%);
        padding: 40px;
        border-radius: 5px;
        overflow: hidden;
        z-index: 6;
        border: 2px solid #131740;
        position: relative;
    }
    .image-video-content .video-zone {
        border-radius: 100%;
        display: inline-block;
        height: 60px;
        width: 60px;
        transition: 0.4s;
        border: 5px solid #F0C83C;
        position: relative;
        background: #F17C3A;
    }
    .slide-video-content .video-zone:hover,
    .image-video-content .video-zone:hover{
        background: #F0C83C;
        border: 5px solid #F17C3A;
        transition: 0.4s;
    }
    .slide-video-content .video-zone::before,
    .image-video-content .video-zone::before {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: popcircle;
        animation-name: popcircle;
        border: 1px solid #fff;
        border-radius: 100px;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .slide-video-content .video-zone i,
    .image-video-content .video-zone i {
        color: #fff;
        font-size: 20px;
        line-height: 48px;
        transition: 0.4s;
    }
    .slide-video-content .video-zone:hover i,
    .image-video-content .video-zone:hover i {
        color: #fff;
        transition: 0.4s;
    }
    .details-content h3 {
        margin-bottom: 20px;
    }
    .anime-meta {
        margin-bottom: 10px;
    }
    .anime-meta ul {
        display: flex;
        flex-wrap: wrap;
    }
    .anime-meta ul li {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        margin-right: 15px;
    }
    .anime-meta ul li.anime-quality > span {
        font-size: 11px;
        text-transform: uppercase;
        color: #333;
        background: #F0C83C;
        font-weight: 700;
        padding: 7px 11px;
        line-height: 1;
    }
    .wel-service-head{
        margin-bottom: 20px;
    }
    .anime-meta ul li.anime-quality > span:last-child {
        background: transparent;
        color: #fff;
        margin-left: 9px;
        border: 1px solid #F0C83C;
        padding: 5px 10px;
    }
    .anime-meta ul li.anime-cate > a {
        font-size: 14px;
        font-weight: 500;
        color: #e3dfdf;
    }
    .anime-meta ul li.anime-cate > a + a {
        margin-left: 5px;
    }
    .anime-time span i {
        margin-right: 5px;
        color: #fff;
    }
    .anime-share ul {
        display: flex;
    }
    .anime-share ul li {
        display: inline-block;
        border: 1px solid #fff;
        padding: 10px;
        width: 70px;
        height: 100%;
        min-height: 70px;
        text-align: center;
    }
    .anime-share ul li.share {
        margin-right: 25px;
        position: relative;
        text-align: center;
        padding: 10px;
    }
    .anime-share ul li.share a {
        display: block;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        margin-top: 4px;
    }
    .anime-share ul li.share a i {
        display: block;
        margin-top: 5px;
        padding-top: 5px;
        font-size: 16px;
        color: #fff;
        border-top: 1px solid #F0C83C;
    }
    .anime-rate span {
        display: block;
        border-top: 1px solid #F0C83C;
        padding-top: 2px;
        color: #fff;
        margin-top: 5px;
    }
    .anime-share ul li.anime-rate {
        width: 70px;
        height: 70px;
        color:#fff;
    }
    .anime-share {
        margin-top: 25px;
    }
    .anime-share ul li.per-view{
        width: 70px;
        height: 70px;
        margin-right: 20px;
        color:#fff;
    }
    .per-view span {
        display: block;
        border-top: 1px solid #F0C83C;
        color: #fff;
        margin-top:3px;
        padding-top:3px;
    }
    .film-carousel.owl-carousel .owl-nav div.owl-prev, 
    .film-carousel.owl-carousel .owl-nav div.owl-next {
        color: #fff;
        font-size: 18px;
        position: absolute;
        top: 0px;
        text-align: center;
        line-height: 50px;
        width: 48px;
        height:48px;
        border-radius: 50px;
        background: #1A1E4A;
    }
    .film-carousel.owl-carousel .owl-nav div.owl-prev {
        right:20%;
        top: 38%;
        transition: 0.4s;
    }
    .film-carousel.owl-carousel .owl-nav div.owl-next {
        right:20%;
        top: 52%;
        transition: 0.4s;
    }
    .film-carousel.owl-carousel:hover .owl-nav div.owl-next:hover,
    .film-carousel.owl-carousel:hover .owl-nav div.owl-prev:hover{
        color:#363232;
        border: 1px solid #F0C83C;
        background:#F0C83C;
    }
    .film-inner .video-content .video-zone {
        border-radius: 100%;
        display: inline-block;
        height: 80px;
        width: 80px;
        transition: 0.4s;
        border: 9px solid #F0C83C;
        position: relative;
        background: #F17C3A;
        line-height: 74px;
    }
    .film-inner .video-content .video-zone:hover {
        background: #F0C83C;
        border: 9px solid #F17C3A;
        transition: 0.4s;
    }
    .film-inner .video-content .video-zone i {
        color: #fff;
        font-size: 30px;
        line-height: 54px;
        transition: 0.4s;
    }
    /*----------------------------------------*/
    /* 10.Counter Area
    /*----------------------------------------*/
    .counter-area .counter-center {
        background: #131740;
        z-index: 4;
    }
    .counter-center{
        border-radius: 4px;
    }
    .single-fun {
        display: flex;
        align-items: center;
        background: #131740;
        padding: 15px 30px;
        position: relative;
        margin: 15px 0px;
        overflow: hidden;
        border-right: 1px solid #B817D5;
    }
    .last-item{
        border-right: none;
    }
    .fun-icon img {
        width: 70px;
        height: 70px;
    }
    .single-fun:hover .fun-icon .hide-icon{
        opacity: 0.7;
        top:0;
        right: 0;
        transition: 0.5s;
    }
    .fun_text {
        position: relative;
    }
    .fun_text span {
        font-family: 'Philosopher', sans-serif;
        display: block;
        font-size: 40px;
        font-weight: bold;
        line-height: 40px;
        color: #fff;
    }
    .fun_text > h5 {
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        margin-top: 10px;
        display: block;
        margin-bottom: 0;
    }
    .fun-icon {
        margin-right: 20px;
    }
    /*----------------------------------------*/
    /*  8. Pricing area css
    /*----------------------------------------*/
    .table-list {
        padding: 40px;
        border-radius: 4px;
        margin-bottom: 30px;
        transition: all 0.5s ease 0s;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .table-list{
        position: relative;
        background: url(img/background/price-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .price-image {
        width: 50%;
    }
    .price-image img {
        border-radius: 4px;
    }
    .price-details {
        width: 50%;
        padding-left: 40px;
    }
    .top-price-inner h3 {
        text-transform: capitalize;
        margin-bottom: 10px;
        font-size: 30px;
    }
    .users {
        text-transform: uppercase;
        font-size: 13px;
    }
    .dolar {
        font-size: 24px;
        margin-right: 5px;
        position: relative;
        top: -11px;
    }
    .prices {
        font-size: 40px;
        padding-right: 10px;
        color:#F0C83C;
    }
    .top-price-inner{
        padding-bottom: 30px;
        border-bottom: 1px solid #B817D5;
    }
    .work-list {
        padding-left: 30px;
        margin-top: 20px;
    }
    .table-list ol li {
        padding: 10px 0px;
        text-align: left;
        font-size: 16px;
    }
    .table-list li.check{
        position: relative;
    }
    .table-list li.check::before {
        content: "\e64c";
        font-family: themify;
        font-size: 13px;
        position: absolute;
        left: -30px;
        top: 15px;
        color: #F0C83C;
    }
    .active-table.table-list li.check.cross::before,
    .table-list li.check.cross::before {
        content: "\e646";
        font-family: themify;
        color: #FF5B5B;
        font-size: 13px;
    }
    .price-btn-inner {
        display: block;
        margin-top: 15px;
    }
    .price-btn {
        text-transform: capitalize;
        transition: all 0.4s ease 0s;
        border-radius: 2px;
        padding: 8px 20px;
        font-size: 15px;
        background: #F0C83C;
        color: #333;
        border: 1px solid #F0C83C;
    }
    .price-btn:hover{
        background: transparent;
        color:#F0C83C;
        transition: all 0.4s ease 0s;
        border: 1px solid #F0C83C;
    }
    .table-list ol {
        list-style: outside none none;
        margin: 0;
        padding: 0;
        width: 50%;
        float: left;
    }
    .base {
        position: absolute;
        right: -48px;
        top: 24px;
        background: #B817D5;
        width: 180px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #fff;
        transform: rotate(45deg);
        z-index: 2;
        text-transform: uppercase;
        font-size: 15px;
        font-family: 'Philosopher', sans-serif;
    }
    .active-table .tabil-list-warp{
        background: #363232;
    }
    .active-table .top-price-inner h3{
        color:#fff;
    }
    .active-table .users,
    .active-table ol li{
        color:#f9f9f9;
    }
    /*----------------------------------------*/
    /*  9. Testimonial area
    /*----------------------------------------*/
    .review-area {
        background: url(img/background/bg4.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: scroll;
        position: relative;
        z-index: 1;
    }
    .review-area::after {
        background: rgba(5,8,47,0.25) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
    .review-inner {
        text-align: center;
        margin-right: 80px;
    }
    .review-center-bg{
        background: #131740;
        padding: 80px 50px;
        border-radius: 4px;
    }
    .review-images {
        display: block;
        position: relative;
        padding: 120px 0px;
    }
    .review-center-img img {
        width: 150px;
        height: auto;
        margin: auto;
        border-radius: 50%;
        transform: rotate(5deg);
        border: 2px solid #0bfffc;
    }
    .review-img-1,
    .review-img-2,
    .review-img-3,
    .review-img-4{
        position: absolute;
        width: 100px;
        height:auto; 
        border-radius: 50px;
        transform: rotate(5deg);
        border: 2px solid #0bfffc;
    }
    .review-img-1{
        left:10%;
        top:0;
    }
    .review-img-2{
        right:10%;
        top:0;
    }
    .review-img-3{
        left:10%;
        bottom:0;
    }
    .review-img-4{
        right:10%;
        bottom:0;
    }
    .review-images img:hover{
      transform: scale(1.1);
        transition: 0.5s; 
    }
    .single-testi {
        margin: 0px 0px 30px;
    }
    .clients-text {
        padding: 30px 30px;
        position: relative;
        background-color: #1A1E4A;
        border:1px solid #1A1E4A;
        border-radius: 4px;
    }
    .testi-img {
        position: relative;
        margin-top: 20px;
        display: block;
        overflow: hidden;
    }
    .testi-img img {
        max-width: 80px;
        height: auto;
        border-radius: 50px;
        border: 1px solid #ccc;
        float: left;
        margin-right: 20px;
    }
    .reviews-content {
        overflow: hidden;
        background: rgba(10,6,83,0.99);
        padding: 110px 50px 120px;
    }
    .active.center .single-testi .clients-text{
        border: 1px solid #0bfffc;
        background: #131740;
    }
    .testi-text h4 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 0px; 
    }
    .active.center .single-testi .testi-text p,
    .active.center .single-testi .guest-rev,
    .active.center .single-testi .testi-text h4{
        color:#fff;
    }
    .guest-rev {
        font-weight: 400;
        color: #ddd;
    }
    .testi-text p {
        margin-bottom: 0px;
    }
    .client-rating {
        margin-bottom: 15px;
    }
    .testi-text span a{
        color:#E21B1B;
    }
    .testi-text h5 {
        color: #6a7d91;
        font-size: 20px;
    }
    .client-rating a {
        display: inline-block;
        color: #fec731;
        font-size: 20px;
        padding: 0px 5px 0px 0px;
    }
    .review-carousel.owl-carousel .owl-dots {
        bottom: 0px;
        display: block;
        right: 34%;
        position: absolute;
        width: 200px;
        height: 20px;
        text-align: center;
        padding: 10px;
    }
    .review-carousel.owl-carousel .owl-dots div.owl-dot {
        display:inline-block;
        margin:0px 5px;
    }
    .review-carousel.owl-carousel .owl-dots div.owl-dot > span {
        background: #fff none repeat scroll 0 0;
        display: inline-block;
        height:6px;
        width: 10px;
        -moz-transition: 0.4s;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        -ms-transition: 0.4s;
        transition: 0.4s;
    }
    .review-carousel.owl-carousel .owl-dots div.owl-dot.active span {
        background: #F0C83C;
        width: 20px;
        height:6px;
        transition: 0.4s;
    }
    /*----------------------------------------*/
    /*  10. Team Area css
    /*----------------------------------------*/
    .single-member {
        position: relative;
        overflow: hidden;
        margin-bottom: 30px;
        z-index: 1;
    }
    .team-hover {
        padding: 15px 0 0px;
        text-align: center;
        transition: all 0.4s ease 0s;
    }
    .single-member .team-img {
        display: block;
        position: relative;
    }
    .single-member .team-img a {
        display: block;
    }
    .single-member .team-img img {
        border-radius: 4px;
    }
    .team-content {
        position: absolute;
        top: 70%;
        content: "";
        left: 0;
        right: 0;
        transition: 0.5s;
        padding: 20px 20px;
        width: 100%;
        height:100%;
    }
    .team-content h4 a {
        color: #fff;
        position: relative;
        z-index: 1;
    }
    .team-content h4 a::after {
        position: absolute;
        content: "";
        background: #F1C83C;
        width: 40px;
        height: 40px;
        left: -30px;
        top: -15px;
        border-radius: 50%;
        z-index: -1;
        opacity: 0.8;
        transition: 0.5s;
    }
    .team-content p {
        margin-bottom: 0;
        color: #d9dbed;
    }
    .team-content h4 {
        font-size: 16px;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .team-content .social-icon{
      margin-top: 15px;
         opacity: 0;
    }
    .social-icon li{
        display: inline-block;
        margin: 0px 2px;
    }
    .social-icon li a {
        display: inline-block;
        width: 34px;
        height: 34px;
        border: 1px solid #F0C83C;
        color: #333;
        border-radius:2px;
        font-size: 18px;
        text-align: center;
        line-height: 34px;
        background: #F0C83C;
    }
    .social-icon li a:hover{
        border:1px solid #F0C83C;
        color:#F0C83C;
        background:transparent;
    }
    .single-member .team-img::after{
        background: url(img/team/team.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        left: 0;
        bottom:0;
        transition: 0.5s;
        box-shadow: 2px 2px 20px #ddd;
        opacity: 0.99;
    }
    .single-member .team-img::before{
        background: rgba(19,23,64,0.99);
        width: 100%;
        height: 0%;
        position: absolute;
        content: "";
        left: 0;
        top:0;
        transition: 0.5s;
        box-shadow: 2px 2px 20px #ddd;
        opacity: 0.95;
    }
    .single-member:hover .team-img::after{
        height: 0%;
        transition: 0.5s;
        bottom:0px;
    }
    .single-member:hover .team-img::before{
        height: 100%;
        transition: 0.5s;
    }
    .single-member:hover .team-content .social-icon{
         opacity: 1;
    }
    .single-member:hover .team-content {
        opacity: 1;
         top: 45%;
        transition: 0.5s;
        background: transparent;
    }
    .single-member:hover .team-content h4 a::after {
        left: -15px;
        top: -10px;
        transition: 0.5s;
    }
    /*----------------------------------------*/
    /*  11. Blog Area
    /*----------------------------------------*/
    .single-blog {
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
        background: #1A1E4A;
        padding: 20px 20px 10px 20px;
        border-radius: 4px;
        z-index: 1;
    }
    .blog-content {
        padding: 30px 20px 10px;
        border-radius: 4px;
        background: #1A1E4A;
    }
    .blog-content a h4 {
        font-size: 22px;
        line-height: 34px;
        transition: 0.4s;
    }
    .admin-type i,
    .comments-type i{
        color: #F0C83C;
        margin-right: 5px;
    }
    .blog-content p {
        line-height: 28px;
         transition: 0.4s;
    }
    .single-blog:hover .blog-content a h4:hover{
        color:#F0C83C;
        transition: 0.4s;
    }
    .image-scale {
        display: block;
        transition: 0.5s;
        position: relative;
    }
    .blog-item-date {
        position: absolute;
        bottom: -20px;
        background: #F0C83C;
        right: 20px;
        text-align: center;
        padding: 8px 20px;
        border-radius: 3px;
    }
    .date-type {
        display: inline-block;
        font-size: 16px;
        color:#333;
    }
    .years-type {
        font-size: 16px;
        color:#333;
    }
    .single-blog:hover .image-scale {
        transition: 0.9s;
    }
    .blog-meta span {
        color: #ddd;
        font-size: 16px;
        font-weight: 400;
        padding-right: 10px;
    }
    .blog-meta {
        margin-bottom: 15px;
    }
    .blog-btn {
        color: #fff;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        transition: all 0.4s ease 0s;
        position: relative;
    }
    .blog-btn::after {
        position: absolute;
        right: -20px;
        top: 3px;
        content: "\e628";
        color: #fff;
        font-family: themify;
        font-size: 14px;
        transition: 0.5s;
    }
    .single-blog:hover .blog-btn:hover {
        background: transparent;
        color:#00B8FE;
        transition: 0.4s;
    }
    .single-blog:hover .blog-content {
        background:#1A1E4A;
        transition: 0.4s;
    }
    .single-blog:hover .blog-content a h4,
    .single-blog:hover .blog-meta span{
        color:#fff;
        transition: 0.4s;
    }
    .single-blog:hover .blog-btn::after{
        color:#fff;
        transition: 0.5s;
    }
    .single-blog:hover .blog-btn:hover::after{
        color:#00B8FE;
        transition: 0.4s;
        right: -30px;
    }
    /*----------------------------------------
     12. Quote Area
    ----------------------------------------*/
    .quote-area{
       position: relative;
    }
    .quote-center {
        position: relative;
        top: 70px;
        z-index: 3;
    }
    .quote-all {
        padding: 80px 40px 80px 40px;
        background: #131740;
        margin-right: -17px;
        position: relative;
        border: 1px solid #131740;
        position: relative;
        z-index: 100000;
        top: 0;
        margin-left: 50px;
    }
    .quote-area #sub_contactForm input,
    .quote-area #contactForm input {
        border: none;
        height: 54px;
        margin-bottom: 20px;
        border:1px solid rgba(255,255,255,0.4);
        border-radius: 3px;
        color: #fff;
        background: transparent;
    }
    .quote-area #contactForm input.last-part{
        margin-bottom: 0px;
    }
    .quote-area .contact-form textarea#sub_message,
    .quote-area .contact-form textarea#message{
        height: 127px;
        border-radius: 0;
        border: none;
        margin-bottom: 20px;
        border:1px solid rgba(255,255,255,0.4);
        border-radius: 3px;
        color: #fff;
        background: transparent;
    }
    .quote-area .quote-btn {
        color: #fff;
        padding: 10px 20px;
        font-size: 17px;
        font-weight: 600;
        text-transform: uppercase;
        display: block;
        width: 100%;
        height: 54px;
        transition: 0.4s;
        border-radius: 3px;
        background: #272c5d;
        border:1px solid #272c5d;
    }
    .quote-image {
        padding: 50px;
    }
    .sub-head {
        padding: 30px;
    }
    /*----------------------------------------
     13. Brand Area
    ----------------------------------------*/
    .brand-area {
        position: relative;
    }
    .brand-content-inner {
        display: block;
        position: relative;
        margin-top: 60px;
    }
    .brand-content {
        display: block;
        padding: 30px 30px 30px;
        margin-top: 85px;
        background: #131740;
        border-radius: 4px;
    }
    
    /*----------------------------------------*/
    /*    15. Breadcumbs Area
    /*----------------------------------------*/
    .page-area {
        background: url(img/background/bread.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        padding: 250px 0px 180px;
        z-index: 1;
        position: relative;
    }
    .page-area::after{
        position: absolute;
        content: "";
        left:0;
        top: 0;
        width:100%;
        height: 100%;
        background: url(img/background/bread1.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right top;
        z-index: -1;
        opacity: 0.95;
    }
    .transparent-header{
        background: transparent;
    }
    .breadcrumb-title {
        display: block;
        padding: 60px 0px 10px 0px;
        overflow: hidden;
    }
    .breadcrumb {
        padding: 0;
        margin-bottom: 0;
        list-style: none;
        border-radius: 0;
        background: none;
        display: block;
    }
    .breadcrumb-title h2 {
        font-size: 48px;
        line-height: 60px;
        position: relative;
        margin-bottom: 0px;
        display: block;
    }
    .breadcrumb-item {
        font-size: 18px;
        line-height: 1;
        padding: 15px 0px;
        display: inline-block;
    }
    .breadcrumb-item a {
        color:#fff;
    }
    .breadcrumb-items a {
        color: #ddd;
        font-size: 18px;
    }
    .breadcrumb-items>i {
        vertical-align: middle;
        font-size: 13px;
        padding: 0px 7px;
    }
    .breadcrumb-page .breadcrumb-item + .breadcrumb-item::before {
        color: #fff;
        content: "\f105";
        font-family: fontAwesome;
        padding-right: 15px;
    }
    .breadcrumb-page .breadcrumb-item.active {
        font-weight: 500;
        color: #fff;
    }
    /*--------------------------------*/
    /* 16.Feature Area
    /*--------------------------------*/
    .feature-area {
        position: relative;
    }
    .feature-area {
        background: url(img/background/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        z-index: 1;
        position: relative;
    }
    .feature-area::after{
        position: absolute;
        content: "";
        left:0;
        top: 0;
        width:100%;
        height: 100%;
        background: url(img/background/vid.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center left;
        z-index: -1;
        opacity: 0.98;
    }
    .feature-all {
        margin-right: 50px;
    }
    .feature-image {
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        padding-right: 30px;
    }
    .feature-image img {
        border-radius: 10px;
    }
    .about-feature {
        width: 400px;
        height: 420px;
        border: 5px solid #0bfffc;
    }
    .support-services {
        padding-top: 20px;
        overflow: hidden;
        margin-right: 40px;
    }
    .support-images {
        float: left;
        font-size: 40px;
        line-height: 110px;
        text-align: center;
        transition: 0.4s;
        margin-right: 30px;
        border-radius: 4px;
    }
    .support-images img{
        border-radius: 4px;
    }
    .support-content {
        padding-left: 90px;
    }
    .support-services .support-content h4 {
        font-size: 20px;
        text-transform: capitalize;
        padding-bottom: 0px;
    }
    .support-services .support-content h4 a {
        color: #2D2E30;
    }
    .right-headline p,
    .support-services .support-content p {
        margin-bottom: 0px;
    }
    .feature-images {
        position: relative;
        float: right;
    }
    .anime-details-page .video-vid {
        border-radius: 5px;
        width: 100%;
    }
    .anime-inner-details {
        margin-left: 50px;
    }
    .pro-rating.no-rating {
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .anime-details-page {
        position: relative;
        background: url(img/background/bg3.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
        z-index: 1;
    }
    .anime-inner-top {
        position: relative;
        background: url(img/background/bg.jpg);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        z-index: 1;
        padding: 50px;
        border-radius: 20px;
         margin: 60px 0px 80px;
    }
    .anime-inner-top::after{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(img/background/vid2.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center left;
        z-index: -1;
        opacity: 0.98;
    }
    .anime-inner .about-feature {
        width: 240px;
        height: 240px;
        border: 6px solid #0bfffc;
    }
    /*----------------------------------------*/
    /*  17. FAQ  Area
    /*----------------------------------------*/
    .accordion-item {
        background-color: transparent;
        border: none;
        margin-bottom: 10px;
    }
    .accordion-header {
        background: #1A1E4A;
        padding: 10px 15px;
        margin-bottom: 0;
        color: #fff;
        margin-bottom: 30px;
    }
    .faq-padding{
        padding: 0px 100px;
    }
    .tp-accordion .accordion-button {
        font-size: 18px;
        color: var(--tp-common-black);
        font-weight: 300;
        padding: 0px 20px;
        background-color: transparent;
        box-shadow: 0px 16px 32px 0px rgb(0 0 0 / 4%);
        border: 1px solid transparent;
    }
    .tp-accordion .accordion-button {
        font-size: 18px;
        color: var(--tp-common-black);
        font-weight: 300;
        padding: 0px 20px;
        background-color: transparent;
        box-shadow: 0px 16px 32px 0px rgb(0 0 0 / 4%);
        border: 1px solid transparent
    }
    .tp-accordion .accordion-button::after {
        position: absolute;
        content: "\e61a ";
        font-family: themify;
        top: 50%;
        right: 10px;
        width: 25px;
        height: 25px;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        background-color: #F0C83C;
        color:#020134;
        background-image: none;
    }
    .tp-accordion .accordion-button:not(.collapsed)::after {
        content: "\e622";
        font-family: themify;
        background-color: #F0C83C;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: #020134; 
        top: 50%;
        right: 10px;
    }
    .accordion-body {
        color: #ddd;
        padding: 0px 40px 15px;
        font-size: 16px;
    }
    .product-additional-tab .nav-tabs {
        flex-direction: column;
        border-bottom: 0;
        width: 260px;
        flex: 0 0 auto;
    }
    .product-additional-tab .nav-tabs .nav-item {
        margin-bottom: 10px;
    }
    .product-additional-tab .nav-tabs .nav-item .nav-link {
        font-size: 20px;
        color:#fff;
        text-align: left;
        padding: 15px 30px;
        width: 100%;
        border: none;
        border-radius: 8px;
        background:#181B38;
        margin-bottom: 10px;
        font-family: 'Philosopher', sans-serif;
    }
    .product-additional-tab {
        display: flex;
    }
    .product-additional-tab .nav-tabs .nav-item .nav-link:hover, 
    .product-additional-tab .nav-tabs .nav-item .nav-link.active {
        background-color:#F0C83C;
        color: #020134;
        border-radius: 3px;
    }
    .tp-content-tab {
        margin-left: 40px;
        width: 100%;
    }
    .company-faq-left {
        margin-left: 20px;
    }
    /*--------------------------------*/ 
    /* 18. Error page
    /*--------------------------------*/
    .error-easy-text {
        font-weight: 500;
        text-transform: capitalize;
        font-size: 24px;
    }
    .high-text {
        font-size: 260px;
        line-height: 200px;
        margin-bottom: 40px;
        font-family: 'Philosopher', sans-serif;
    }
    .error-bot{
        font-size: 20px;
        color:#ccc;
        font-weight: 400;
    }
    .error-main-text .error-btn {
        margin: 20px 0px 0px 0px;
        display: inline-block;
        padding: 18px 24px;
    }
    .high-text span {
        color: #F0C83C;
        font-family: 'Philosopher', sans-serif;
    }
    .error-btn{
        padding: 12px 20px;
        text-transform: uppercase;
        font-size: 18px;
    }
    /*----------------------------------------*/
    /*  19. Blog Deails Area
    /*----------------------------------------*/
    .left-blog-page {
        background: #1A1E4A;
        padding: 20px 30px;
        margin-bottom: 30px;
    }
    .blog-pagination {
        overflow: hidden;
        display: block;
        margin-top: 20px;
    }
    .blog-search-option input {
        padding: 5px 15px;
        width: 80%;
        border: none;
        height: 56px;
        background: transparent;
        color: #ccc;
    }
    .blog-images {
        position: relative;
        display: block;
    }
    .blog-search-option {
        margin: 10px 0px;
        display: block;
        border: 1px solid #181B38;
        background: #272c5d;
        border-radius: 3px;
    }
    .blog-search-option button {
        background: transparent;
        border: none;
    }
    .blog-search-option button i {
        line-height: 16px;
        font-size: 18px;
        padding: 0px 10px;
    }
    .blog-search-option button i:hover {
        color: #F0C83C;
    }
    .left-blog h4 {
        position: relative;
        font-size: 22px;
        margin-bottom: 15px;
        padding: 10px 0px 25px;
        text-transform: capitalize;
        border-bottom: 1px solid #1A1E4A;
    }
    .left-blog h4::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: -2px;
        width: 60px;
        height: 3px;
        background: #F0C83C;
    }
    .blog-left-content .blog-content::after{
        display: none;
    }
    .left-side {
        padding-right: 20px;
    }
    .right-side{
        padding-left: 20px;
    }
    .left-blog {
        overflow: hidden;
        padding-bottom: 20px;
    }
    .blog-category li,
    .left-blog li {
        display: block;
        position: relative;
    }
    .left-blog ul li a {
        color: #ddd;
        display: inline-block;
        font-size: 16px;
        padding: 7px 0px 7px;
        text-transform: capitalize;
    }
    .blog-category ul {
        margin-top: 12px;
    }
    .left-blog ul li span {
        display: inline-block;;
        font-size: 15px;
        color: #ddd;
        float: right;
        margin: 10px 0px;
        position: absolute;
        right: 0;
        top: -2px;
        font-weight: 600;
    }
    .pst-content .date-type {
        font-size: 14px;
        color: #ddd;
    }
    .popular-tag.left-blog ul li a:before {
        display: none;
    }
    .recent-single-post {
        display: block;
        overflow: hidden;
        padding: 15px 0px;
    }
    .recent-single-post:last-child {
        border-bottom: none;
    }
    .post-img {
        display: inline-block;
        float: left;
        padding-right:15px;
    }
    .left-blog .post-img a {
        display: block;
    }
    .pst-content {
        padding-left: 100px;
    }
    .pst-content p{
        margin-bottom: 0px;
    }
    .pst-content p a:hover,.left-blog ul li a:hover {
        color: #F0C83C;
    }
    .pst-content p a {
        color: #ddd;
        font-size: 16px;
    }
    .blog-tags {
        padding: 1px 0;
    }
    .recent-single-post img {
        width: 100%;
        max-width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 3px;
        border: 1px solid #1A1E4A;
    }
    .left-blog li:last-child {
        border-bottom: 0 ;
    }
    .popular-tag.left-side-tags.left-blog ul {
        padding:0px;
    }
    .left-tags .left-side-tags ul li {
        border-bottom: 0;
        display: inline-block;
        margin: 5px 2px;
    }
    .left-tags .left-side-tags ul li a {
        padding: 5px 10px;
        width: auto;
        background:#2a2e56;
        border:1px solid #2a2e56;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
        transition: 0.4s;
    }
    .left-tags .left-side-tags ul li a:hover {
        background:#F0C83C;
        border:1px solid #F0C83C;
        transition: 0.4s;
    }
    .left-side-tags h4 {
        margin-bottom: 15px;
    }
    .blog-side-area .blog-right-column{
        margin-top: -30px;
    }
    .blog-sidebar-right .single-blog:hover .blog-content p{
        color:#eee;
    }
    .adver-img {
        margin-top: 20px;
    }
    .blog-details .blog-content h3 {
        font-size: 28px;
    }
    .blog-details .blog-meta {
        margin-bottom: 10px;
    }
    .blog-single-tags {
        padding-bottom: 10px;
    }
    .blog-single-tags .list-tag-title {
        font-weight: 700;
        color: #fff;
        display: inline-block;
        margin-right: 15px;
    }
    .blog-single-tags .tag-list {
        display: inline-block;
    }
    .blog-single-tags .tag-list li {
        display: inline-block;
    }
    .blog-single-tags .tag-list li a {
        padding: 5px 10px;
        width: auto;
        border:1px solid #1A1E4A;
        background:#1A1E4A;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
        margin: 0px 5px;
        transition: 0.4s;
    }
    .blog-single-tags .tag-list li a:hover {
        color: #333;
        background:#F0C83C;
        border:1px solid #F0C83C;
        transition: 0.4s;
    }
    .comments-heading h3, h3.comment-reply-title {
        border-bottom: 1px solid #1A1E4A;
        font-size: 28px;
        margin: 0 0 40px;
        padding: 0 0 20px;
        text-transform: capitalize;
    }
    .comments-list ul li{
        margin-bottom: 25px;
    }
    .comments-list-img{
        float: left;
        margin-right: 30px;
        border-radius: 50%;
    }
    .comments-details {
        background: #1A1E4A;
        border: 1px solid #1A1E4A;
        overflow: hidden;
        padding: 30px;
    }
    .comments-list-img img {
        border-radius: 50%;
       border: 1px solid #1A1E4A;
    }
    .comments-content-wrap {
        color: #eee;
        position: relative;
        font-size: 15px;
        padding-left: 112px;
    }
    blockquote {
        padding: 30px 40px 20px 80px;
        margin: 0 0 20px;
        font-size: 15px;
        border-left: none;
        font-style: italic;
        position: relative;
        background: #1A1E4A;
    }
    blockquote::before {
        position: absolute;
        top: 20px;
        left: 30px;
        content: "\f10d ";
        font-family: fontawesome;
        font-size: 34px;
        color: #eee;
    }
    blockquote p {
        font-size: 16px !important;
        line-height: 28px;
        color:#ccc;
        font-weight: 400;
    }
    .blog-details .blog-meta span {
        display: inline-block;
    }
    .author-avatar {
        display: inline-block;
        float: left;
        width: 10%;
    }
    .comments-content-wrap span b{
        margin-right:5px;
    }
    span.post-time{
    margin-right:5px;
    }
    .comments-content-wrap p {
        margin-top: 10px;
        margin-bottom: 0px;
        font-size: 15px;
    }
    .threaded-comments{
        margin-left:50px;
    }
    .comment-respond {
        margin-top: 20px;
    }
    span.email-notes{
        color: #eee;
        display: block;
        font-size: 12px;
        margin-bottom: 10px;
    }
    .comment-respond p {
        color: #eee;
        margin-bottom: 5px;
    }
    .comment-respond input[type=text],
    .comment-respond input[type=email]{
        border:none;
        border-radius: 0;
        height: 46px;
        margin-bottom: 15px;
        padding: 0 0 0 10px;
        width: 100%;
        background: #1A1E4A;
    }
    .comment-respond textarea#message-box{
        border:none;
        border-radius: 0;
        max-width: 100%;
        padding: 10px;
        height: 200px;
        width: 100%;
        background: #1A1E4A;
    }
    .comments-content-wrap span a {
        color: #F0C83C;
    }
    .comments-content-wrap span a:hover {
        color: #F0C83C;
    }
    .blog-page-details .left-blog-page {
        margin-top:0px;
        margin-bottom:30px;
    }
    .single-post-comments,
    .related-post{
        margin-top: 30px;
    }
    .left-head-blog .pst-content p{
        margin-bottom: 5px;
    }
    .blog-post-wrapper .blog-content h4{
        font-size: 26px;
        line-height: 34px;
    }
    .blog-post-wrapper .blog-content h4 {
        font-size: 24px;
        line-height: 34px;
    }
    .blog-post-wrapper .blog-content {
        border: none;
        padding: 30px 0px 30px;
        background: transparent;
        position: inherit;
        text-align: left;
    }
    .blog-post-wrapper .img-blog {
        margin: 15px 0px 30px;
        max-height: 350px;
        overflow: hidden;
        width: 50%;
        float: left;
    }
    .left-blog-img img {
        padding-right: 15px;
    }
    .right-blog-img img {
        padding-left: 15px;
    }
    .related-post-list .recent-single-post {
        width: 50%;
        float: left;
        padding: 0px 20px 0px 0px;
        margin-bottom: 20px;
    }
    .related-post-list .recent-single-post:last-child{
        padding: 0px 0px 0px 20px;
    }
    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 10px 0 0px;
        border-radius: 4px;
    }
    .pagination>li>a, 
    .pagination>li>span {
        position: relative;
        float: left;
        padding: 6px 12px;
        line-height: 1.42857143;
        text-decoration: none;
        color: #eee;
        background-color: #1A1E4A;
        border: none;
        margin-left: -1px;
        border-radius: 2px;
    }
    .pagination>li {
        display: inline-block;
        margin: 0px 3px 0px 0px;
    }
    .pagination>.active>a, 
    .pagination>.active>span, 
    .pagination>.active>a:hover, 
    .pagination>.active>span:hover, 
    .pagination>.active>a:focus, 
    .pagination>.active>span:focus{
        z-index: 3;
        color: #fff;
        background:#F0C83C;
        cursor: default;
        border-radius: 2px;
    }
    .pagination>li>a:hover, .pagination>li>span:hover, .pagination>li>a:focus, .pagination>li>span:focus {
        z-index: 2;
        color: #333;
        background:#F0C83C;
        border-color: #F0C83C;
        border-radius: 2px;
    }
    .adver-img {
        margin-top: 20px;
    }
    /*----------------------------------------*/
    /*  20.	Contact Us page
    /*----------------------------------------*/
    .contact-details {
        display: block;
        overflow: hidden;
        padding: 40px;
        background: #1A1E4A;
        border-radius: 4px;
        margin-right: 50px;
    }
    .contact-single {
        padding: 50px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        background: #1A1E4A;
    }
    .contact-image {
        margin-right: 30px;
    }
    .contact-head {
        padding: 40px 40px;
        background: #1A1E4A;
        margin-right: 40px;
    }
    .contact-head{
        background: url(img/background/ser-bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .project-social {
        display: inline-block;
        margin-left: 20px;
    }
    .project-social li {
        display: inline-block;
    }
    .project-social li a {
        display: block;
        font-size: 16px;
        line-height: 34px;
        text-align: center;
        margin-right: 5px;
        width: 34px;
        height: 34px;
        border-radius: 2px;
        transition: 0.4s;
        border: 1px solid #1A1E4A;
        background:#1A1E4A;
        color: #fff;
    }
    .project-social li a:hover{
        color: #333;
        background: #F0C83C;
        border: 1px solid #F0C83C;
        transition: 0.4s;
    }
    .project-share h5 {
        display: inline-block;
        font-size: 18px;
    }
    .single-contact a {
        display: block;
        margin-bottom: 10px;
    }
    .single-contact a i {
        float: left;
        color: #F0C83C;
        font-size: 18px;
        padding-right: 20px;
        line-height: 24px;
    }
    .single-contact span {
        color: #ddd;
    }
    .single-contact {
        margin: 20px 0px 30px;
    }
    .contact-btn{
        padding: 12px 20px;
        margin-top: 20px;
        text-transform: uppercase;
        border:none;
    }
    .mar-right{
        margin-right: 100px;
    }
    .mar-rt{
        margin-right: 40px;
    }
    /*----------------------------------------*/
    /*  21.	Home Page 02 
    /*----------------------------------------*/
    
    .single-slide{
        position: relative;
        z-index: 1;
    }
    .single-slide::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(img/slider/layer1.png);
        content: "";
        z-index: -1;
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.98;
    }
    .intro-home-3 .single-slide::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(img/slider/layer2.png);
        content: "";
        z-index: -1;
        background-position: left top;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.90;
    }
    .slider-height {
        min-height: 700px;
        background-position: center center;
        background-size: cover;
    }
    .slider-active button.slick-arrow {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        background: none;
        border: 0;
        font-size: 20px;
        padding: 0;
        color: #1B1B4F;
        z-index: 2;
        height: 50px;
        width: 50px;
        border-radius:50px;
        cursor: pointer;
        background: #F0C83C;
        line-height: 53px;
        border:1px solid #F0C83C;
    }
    .slider-3 button.slick-arrow {
        color: #1B1B4F;
        background: #fff1f0;
    }
    .slider-active button.slick-next{
        left: auto;
        right:30px;
    }
    .slider-active button.slick-prev{
        left: auto;
        right:30px; 
        top: 60%;
    }
    .slider-active:hover button.slick-prev{
        right: 30px;
        left: auto;
    }
    .slider-active:hover button.slick-next{
        right: 30px; 
    }
    
    .slider-active:hover button{
        opacity: 1;
        visibility: visible;
    }
    .slider-active button:hover{
        background:transparent;
        color: #F0C83C;
        transition: 0.4s;
    }
    .intro-home-2 .title-2 {
        font-size: 66px;
        font-weight: 600;
        line-height: 76px;
        margin-bottom: 20px;
        text-shadow: none;
    }
    .intro-home-2 .title-1 {
        color: #F0C83C;
        font-weight: 300;
        font-size: 28px;
    }
    .slide-all-text {
        margin-top: 50px;
    }
    .intro-home-3 .title-2 {
        color: #fff;
        width: 80%;
        font-size: 64px;
        line-height: 76px;
        margin: 0 auto;
    }
    .header-area-3 .center-header {
        background: url(img/background/header-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center;
        padding: 0px 20px;
        border-radius: 4px;
        margin-top: 20px;
    }
    .header-area-3 {
        background: transparent;
    }
    .intro-home-3 .slide-all-text {
        margin-top: 100px;
    }
    .intro-home-3 .slide-video-content {
        text-align: center;
        z-index: 9;
        position: absolute;
        top: 50%;
        margin: 0 auto;
        left: 0;
        right: 0;
    }
    .intro-home-3 .slide-images {
        position: relative;
    }
    .header-area-3.stick .center-header {
        margin-top:0px;
    }
    /*----------------------------------------*/
    /*  21.	Animation  CSS
    /*----------------------------------------*/
    .rotateme {
        animation-name: rotateme;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @-webkit-keyframes rotateme {
      from {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    
    @keyframes rotateme {
      from {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    .item-bounce {
        -webkit-animation: bounce 3s infinite ease-in-out;
        animation: bounce 3s infinite ease-in-out;
    }
    @-webkit-keyframes bounce {
      0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
      }
      50% {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
      }
      100% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
      }
    }
    
    @keyframes bounce {
      0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
      }
      50% {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
      }
      100% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
      }
    }
    
    @-webkit-keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    
    100% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
    }
    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
    @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }
    @keyframes a{
      from {
      --a:20deg;
      --l:10%;
      --c:#FC0077;
      }
      50% {
        --c:#48ff00;
      }
      to {
      --a:300deg;
      --l:40%;
      --c:#00ffd5;
      }
    }
    @-webkit-keyframes popcircle {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      99% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
      100% {
        opacity: 0;
      }
    }
    /*----------------------------------------*/
    /*  22.General code CSS
    /*----------------------------------------*/
    .hidden-md-xl{
        display: none;
    }
    .submit-btn {
        display: inline-block;
        margin-top: 20px;
        border: none;
        padding: 12px 40px;
        font-size: 20px;
        text-transform: uppercase;
    }
    .bg-left-image {
        position: relative;
        background: url(img/background/layer-bg2.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
        z-index: 1;
    }
    .bg-right-image {
        position: relative;
        background: url(img/background/layer-bg3.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
        z-index: 1;
    }
    .bg-left-image::after,
    .bg-right-image::after {
        position: absolute;
        content: "";
        background:#080A30;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        opacity: 0.80;
    }
    .slide-video-content .video-zone {
        border-radius: 100%;
        display: inline-block;
        height: 80px;
        width: 80px;
        transition: 0.4s;
        border: 9px solid #F0C83C;
        position: relative;
        background: #F17C3A;
        line-height: 74px;
    }
    .slide-video-content .video-zone i {
        color: #fff;
        font-size: 30px;
        line-height: 54px;
        transition: 0.4s;
    }
    .slide-video-content .video-zone:hover{
        background: #F0C83C;
        border: 9px solid #F17C3A;
        transition: 0.4s;
    }
    .anti-btn {
        color: #333;
        border: 1px solid #F0C83C;
        background-image: -webkit-linear-gradient(30deg, #F0C83C 50%, transparent 50%);
        background-image: linear-gradient(30deg, #F0C83C 50%, transparent 50%);
        background-size: 500px;
        background-repeat: no-repeat;
        background-position: 0%;
        -webkit-transition: background 300ms ease-in-out;
        transition: background 300ms ease-in-out;
        font-weight: 500;
        display: inline-block;
        padding: 13px 30px;
        font-size: 17px;
        text-transform: uppercase;
    }
    .anti-btn:hover {
      background-position: 100%;
      color: #F0C83C;
    }
    /*----------------------------------------*/
    /*  22.Mouse Cursor CSS
    /*----------------------------------------*/
    
    .mouseCursor {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: 50%;
      transform: translateZ(0);
      text-align: center;
    }
    .mouseCursor.my-class {
      mix-blend-mode: difference;
      background-color: #fff;
    }
    .mouseCursor.my-class.cursor-outer {
      width: 72px;
      height: 72px;
    }
    .mouseCursor.my-class.cursor-inner {
      display: none;
    }
    .mouseCursor.my-class.cursor-inner {
      display: none;
    }
    
    .cursor-inner {
      margin-left: -3px;
      margin-top: -3px;
      width: 6px;
      height: 6px;
      z-index: 10000001;
      background-color: #F0C83C;
      transition: all 0.08s linear;
    }
    .cursor-inner span {
      color: #fff;
      line-height: 80px;
      opacity: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
    }
    
    .cursor-inner.cursor-big span {
      opacity: 1;
    }
    .cursor-outer {
      margin-left: -15px;
      margin-top: -15px;
      width: 30px;
      height: 30px;
      border: 2px solid #F0C83C;
      box-sizing: border-box;
      z-index: 10000000;
      transition: all 0.08s linear;
    }
    .mouseCursor.my-class.cursor-outer {
      width: 72px;
      height: 72px;
    }
    `

}

export default MainCSS