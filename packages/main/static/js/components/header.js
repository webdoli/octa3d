const mainHeader = () => {

    return `
        <div id="sticker" class="header-area header-area-2">
            <div class="container">
                <div class="row center-header">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-3">
                                <div class="header-logo">
                                    <a href="/"><img src="img/logo/logo3.png" alt=""></a>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-9">
                                <div class="header_menu f-right">
                                    <nav id="mobile-menu">
                                        <ul class="main-menu">
                                            <li><a href="animation.html">About</a></li>
                                            <li><a href="">Octa 3D</a>
                                            <li><a href="#" class="octa-asset-page-btn">Assets</a></li>
                                            <li><a href="#">Scenes</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    `

}

export { mainHeader }