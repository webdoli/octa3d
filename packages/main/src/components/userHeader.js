import HeaderCSS from "./headerStyle";

const UserHeader = () => {

    let container = document.createElement('div');
        container.id = 'sticker';
        container.className = 'mogl3d-main-header-area mogl3d-main-header-area-2';

    let headerStyle = document.createElement('style');
        headerStyle.id = 'main-header-style';
        headerStyle.innerHTML += HeaderCSS();

    container.appendChild( headerStyle );
    container.innerHTML += `
        <nav class="mogl3d-main-header-nav">
            <div class="mogl3d-main-container">       
                <div class="mogl3d-main-header-logo">
                    <a class="mogl3d-navbar-brand" href="/">
                        <img class="main-logo img-fluid" style="width:55px;margin:0;" src="img/logo/cghub_logo01.png" alt="logo">
                        <span class="main-logo-title" style="margin-left:20px;">MoGL 3D</span>
                    </a>
                    <!--<a href="/"><img src="img/logo/cghubLogo02.png" style="width:55%;margin-left:20px;" alt=""></a>-->
                </div>
                <ul class="mogl3d-main-menu">
                    <li><a href="/">About</a></li>
                    <li><a href="/mogl3d-editor">MoGL3D</a>
                    <li><a href="/assets">Assets</a></li>
                    <!--<li><a href="/">Scenes</a></li>-->
                    <li><a href="https://mogl3d.tistory.com/" target="_blank">Blog</a></li>
                    <div class="mogl3d-login-guest" style="margin-left:40px;">
                        <ul>
                            <li><a href="/mypage">MY PAGE</a></li>
                            <li><a href="#" class="mogl3d-logout-btn">LOGOUT</a></li>
                        </ul>
                    </div>
                </ul>
    
            </div>
            <div class="mogl3d-mobile">
                <div class="mogl3d-main-container-mobile">
                    <div class="mogl3d-main-header-logo-mobile">
                        <a class="mogl3d-navbar-brand" href="/">
                            <img src="img/logo/cghub_logo01.png" style="width:35px;" alt="">
                            <span class="mobile-main-logo-icon">MOGL3D</span>
                        </a>
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
    
    return container

}


export default UserHeader
