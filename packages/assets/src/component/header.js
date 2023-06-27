
const Header = () => {

    const content = `
        <div class="section-header">
            <div class="nft-filter d-flex flex-wrap justify-content-center">
                <div class="form-floating">
                    <select class="form-select" id="catSelect" aria-label="Floating label select example">
                        <option selected>All Category</option>
                        <option value="1">Art</option>
                        <option value="2">Music</option>
                        <option value="3">Video</option>
                        <option value="3">Digital Anime</option>
                    </select>
                    <label for="catSelect">Select 카테고리</label>
                </div>
                <div class="form-floating">
                    <select class="form-select" id="sortSelect" aria-label="Floating label select example">
                        <option selected>Newest</option>
                        <option value="1">Trending</option>
                        <option value="2">Most Viewed</option>
                        <option value="3">Less Viewed</option>
                        <option value="3">Ending Soon</option>
                        <option value="3">Recently Sold </option>
                        <option value="3">Recently Created </option>
                        <option value="3">Recently Viewed </option>
                        <option value="3">Ending Soon</option>
                    </select>
                    <label for="sortSelect">Sort By</label>
                </div>
            </div>
            <div class="nft-search">
                <div class="form-floating nft-search-input">
                    <input type="text" class="form-control" id="nftSearch" placeholder="Search NFT">
                    <label for="nftSearch">Search NFT</label>
                    <button type="button"> <i class="icofont-search-1"></i></button>
                </div>
            </div>
        </div>
    `

    return content

}

export default Header;