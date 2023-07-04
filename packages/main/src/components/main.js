import MainCSS from "./mainStyle";

function createScript( index, main, lib ) {

    if( index >= lib.length ) {
        return false;
    }

    let el = document.createElement('script');
    el.onload = function() {
      //console.log("Script loaded: ", libs[index]);
      createScript( index+1, main, lib );
    }

    el.src = lib[ index ];
    main.appendChild( el );

}

const Main = () => {

    //script 생성
    let libs = [
        "js/vendor/modernizr-3.5.0.min.js",
        "js/vendor/jquery-1.12.4.min.js",
        "js/owl.carousel.min.js",
        "js/slick.min.js",
        "js/popper.min.js",
        "js/bootstrap.min.js",
        "js/jquery.meanmenu.js",
        "js/magnific.min.js",
        "js/wow.min.js",
        "js/plugins.js",
        "js/myScript.js"
    ];

    let container = document.createElement('div');
    container.className = 'mainContent';

    let mainSecStyle = document.createElement('style');
    mainSecStyle.id = 'mainSecStyle';
    mainSecStyle.innerHTML += MainCSS();

    container.appendChild( mainSecStyle );

    container.innerHTML += `
        <section class="intro-area intro-home-2 intro-area-2">
            <div class="hero-slider">
                <div class="slider-active">
                    <div class="single-slide slider-height d-flex align-items-center" data-background="img/slider/bg1.jpg">
                        <div class="container">
                            <div class="row d-flex align-items-center">
                                <div class="col-xl-7 col-lg-7 col-md-9">
                                    <div class="slide-all-text">
                                       <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                                        <h4 class="title-1">Best animation studio</h4>
                                    </div>
                                        <!-- layer 2 -->
                                        <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                                            <h1 class="title-2">We are make world popular animation film </h1>
                                        </div>
                                        <!-- layer 3 -->
                                        <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                            <a href="contact.html" class="ready-btn anti-btn" >Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-3">
                                    <div class="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="slide-images video-image">
                                            <div class="video-content slide-video-content">
                                            <a href="https://www.youtube.com/watch?v=ckHzmP1evNU" class="video-play video-zone">
                                                <i class="fa fa-play"></i>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-slide slider-height d-flex align-items-center" data-background="img/slider/bg2.jpg">
                        <div class="container">
                            <div class="row d-flex align-items-center">
                                <div class="col-xl-7 col-lg-7 col-md-9">
                                    <div class="slide-all-text">
                                       <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                                            <h4 class="title-1">Best animation studio</h4>
                                        </div>
                                        <!-- layer 2 -->
                                        <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                                            <h1 class="title-2">Award winning short movie make expert</h1>
                                        </div>
                                        <!-- layer 3 -->
                                        <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                            <a href="contact.html" class="ready-btn anti-btn" >Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-3">
                                    <div class="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="slide-images video-image">
                                            <div class="video-content slide-video-content">
                                            <a href="https://www.youtube.com/watch?v=ckHzmP1evNU" class="video-play video-zone">
                                                <i class="fa fa-play"></i>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Start service area -->
        <div class="services-area bg-color fix area-padding">
            <div class="container">
                <div class="row d-flex flex-wrap align-items-center justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="section-headline text-center wow fadeInUp" data-wow-delay="0.3s">
                           <span class="title-up">What we do</span>
                            <h2>Our Services</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="service-images-inner">
                            <div class="services-image">
                                <img src="img/background/ani1.png" alt="">
                            </div>
                            <div class="row service-wrapper">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="single-services wow fadeInRight" data-wow-delay="0.3s">
                                        <div class="single-services-rare">
                                            <div class="services-img">
                                                <a class="big-img" href="#"><img src="img/icon/ser1.png" alt=""></a>
                                            </div>
                                            <div class="main-wel">
                                                <div class="wel-content">
                                                    <a href="#">
                                                       <h4>Create animation carton movie.</h4>
                                                    </a>
                                                   <p>Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="single-services right-services wow fadeInRight" data-wow-delay="0.5s">
                                       <div class="services-img video-image">
                                            <a class="big-img" href="#"><img src="img/icon/ser2.png" alt=""></a>
                                        </div>
                                        <div class="main-wel">
                                            <div class="wel-content">
                                                <a href="#">
                                                   <h4>Make animation short film.</h4>
                                                </a>
                                               <p>Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="single-services wow fadeInRight" data-wow-delay="0.7s">
                                       <div class="services-img video-image">
                                            <a class="big-img" href="#"><img src="img/icon/ser3.png" alt=""></a>
                                        </div>
                                        <div class="main-wel">
                                            <div class="wel-content">
                                                <a href="#">
                                                   <h4>Create animation carton movie.</h4>
                                                </a>
                                               <p>Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="single-services right-services wow fadeInRight" data-wow-delay="0.9s">
                                       <div class="services-img video-image">
                                            <a class="big-img" href="#"><img src="img/icon/ser4.png" alt=""></a>
                                        </div>
                                        <div class="main-wel">
                                            <div class="wel-content">
                                                <a href="#">
                                                   <h4>Make animation short film.</h4>
                                                </a>
                                               <p>Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-services End-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End service area -->

        <!--Blog Area Start-->
        <div class="blog-area fix area-padding-3 bg-color">
            <div class="container">
                <div class="row">
                    <div class="section-headline text-center wow fadeInUp" data-wow-delay="0.3s ">
                        <span class="title-up">Content Blog</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div class="row">
                    <!-- Start single blog -->
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="blog-details.html">
                                    <img src="img/blog/b1.jpg" alt="">
                                    <div class="blog-item-date">
                                        <span class="date-type">15</span>
                                        <span class="years-type">May, 20</span>
                                    </div>
                                </a>
                                <div class="blog-content">
                                    <div class="blog-meta">
                                       <span class="admin-type">
                                            <i class="fa fa-user"></i>
                                            Admin
                                        </span>
                                        <span class="comments-type">
                                            <i class="fa fa-comment-o"></i>
                                            16
                                        </span>
                                    </div>
                                    <a href="blog-details.html">
                                        <h4>Creative design clients response is better</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="blog-details.html">
                                    <img src="img/blog/b2.jpg" alt="">
                                    <div class="blog-item-date">
                                        <span class="date-type">15</span>
                                        <span class="years-type">Jun, 22</span>
                                    </div>
                                </a>
                                <div class="blog-content">
                                   <div class="blog-meta">
                                       <span class="admin-type">
                                            <i class="fa fa-user"></i>
                                            Admin
                                        </span>
                                        <span class="comments-type">
                                            <i class="fa fa-comment-o"></i>
                                            15
                                        </span>
                                    </div>
                                    <a href="blog-details.html">
                                        <h4>Web design is a best work in future world</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-blog home-last-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="blog-details.html">
                                    <img src="img/blog/b3.jpg" alt="">
                                    <div class="blog-item-date">
                                        <span class="date-type">16</span>
                                        <span class="years-type">Jul, 22</span>
                                    </div>
                                </a>
                                <div class="blog-content">
                                    <div class="blog-meta">
                                        <span class="admin-type">
                                            <i class="fa fa-user"></i>
                                            Admin
                                        </span>
                                        <span class="comments-type">
                                            <i class="fa fa-comment-o"></i>
                                            07
                                        </span>
                                    </div>
                                    <a href="blog-details.html">
                                        <h4>You can trust me and business with together</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                    <div class="d-lg-none d-xl-none col-md-6 ">
                        <div class="single-blog home-last-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="blog-details.html">
                                    <img src="img/blog/b4.jpg" alt="">
                                    <div class="blog-item-date">
                                        <span class="date-type">24</span>
                                        <span class="years-type">Aug, 22</span>
                                    </div>
                                </a>
                                <div class="blog-content">
                                   <div class="blog-meta">
                                        <span class="admin-type">
                                            <i class="fa fa-user"></i>
                                            Admin
                                        </span>
                                        <span class="comments-type">
                                            <i class="fa fa-comment-o"></i>
                                            07
                                        </span>
                                    </div>
                                    <a href="blog-details.html">
                                        <h4>You can trust me and business with together</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                </div>
            </div>
        </div>
        <!--End Blog Area-->

        <!-- Start Quote Area -->
        <div class="quote-area bg-color">
            <div class="container">
                <div class="row quote-center">
                   <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="brand-content-inner">
                            <div class="brand-text wow fadeInUp" data-wow-delay="0.3s">
                                <h3>Contact us for create animation story</h3>
                                <p>Music video actor perform a nice song .Music video actor perform a nice song .Music video actor perform.</p>
                            </div>
                            <!-- Start Brand Area -->
                            <div class="brand-content wow fadeInLeft" data-wow-delay="0.3s">
                                <div class="brand-carousel owl-carousel">
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/1.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/2.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/3.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/4.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/5.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/6.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/7.png" alt=""></a>
                                    </div>
                                    <div class="single-brand-item">
                                        <a href="#"><img src="img/brand/8.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="quote-all wow fadeInRight" data-wow-delay="0.3s">
                            <form id="contactForm" method="POST" action="contact.php" class="contact-form">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
                                        <div class="help-block with-errors"></div>
                                            <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email">
                                            <div class="help-block with-errors"></div>
                                            <input type="text" id="msg_subject" class="form-control last-part" placeholder="Subject" required data-error="Please enter your message subject">
                                            <div class="help-block with-errors last-part"></div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message"></textarea>
                                        <div class="help-block with-errors"></div>
                                        <button type="submit" id="submit" class=" anti-btn quote-btn">Submit</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div> 
                                        <div class="clearfix"></div>
                                    </div>   
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    createScript( 0, container, libs );

    return container

}

export default Main;