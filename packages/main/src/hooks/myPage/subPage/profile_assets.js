

const profileAssetPage = () => {

    let container = document.createElement('div');
    container.innerHTML += `
    
    <div class="col-xl-9 tab-pane activity-page active" id="assets-page" role="tabpanel">                        
        <div class="row">
            <div>
                <article>
                    <div class="activity-tab">
                        <ul class="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-personal-tab"
                                    data-bs-toggle="pill" data-bs-target="#upload-assets"
                                    type="button" role="tab" aria-controls="upload-assets"
                                    aria-selected="false">
                                    <i class="icofont-flask"></i>
                                    Upload Asset
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-groups-tab"
                                    data-bs-toggle="pill" data-bs-target="#created-assets"
                                    type="button" role="tab" aria-controls="created-assets"
                                    aria-selected="false"><i class="icofont-puzzle"></i>
                                    Created
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-friends-tab"
                                    data-bs-toggle="pill" data-bs-target="#picked-assets"
                                    type="button" role="tab" aria-controls="picked-assets"
                                    aria-selected="false"><i class="icofont-library"></i>
                                    Picked
                                </button>
                            </li>
                            <li class="custom-select">
                                <select>
                                    <option value="1">All</option>
                                    <option value="2">Recent</option>
                                    <option value="3">Relevant</option>
                                    <option value="4">Popular</option>
                                </select>
                            </li>
                        </ul>
                        <div class="tab-content activity-content" id="pills-tabContent">
                            <div class="tab-pane" id="upload-assets" role="tabpanel"
                                aria-labelledby="pills-personal-tab">
                                <div class="row">
                                    <div class="col">
                                        <!-- Upload Assets -->
                                        <div class="create-nft py-5 px-4">
                                            <form class="create-nft-form">
                                            <!-- upload field -->
                                                <div class="upload-item mb-30">
                                                    <p>FBX,OBJ,GLTF (Max-30mb)</p>
                                                    <div class="custom-upload">
                                                        <div class="file-btn">
                                                            <i class="icofont-upload-alt"></i>
                                                                Upload a file
                                                        </div>
                                                        <input type="file">
                                                    </div>
                                                </div>
                                                <!-- item name input -->
                                                <div class="form-floating item-name-field mb-3">
                                                    <input type="text" class="form-control"
                                                        id="itemNameInput"
                                                        placeholder="Item Name">
                                                    <label for="itemNameInput">
                                                        Item Name
                                                    </label>
                                                </div>
                                                <!-- item-description -->
                                                <div class="form-floating item-desc-field mb-30">
                                                    <textarea class="form-control"
                                                        placeholder="Item Description"
                                                        id="itemDesc">
                                                    </textarea>
                                                    <label for="itemDesc">
                                                        Item Description
                                                    </label>
                                                </div>
                                                <!-- item-category -->
                                                <div class="item-category-field mb-30">
                                                    <h4>Select Item Catergory</h4>
                                                    <!--<ul class="item-cat-list d-flex flex-wrap">
                                                        <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Interior </li>
                                                        <li class="item-cat-btn active"><span><i class="icofont-vector-path"></i></span> Vehicle </li>
                                                    </ul>-->
                                                </div>
                                                <!-- item price -->
                                                <div class="item-price-field mb-3">
                                                    <div class="row g-3">
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <select class="form-select"
                                                                    id="selectCrypto"
                                                                    aria-label="Floating label select">
                                                                    <option selected> Building & Architecture </option>
                                                                    <option value="1"> Interior </option>
                                                                    <option value="2"> Vehicles </option>
                                                                    <option value="3"> Electronics </option>
                                                                    <option value="4"> Humans & Characters </option>
                                                                    <option value="5"> Weapons & Amor </option>
                                                                    <option value="6"> Food </option>
                                                                    <option value="7"> Clothes & Accessories </option>
                                                                    <option value="8"> Mecatronics & Parts </option>
                                                                    <option value="9"> Anatomy </option>
                                                                    <option value="10"> Sports </option>
                                                                    <option value="11"> Animals </option>
                                                                    <option value="12"> Fantasy & Fiction </option>
                                                                </select>
                                                                <label for="selectCrypto">Select Currency</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-floating">
                                                                <select class="form-select">
                                                                    <option selected> yes </option>
                                                                    <option value="1"> no </option>
                                                                </select>
                                                                <label for="selectCrypto">Texture included</label>
                                                                <!--<input type="text"
                                                                    class="form-control"
                                                                    id="itemPriceInput"
                                                                    placeholder="Item Price">
                                                                <label for="itemPriceInput">
                                                                    Item Price
                                                                </label>-->
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-floating">
                                                                <select class="form-select">
                                                                    <option selected> yes </option>
                                                                    <option value="1"> no </option>
                                                                </select>
                                                                <label for="selectCrypto">Rig included</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Royalites, Size & copy -->
                                                <div class="item-price-field mb-5">
                                                    <div class="row g-3 justify-content-center">
                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="form-floating">
                                                                <select class="form-select">
                                                                    <option selected> blender </option>
                                                                    <option value="1"> maya </option>
                                                                    <option value="1"> max </option>
                                                                    <option value="1"> c4d </option>
                                                                    <option value="1"> houdini </option>
                                                                    <option value="1"> cad </option>
                                                                </select>
                                                                <label for="selectCrypto">Made by</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="form-floating">
                                                                <select class="form-select">
                                                                    <option selected> yes </option>
                                                                    <option value="1"> no </option>
                                                                </select>
                                                                <label for="selectCrypto"> Public </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="form-floating">
                                                                <input type="text"
                                                                    class="form-control"
                                                                    id="itemNumbersInput"
                                                                    placeholder="License">
                                                                <label for="itemNumbersInput">  
                                                                    License
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- submit button -->
                                                <div class="submit-btn-field text-center">
                                                    <button type="submit">Create Item</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tab-pane show active" id="created-assets" role="tabpanel"
                                aria-labelledby="created-assets-tab">
                                <div class="row justify-content-center gx-3 gy-2">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="nft-item">
                                            <div class="nft-inner">
                                                <!-- nft top part -->
                                                <h2>Created Page</h2>
                                                <div class="nft-item-top d-flex justify-content-between align-items-center">
                                                    <div class="author-part">
                                                        <ul class="author-list d-flex">
                                                            <li class="single-author">
                                                                <a href="author.html">
                                                                    <img src="assets/images/seller/02.png" alt="author-img">
                                                                </a>
                                                            </li>
                                                            <li class="single-author d-flex align-items-center">
                                                                <a href="author.html" class="veryfied">
                                                                    <img src="assets/images/seller/04.png" alt="author-img">
                                                                </a>
                                                                <h6>
                                                                    <a href="author.html">Jhon Doe</a>
                                                                </h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="more-part">
                                                        <div class=" dropstart">
                                                            <a class=" dropdown-toggle"
                                                                href="#" role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                data-bs-offset="25,0">
                                                                <i class="icofont-flikr"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span><i class="icofont-warning"></i></span> Report 
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span><i class="icofont-reply"></i></span>Share
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                        <img src="assets/images/nft-item/03.gif"
                                                            alt="nft-img">
                                                        <!-- nft countdwon -->
                                                        <!-- <ul class="nft-countdown count-down"
                                                            data-date="July 05, 2022 21:14:01">
                                                            <li>
                                                                <span class="days">34</span>
                                                                <span class="count-txt">D</span>
                                                            </li>
                                                            <li>
                                                                <span class="hours">09</span>
                                                                <span class="count-txt">H</span>
                                                            </li>
                                                            <li>
                                                                <span class="minutes">32</span>
                                                                <span class="count-txt">M</span>
                                                            </li>
                                                            <li>
                                                                <span class="seconds">32</span>
                                                                <span class="count-txt">S</span>
                                                            </li>
                                                        </ul> -->
                                                    </div>
                                                    <div class="nft-content">
                                                        <h4>
                                                            <a href="item-details.html"> Walking On Air </a>
                                                        </h4>
                                                        <div class="price-like d-flex justify-content-between align-items-center">
                                                            <p class="nft-price">Price: <span class="yellow-color"> 0.34 ETH </span></p>
                                                            <a href="#" class="nft-like"><i class="icofont-heart"></i> 230 </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="load-btn">
                                    <a href="#" class="default-btn move-bottom"><span> Load More </span></a>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="picked-assets" role="tabpanel"
                                aria-labelledby="picked-assets-tab">
                                <div class="row justify-content-center gx-3 gy-2">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="nft-item">
                                            <div class="nft-inner">
                                                <!-- nft top part -->
                                                <div class="nft-item-top d-flex justify-content-between align-items-center">
                                                    <div class="author-part">
                                                        <ul class="author-list d-flex">
                                                            <li class="single-author">
                                                                <a href="author.html">
                                                                    <img src="assets/images/seller/05.png"
                                                                        alt="author-img">
                                                                </a>
                                                            </li>
                                                            <li class="single-author d-flex align-items-center">
                                                                <a href="author.html" class="veryfied">
                                                                    <img src="assets/images/seller/05.gif"
                                                                        alt="author-img">
                                                                </a>
                                                                <h6><a href="author.html">Jhon Doe</a></h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="more-part">
                                                        <div class=" dropstart">
                                                            <a class=" dropdown-toggle"
                                                                href="#" role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                data-bs-offset="25,0">
                                                                <i class="icofont-flikr"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span><i class="icofont-warning"></i></span> Report 
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span><i class="icofont-reply"></i></span> Share 
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                        <img src="assets/images/nft-item/06.gif" alt="nft-img">
                                                        <!-- nft countdwon -->
                                                        <!-- <ul class="nft-countdown count-down"
                                                            data-date="July 05, 2022 21:14:01">
                                                            <li>
                                                                <span
                                                                    class="days">34</span><span
                                                                    class="count-txt">D</span>
                                                            </li>
                                                            <li>
                                                                <span
                                                                    class="hours">09</span><span
                                                                    class="count-txt">H</span>
                                                            </li>
                                                            <li>
                                                                <span
                                                                    class="minutes">32</span><span
                                                                    class="count-txt">M</span>
                                                            </li>
                                                            <li>
                                                                <span
                                                                    class="seconds">32</span><span
                                                                    class="count-txt">S</span>
                                                            </li>
                                                        </ul> -->
                                                    </div>
                                                    <div class="nft-content">
                                                        <h4>
                                                            <a href="item-details.html">Walking On Air</a>
                                                        </h4>
                                                        <div class="price-like d-flex justify-content-between align-items-center">
                                                            <p class="nft-price">Price:
                                                                <span class="yellow-color">0.34 ETH </span>
                                                            </p>
                                                            <a href="#" class="nft-like">
                                                                <i class="icofont-heart"></i>230
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="load-btn">
                                    <a href="#" class="default-btn move-bottom">
                                        <span>Load More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    `
    return container
}

export default profileAssetPage