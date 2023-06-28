
let HeaderCSS = () => {

    return `
    /*----------------------------------------*/
    /*  Google Fonts
    /*----------------------------------------*/

    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,400&family=Philosopher:wght@400;700&display=swap');
    

    /*----------------------------------------*/
    /*  2.1 Header top area
    /*----------------------------------------*/
    .top-bar {
        padding: 15px 0px;
        background:#040D36;
        border-bottom:1px solid #181B38
    }
    .header-social-icons ul li {
        display: inline-block;
        margin-left: 10px;
        color: #fff;
        font-size: 14px;
        font-family: 'Philosopher', sans-serif;
    }
    .header-social-icons ul li a {
        font-weight: 500;
        color: #333;
        display: inline-block;
        margin-right: 0px;
        background: #F0C83C;
        width: 24px;
        height: 24px;
        line-height: 23px;
        text-align: center;
        font-size: 14px;
        border-radius: 2px;
        border: 1px solid #F0C83C;
    }
    .header-social-icons ul li a:hover {
    	color: #F0C83C;
        background:transparent;
        transform: 0.4s;
        border:1px solid #F0C83C;
    }
    /*----------------------------------------*/
    /*  2.1 Header bottom area
    /*----------------------------------------*/
    /* custom */
    .header-table {
        display: table;
    }

    .header-table .main-menu {
        display: table-cell;
        vertical-align: middle;
    }

    .header-area{
        font-family: 'Barlow', sans-serif;
        font-weight: normal;
        font-style: normal;
        background:url(img/background/header-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center;
    }
    .header-logo {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        top: -30px;
    }
    .header-logo a {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .header-logo::after {
        background: url(img/background/logo-bg1.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center;
        left: -90px;
        top: -25px;
        width: 80%;
        height: 160%;
        position: absolute;
        content: "";
        z-index: -1;
    }

    .header-area-2 .header-logo {
        top: 0px;
    }
    .header-area-2 .header-logo img {
        position: relative;
        top: 0px;
    }
    .header-area-2 .header-logo::after {
        display: none;
    }
    .header-area-2.stick{
        background: url(img/background/header-bg.png);
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 1;
    }

    .section-bg-btn {
        float: right;
    }
    .section-bg-btn-left{
        margin-top: 30px;
    }
    .services-area .section-bg-btn {
        float: none;
    }
    .header-logo img {
        position: relative;
        top: 5px;
    }
    .header-one {
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 999;
    }
    .logo img {
    	position: relative;
    	z-index: 2;
    }
    .header_menu ul li {
    	display: inline-block;
    	margin-left: 30px;
    	position: relative;
    }
    .header_menu ul li a {
        color: #fff;
        padding: 33px 0;
        display: block;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'Philosopher', sans-serif;
        font-weight: 600;
    }
    .header_menu ul li a:hover{
        color:#F0C83C !important;
    }
    .header_menu ul li.menu-item-has-children > a::after {
    	content: " +";
    }
    .header_menu ul li.menu-item-has-children > a::after {
    	content: '\e64b';
    	font-family:themify;
    	font-weight: 700;
    	margin-left: 5px;
    	font-size: 10px;
    }
    .header_menu ul li ul.submenu {
    	position: absolute;
    	background: #1A1E4A;
    	width: 210px;
    	top: 110%;
    	left: 0;
    	opacity: 0;
    	visibility: hidden;
    	-webkit-transition: all 0.3s ease-out 0s;
    	-moz-transition: all 0.3s ease-out 0s;
    	-ms-transition: all 0.3s ease-out 0s;
    	-o-transition: all 0.3s ease-out 0s;
    	transition: all 0.3s ease-out 0s;
    	box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    	z-index: 99;
    	text-align: left;
        border-radius: 4px;
    }
    .header_menu ul li ul.submenu li {
    	margin: 0;
    	display: block;
    }
    .header_menu ul li ul.submenu li a {
    	padding: 13px 30px;
    	font-size: 16px;
        position: relative;
        display: block;
    }
    .header_menu ul li ul.submenu li a:hover{
        color: #F0C83C;
        background: #1A1E4A;
    }
    .header_menu ul li ul.submenu li a::after {
        position: absolute;
        content: "\e628";
        left: 12%;
        top: 15px;
        font-family: themify;
        font-size: 12px;
        color: #F0C83C;
        opacity: 0;
        transition: 0.5s;
        font-weight: 700;
    }
    .header_menu ul li ul.submenu li a:hover::after {
        opacity: 1;
        transition: 0.5s;
    }
    .header_menu ul li:hover ul.submenu {
    	opacity: 1;
    	visibility: visible;
    	top: 96%;
    }
    .header_menu ul li ul.submenu li:hover > a {
    	color: #fff;
        padding-left:50px;
        transition: 0.5s;
    }
    .header-social-icons {
        float: right;
    }
    .main-menu ul li:hover > a {
    	color: #223645;
    }
    .header-right {
        margin-left: 40px;
        float: right;
        padding: 26px 0px;
    }
    .header-area.stick {
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        background:url(img/background/header-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center; 
    }
    .header-area.stick .header_menu ul.main-menu >li>a {
        padding: 30px 0px;
    }
    .header-area.stick .logo a {
        display: inline-block;
        height: auto;
        padding: 15px 0;
    }
    .header-area.stick .header-logo img {
        position: relative;
        top: 0px;
        width: 30%;
    }
    .header-area.stick .header-logo {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        top: 0px;
    }
    .header-area.stick .header-logo::after {
        left: -90px;
        top: 0px;
        width: 80%;
        height: 100%;
        position: absolute;
        content: "";
        z-index: -1;
    }
    
    `

}

export default HeaderCSS