
const profileActivityPage = () => {

    let container = document.createElement('div');
    container.innerHTML += `
    
    <!-- activity Tab -->
    <div class="col-xl-9 tab-pane" id="activity" role="tabpanel" aria-labelledby="nav-activity-tab">
        <div>
            <div class="row">
                <div>
                    <article>
                        <h4 class="h4-title">Author's Activity</h4>
                        <div class="row gy-3">
                            <div class="col-12">
                                <div class="activity-item">
                                    <div class="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                        <div class="lab-thumb me-3 me-md-4">
                                            <img src="assets/images/activity/01.gif" alt="img">
                                        </div>
                                        <div class="lab-content">
                                            <h4><a href="nft-single.html">Gold digger x</a>
                                            </h4>
                                            <p class="mb-2">
                                                GOLD DIGGER (x Antoni Tudisco)
                                                #44/44 was put up for sale for
                                                <b>0.0991 ETH</b>
                                            </p>
                                            <p class="user-id">
                                                By: <a href="author.html">@rasselmrh</a>
                                            </p>
                                            <p>
                                                At: 10/07/2022, 10:03 am
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    `

    return container;
}

export default profileActivityPage