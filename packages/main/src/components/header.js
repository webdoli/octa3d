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
                    
                    <svg id="icon-mobile-ham" class="active" align="center" viewBox="0 0 80 100" width="40" height="40">
                        <rect y="35" width="55" height="4"></rect>
                        <rect y="50" width="55" height="4"></rect>
                        <rect y="65" width="55" height="4"></rect>
                    </svg>
                    <svg id="icon-mobile-exit" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
                    </svg>
                    
                </div>
            </div>
        </nav>
    `;


    return container;

}

export default Header;