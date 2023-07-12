
const profileAside = () => {

    let container = document.createElement('div');
    container.className = 'col-xl-3'

    container.innerHTML += `
    <!-- Aside Part -->
        <aside class="mt-5 mt-xl-0" style="padding-left:15px;">
            <div class="profile-widget search-widget">
                <div class="widget-inner">
                    <div class="widget-title">
                        <h5>Search NFT</h5>
                    </div>
                    <div class="widget-content">
                        <p>Search from best Rarest NFT collections</p>
                        <div class="form-floating nft-search-input">
                            <input type="text" class="form-control"
                                placeholder="Search NFT">
                            <label>Search NFT</label>
                            <button type="button">
                                <i class="icofont-search-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget widget-instagram">
                <div class="widget-header">
                    <h5 class="title">Featured NFT</h5>
                </div>
                <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                    <li><a data-rel="lightcase"
                            href="assets/images/nft-item/01.jpg">
                            <img loading="lazy"
                                 src="assets/images/nft-item/01.jpg"
                                 alt="nft-img">
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    `;

    return container;
}

export default profileAside