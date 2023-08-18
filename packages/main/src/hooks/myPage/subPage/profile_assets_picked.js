import { UIA, UIDiv, UIIcon, UIImg, UILI, UIH, UIP, UISpan, UIUL } from "../../../libs/moglUI"

const profileAssetPicked = () => {

    let tabPane = new UIDiv().setAttr({ 'class':'tab-pane fade', 'id':'picked-assets', 'role':'tabpanel', 'aria-labelledby':'picked-assets-tab' });
    let row = new UIDiv().setAttr({ 'class':'row justify-content-center gx-3 gy-2' });
    let col = new UIDiv().setAttr({ 'class':'col-lg-4 col-sm-6' });
    let item = new UIDiv().setAttr({ 'class':'nft-item' });
    let inner = new UIDiv().setAttr({ 'class':'nft-inner' });

    // top
    let itemTop = new UIDiv().setAttr({ 'class':'nft-item-top d-flex justify-content-between align-items-center' });
    let authorPart = new UIDiv().setAttr({ 'class':'author-part' });
    let topUl = new UIUL().setAttr({ 'class':'author-list d-flex"' });
    let topli01 = new UILI().setAttr({ 'class':'single-author' });
    let toplia01 = new UIA().setAttr({ 'href':'#' });
    let topliImg01 = new UIImg().setAttr({ 'src':'', 'alt':'author-img' });
    let topli02 = new UILI().setAttr({ 'class':'single-author d-flex align-items-center' });
    let toplia02 = new UIA().setAttr({ 'href':'#', 'class':'veryfied' });
    let topliImg02 = new UIImg().setAttr({ 'src':'', 'alt':'author-img' });
    let toplih06 = new UIH('', 6 );
    let topli02a01 = new UIA().setAttr({ 'href':'' }).setTextContent('John Doe');

    // morePart
    let morePart = new UIDiv().setAttr({ 'class':'more-part' });
    let dropStart = new UIDiv().setAttr({ 'class':'dropstart' });
    let moreA01 = new UIA().setAttr({ 
        'class':'dropdown-toggle', 'href':'#', 'role':'button', 'data-bs-toggle':'dropdown', 
        'aria-expanded':'false', 'data-bs-offset':'25,0'
    });
    let moreUl = new UIUL().setAttr({ 'class':'dropdown-menu' });
    let moreLi01 = new UILI();
    let moreLi01A01 = new UIA().setAttr({ 'class':'dropdown-item', 'href':'#' }).setTextContent('Report');
    let moreLi01Span = new UISpan();
    let moreLi01I01 = new UIIcon().setAttr({ 'class':'icofont-warning' });

    let moreLi02 = new UILI();
    let moreLi02A01 = new UIA().setAttr({ 'class':'dropdown-item', 'href':'#' }).setTextContent('Share');
    let moreLi02Span = new UISpan();
    let moreLi02I01 = new UIIcon().setAttr({ 'class':'icofont-reply' });

    
    // bottom
    let bottomItem = new UIDiv().setAttr({ 'class':'nft-item-bottom' });
    let thumb = new UIDiv().setAttr({ 'class':'nft-thumb' });
    let bottomImg = new UIImg().setAttr({ 'src':'', 'alt':'nfg-img' });

    let bottomContent = new UIDiv().setAttr({ 'class':'nft-content' });
    let bottomH04 = new UIH('', 4 );
    let bottomH04A01 = new UIA().setAttr({ 'href':''}).setTextContent('Walking On Air');
    let bottomItem02 = new UIDiv().setAttr({ 'class':'price-like d-flex justify-content-between align-items-center' });
    let bottomConP = new UIP().setAttr({ 'class':'nft-price' }).setTextContent('Price: ');
    let bottomSpan02 = new UISpan().setAttr({ 'class':'yellow-color' }).setTextContent('0.34 ETH');
    let bootomA02 = new UIA().setAttr({ 'class':'nft-like', 'href':'#' });
    let bottomA02I01 = new UIIcon().setAttr({ 'class':'icofont-heart' }).setTextContent('230');

    //load button
    let loadBtn = new UIDiv().setAttr({ 'class':'load-btn' });
    let loadA01 = new UIA().setAttr({ 'href':'#', 'class':'default-btn move-bottom' });
    let loadSpan = new UISpan().setTextContent('Load More');


    topli01.addSeq( toplia01, topliImg01 );
    toplia02.add( topliImg02 );
    toplih06.add( topli02a01 );
    topli02.add( toplia02, toplih06 );
    topUl.add( topli01, topli02 );
    authorPart.add( topUl );

    moreLi01.addSeq( moreLi01A01, moreLi01Span, moreLi01I01 );
    moreLi02.addSeq( moreLi02A01, moreLi02Span, moreLi02I01 );

    moreUl.add( moreLi01, moreLi02 );
    dropStart.add( moreA01, moreUl );
    morePart.add( dropStart );

    itemTop.add( authorPart, morePart );

    thumb.add( bottomImg );
    bottomH04.add( bottomH04A01 );
    bottomConP.add( bottomSpan02 );
    bootomA02.add( bottomA02I01 );

    bottomItem02.add( bottomConP, bootomA02 );
    bottomContent.add( bottomH04, bottomItem02 );

    bottomItem.add( thumb, bottomContent );

    inner.add( itemTop, bottomItem );
    row.addSeq( col, item, inner );

    loadBtn.addSeq( loadA01, loadSpan );
    tabPane.add( row, loadBtn );

    return tabPane;
}

export default profileAssetPicked