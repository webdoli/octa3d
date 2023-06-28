import HeaderCSS from "./headerStyle";

const Header = () => {

    let container = document.createElement('div');
    container.id = 'sticker';
    container.className = 'octa3d-main-header-area octa3d-main-header-area-2';

    let headerStyle = document.createElement('style');
        headerStyle.id = 'main-header-style';
        headerStyle.innerHTML += HeaderCSS();

    container.appendChild( headerStyle );

    container.innerHTML += `
        <nav class="octa3d-main-header-nav">
            <div class="octa3d-main-container">       
                <div class="octa3d-main-header-logo">
                    <a href="/"><img src="img/logo/logo3.png" alt=""></a>
                </div>
                <ul class="octa3d-main-menu">
                    <li><a href="animation.html">About</a></li>
                    <li><a href="">Octa 3D</a>
                    <li><a href="#" class="octa-asset-page-btn">Assets</a></li>
                    <li><a href="#">Scenes</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="octa3d-mobile">
                <div class="octa3d-main-container-mobile">
                    <div class="octa3d-main-header-logo-mobile">
                        <a href="/"><img src="img/logo/logo3.png" alt=""></a>
                    </div>
                    <svg align="center" viewBox="0 0 80 100" width="40" height="40">
                        <rect y="25" width="85" height="5"></rect>
                        <rect y="50" width="85" height="5"></rect>
                        <rect y="75" width="85" height="5"></rect>
                    </svg>
                </div>
            </div>
        </nav>
    `;

    return container;

}

export default Header;