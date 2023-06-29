
let HeaderCSS = () => {

    return `
    /*----------------------------------------*/
    /*  Google Fonts
    /*----------------------------------------*/

    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,400&family=Philosopher:wght@400;700&display=swap');
    

    /*---------------------------------------*/
    /* 1. Default
    /*---------------------------------------*/
    body {
        margin: 0;
        box-sizing: border-box;
    }

    a {
        color: #F0C83C;
    }


    /*----------------------------------------*/
    /*  2. Header bottom area
    /*----------------------------------------*/
    .octa3d-main-header-nav {
        top: 0;
        left: 0;
        right: 0;
    }

    .octa3d-main-container {
        margin: 0 auto;
        max-width: 1380px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        transition: all 0.3s ease-in-out;
    }

    .octa3d-main-header-nav ul {
        margin: 0px;
        padding: 0px;
        display: flex;
        list-style: none;
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }

    .octa3d-main-header-nav a:hover{
        color: #F0C83C;
    }

    .octa3d-main-header-nav a {
        color: #fff;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'Philosopher', sans-serif;
        font-weight: 600;
        text-decoration: none;
        padding: 7px 15px;
        transition: all 0.3s ease-in-out;
    }

    .octa3d-main-header-nav.active {
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3)
    }

    .octa3d-main-header-nav.active a {
        color: #000;
    }

    .octa3d-main-header-area{
        font-family: 'Barlow', sans-serif;
        font-weight: normal;
        font-style: normal;
        background:url(img/background/header-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center;
    }
    
    .octa3d-main-header-area.stick {
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
    .octa3d-main-header-area.stick .header_menu ul.main-menu >li>a {
        padding: 30px 0px;
    }
    .octa3d-main-header-area.stick .logo a {
        display: inline-block;
        height: auto;
        padding: 15px 0;
    }
    .octa3d-main-header-area.stick .header-logo img {
        position: relative;
        top: 0px;
        width: 30%;
    }
    .octa3d-main-header-area.stick .header-logo {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        top: 0px;
    }
    .octa3d-main-header-area.stick .header-logo::after {
        left: -90px;
        top: 0px;
        width: 80%;
        height: 100%;
        position: absolute;
        content: "";
        z-index: -1;
    }
    .octa3d-mobile {
        display: none;
    }

    @media(max-width: 911px){

        .octa3d-main-container {
            display: none;
        }

        .octa3d-mobile {
            display: block;
        }

        .octa3d-main-container-mobile {
            margin: 0 auto;
            max-width: 620px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            transition: all 0.3s ease-in-out;
        }

        .octa3d-main-container-mobile.open {
            display: flex;
            flex-direction: column;
            height: auto;
        }

        .octa3d-main-header-logo-mobile img{
            width: 50%;
            transition: all 0.3s ease-in-out;
        }

        .octa3d-main-container-mobile svg {
            margin-right: 22px;
            fill: #fff;
        }

        #icon-mobile-ham {
            display: none;
        }

        #icon-mobile-exit {
            margin-right: 35px;
            display: none;
        }

        .active {
            display: block !important;
        }

        .mobile-hambuger-open {
            margin: 0 auto;
            max-width: 550px;
        }

        .mobile-hambuger-open-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .mobile-hambuger-open-menu li {
            box-shadow: 0 -1px 0 rgba(255,255,255, 0.5);
            width: 100%;
            font-size: .9em;
            font-weight: 500;
            margin-top: 10px;
            padding-top:10px;
            padding-bottom: 5px;
        }

        .mobile-hambuger-open-menu li:last-child {
            margin-bottom: 20px;
        }

    }
    `
}

export default HeaderCSS