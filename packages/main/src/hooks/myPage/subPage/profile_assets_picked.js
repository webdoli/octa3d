import { UIDiv, UIH, UIUL, UILI, UIP, UIA, UIImg, UIIcon, UISpan } from "../../../libs/octaUI"

const profileAssetPicked = () => {

    const tapPane = new UIDiv().setAttr({ 'class': 'tab-pane show active', 'id': 'created-assets', 'role': 'tabpanel', 'aria-labelledby':'created-assets-tab' });
    let row = new UIDiv().setAttr({ 'class': 'row justify-content-center gx-3 gy-2' });
    let col = new UIDiv().setAttr({ 'class': 'col-lg-4 col-sm-6'});
    let item = new UIDiv().setAttr({ 'class': 'nft-item' });
    let inner = new UIDiv().setAttr({ 'class': 'nft-inner' });
    
    let h02 = new UIH( 'Created Page', 2 );
    let itemTop = new UIDiv().setAttr({ 'class': 'nft-item-top d-flex justify-content-between align-items-center' });
    
    let authorPart = new UIDiv().setAttr({ 'class': 'author-part' });
    
    let ul01 = new UIUL().setAttr({ 'class': 'author-list d-flex' });
    let li01 = new UILI().setAttr({ 'class': 'single-author' });
    let a01 = new UIA('#');
    let img01 = new UIImg().setAttr({ 'src': '', 'alt': 'author-img' });

    let li02 = new UILI().setAttr({ 'class': 'single-author d-flex align-items-center' });
    let a02 = new UIA('#').setAttr({ 'class': 'veryfied' });
    let img02 = new UIImg().setAttr({ 'src': '', 'alt': 'author-img' });
    let h06 = new UIH('', 6 );
    let a02_1 = new UIA('#').setTextContent('John Doe');

    let morePart = new UIDiv().setAttr({ 'class': 'more-part' });
    let dropStart = new UIDiv().setAttr({ 'class': 'dropstart' });
    let dropA = new UIA().setAttr({ 'class': 'dropdown-toggle', 'href':'#', 'role':'button', 'data-bs-toggle':'dropdown', 'aria-expanded': 'false', 'data-bs-offset': '25,0' });
    let icon01 = new UIIcon().setAttr({ 'class': 'icofont-flikr'});

    let dropUL = new UIUL().setAttr({ 'class': 'dropdown-menu'});
    let li03 = new UILI();
    let a03 = new UIA().setAttr({ 'class':'dropdown-item', 'href': '#' }).setTextContent('Report');
    let span01 = new UISpan();
    let icon02 = new UIIcon().setAttr({ 'class': 'icofont-warning' });

    let li04 = new UILI();
    let a04 = new UIA().setAttr({ 'class':'dropdown-item', 'href': '#' }).setTextContent('Share');
    let span02 = new UISpan();
    let icon03 = new UIIcon().setAttr({ 'class': 'icofont-reply' })


    // bottom
    let itemBottom = new UIDiv().setAttr({ 'class': 'nft-item-bottom' });
    let thumn = new UIDiv().setAttr({ 'class': 'nft-thumb' });
    let bottomImg = new UIImg().setAttr({'src':'', 'alt':'nft-img'});

    let bottomContent = new UIDiv().setAttr({ 'class': 'nft-content' });
    let bootomH4 = new UIH('', 4 );
    let bottmH4a = new UIA().setTextContent('Walking On Air');

    let bottomItem = new UIDiv().setAttr({ 'class': 'price-like d-flex justify-content-between align-items-center' });
    let bottomP = new UIP('Price: ').setAttr({'class':'nft-price'});
    let bottomSpan = new UISpan().setAttr({ 'class':'yellow-color'}).setTextContent('0.34 ETH');
    let bottoma01 = new UIA().setAttr({ 'class':'nft-like', 'href':'#' }).setTextContent('230');
    let bottomIcon = new UIIcon().setAttr({'class':'icofont-heart'});

    //load btn
    let loadBtn = new UIDiv().setAttr({ 'class':'load-btn' });
    let loadA01 = new UIA().setAttr({ 'href':'#', 'class':'default-btn move-bottom' });
    let loadSpan = new UISpan().setTextContent('Load More');


    li01.addSeq( a01, img01 );
    a02.add( img02 );
    h06.add( a02_1 );
    li02.add( a02, h06 );
    ul01.add( li01, li02 );
    authorPart.add( ul01 );

    dropA.add( icon01 );
    li03.addSeq( a03, span01, icon02 );
    li04.addSeq( a04, span02, icon03 );
    dropUL.add( li03, li04 );
    dropStart.add( dropA, dropUL );
    morePart.add( dropStart );


    itemTop.add( authorPart, morePart );

    thumn.add( bottomImg );
    bootomH4.add( bottmH4a );

    bottomP.add( bottomSpan );
    bottoma01.add( bottomIcon );
    bottomItem.add( bottomP, bottoma01 );

    bottomContent.add( bootomH4, bottomItem )

    itemBottom.add( thumn, bottomContent );
    inner.add( h02, itemTop, itemBottom );
    row.addSeq( col, item, inner  );

    loadBtn.addSeq( loadA01, loadSpan );
    tapPane.add( row, loadBtn );

    return tapPane;

}

export default profileAssetPicked