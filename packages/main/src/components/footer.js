import FooterStyle from "./footerStyle";

const Footer = () => {

    let footer01 = document.createElement('div');
    footer01.className = 'footer-area';

    let footer02 = document.createElement('div');
    footer02.className = 'footer-area-bottom';

    let footerCSS = document.createElement('style');
    footerCSS.innerHTML += FooterStyle();

    footer02.appendChild( footerCSS );

    footer01.innerHTML += `
    <div class="container">
        <div class="row footer-center-bg wow fadeInUp" data-wow-delay="0.10s">
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="footer-content logo-footer wow fadeInUp" data-wow-delay="0.3s">
                    <div class="footer-head">
                        <div class="footer-logo">
                            <a href="#"><img src="img/logo/logo2.png" alt=""></a>
                        </div>
                        <p>When replacing a multi lined selection of text dummy text maintains the amount of lines. When replacing a selection.</p>
                        <div class="footer-icons">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="img/about/midea1.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                       <img src="img/about/midea2.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/about/midea3.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/about/midea4.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/about/midea5.png" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end single footer -->
            <div class="col-xl-2 col-lg-2 col-md-6">
                <div class="footer-content wow fadeInUp" data-wow-delay="0.5s">
                    <div class="footer-head">
                        <h4>Services Link</h4>
                        <ul class="footer-list">
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Agency </a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Design </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6">
                <div class="footer-content three-content wow fadeInUp" data-wow-delay="0.7s">
                    <div class="footer-head">
                        <h4>Support Link</h4>
                        <ul class="footer-list">
                            <li><a href="#">Search engine</a></li>
                            <li><a href="#">Online support</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">activation</a></li>
                            <li><a href="#">Live Chat</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- end single footer -->
            <div class="col-xl-4 col-lg-4 col-md-6">
                 <div class="footer-content last-content wow fadeInUp" data-wow-delay="0.9s">
                    <div class="footer-head">
                        <h4>Information</h4>
                        <p>When replacing a multi lined selection of text dummy text</p>
                        <div class="footer-contacts">
                            <p><span>Tel :</span> +0890-564-5644</p>
                            <p><span>Email :</span> info@salebiz3.com</p>
                            <p><span>Location :</span> House- 65/4,Road-12, Newyork</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `

    footer02.innerHTML += `
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="copyright">
                    <p>
                        Copyright © 2023
                        <a href="#">Liti</a> All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
    `

    return { 
        footer01,
        footer02 
    }

}

export default Footer