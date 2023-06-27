

const FooterStyle = () => {

    return `
    /*----------------------------------------*/
    /*  14. Footer Area
    /*----------------------------------------*/
    .footer1 {
        background: url(img/background/footer.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
        background-attachment: scroll;
        position: relative;
        z-index: 1;
    }
    .footer1::after {
        background: rgba(5,8,47,0.25) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
    .footer-center-bg{
        position: relative;
        background: #131740;
        z-index: 1;
        padding: 80px 50px;
        border-radius: 20px;
    }
    .footer-area {
        padding: 180px 0 100px;
        position: relative;
    }
    .footer-top-image {
        position: absolute;
        left:0px;
        bottom:0px;
        width: 100px;
        height:140px;
    }
    .footer-top-image-2{
        position: absolute;
        right:0px;
        bottom:0px;
        width: 100px;
        height:140px;
    }
    .logo-footer {
        margin-right: 40px;
    }
    .footer-head h4 {
        font-size: 22px;
        margin-bottom: 30px;
        text-transform: capitalize;
        position: relative;
        padding-bottom: 15px;
    }
    .footer-icons ul li {
        display: inline-block;
    }
    .footer-icons ul li a {
        display: block;
        font-size: 20px;
        line-height: 42px;
        text-align: center;
        margin-right: 5px;
        width: 40px;
        height: 40px;
        border-radius: 3px;
        transition: 0.4s;
    }
    .footer-icons ul li a:hover img {
        -webkit-animation: flipInY .8s ease-in-out;
        animation: flipInY .8s ease-in-out;
    }
    .footer-logo {
        margin-bottom: 20px;
    }
    .footer-logo a {
        display: block;
        overflow: hidden;
    }
    .footer-head h4 {
        font-size: 20px;
        margin-bottom: 10px;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 10px;
    }
    .footer-list li a {
        color: #d9dbed;
        padding: 7px 0px 15px 20px;
        display: block;
        position: relative;
        font-weight: 400;
    }
    .footer-contacts span {
        color: #F0C83C;
    }
    .footer-icons {
        margin-top: 30px;
    }
    .footer-list li a:first-child {
        padding-top: 0px;
    }
    .footer-list li a:hover, .footer-list li a:hover::after {
        color: #F0C83C;
    }
    .footer-list li a::after {
        position: absolute;
        content: "";
        right: auto;
        top: 10px;
        width: 5px;
        height: 5px;
        background: #F0C83C;
        left: 0;
    }
    .footer-area-bottom {
        position: relative;
        background: #05082F;
        z-index: 1;
        padding: 10px 0px;
    }
    .footer-area-bottom {
        padding: 25px 0;
        display: block;
        width: 100%;
    }
    .copyright-text a:hover{
        text-decoration: underline;
        color:#F0C83C;
    }
    .copyright-text a {
        color: #F0C83C;
    }
    .copyright > p {
        margin-bottom: 0;
        color: #fff;
    }
    .copyright a {
        color: #F0C83C;
    }
    .last-content {
        margin-bottom: 0px;
        margin-right: 50px;
    }
    `

}

export default FooterStyle