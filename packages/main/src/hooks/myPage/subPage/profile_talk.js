
const profileTalkPage = () => {

    let container = document.createElement('div');
    container.innerHTML += `
    
    <!-- Talk Tab -->
    <div class="tab-pane" id="talk" role="tabpanel" aria-labelledby="nav-talk-tab">
        <div class="row">
            <div class="follow-wrapper">
                <h4 class="h4-title"> Talk </h4>
                <div class="row g-3">
                    <div class="col-lg-6">
                        <div class="seller-item">
                            <div class="seller-inner">
                                <div class="seller-part">
                                    <p class="assets-number">21</p>
                                    <div class="assets-owner">
                                        <div class="owner-thumb veryfied">
                                            <a href="author.html">
                                                <img src="assets/images/seller/02.png" alt="seller-img">
                                            </a>
                                        </div>
                                        <div class="owner-content">
                                            <h5><a href="author.html"> Andrea Guido </a></h5>
                                            <p>$23,002.98</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="follow-part activefollow">
                                    <button class="btn-follow follow-state">
                                        <span class="follow"><i class="fa fa-user-plus"></i> Follow </span>
                                        <span class="unfollow"> Unfollow </span>
                                        <span class="following"> Following </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="load-btn">
                    <a href="#" class="default-btn move-bottom"><span> Load More </span></a>
                </div>
            </div>
        </div>
    </div>
    `

    return container;
}

export default profileTalkPage