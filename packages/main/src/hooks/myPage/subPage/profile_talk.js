import { UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIP, UISpan } from "../../../libs/moglUI";

const profileTalkPage = () => {

    let container = new UIDiv();
    
    let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'talk', 'role':'tabpanel', 'aria-labelledby':'nav-talk-tab' });
    let row01 = new UIDiv().setAttr({ 'class':'row' });
    let wrapper = new UIDiv().setAttr({ 'class':'follow-wrapper' });
    let title = new UIH( 'Talk', 4 ).setAttr({ 'class':'h4-title' });
    let row02 = new UIDiv().setAttr({ 'class':'row g-3' });
    let col = new UIDiv().setAttr({ 'class':'col-lg-6' });
    let item = new UIDiv().setAttr({ 'class':'seller-item' });
    let inner = new UIDiv().setAttr({ 'class':'seller-inner' });
    
    let sellerPart = new UIDiv().setAttr({ 'class':'seller-part' });
    let p01 = new UIP().setAttr({ 'class':'assets-number' }).setTextContent('21');
    let assetOwner = new UIDiv().setAttr({ 'class':'assets-owner' });
    let thumb = new UIDiv().setAttr({ 'class':'owner-thumb veryfied' });
    let a01 = new UIA().setAttr({ 'href':'' });
    let img01 = new UIImg().setAttr({ 'src':'', 'alt':'seller-img' });
    let content01 = new UIDiv().setAttr({ 'class':'owner-content' });
    let h01 = new UIH('', 5);
    let h01a01 = new UIA().setAttr({ 'href':'' }).setTextContent('Andrea Guido');
    let p02 = new UIP().setTextContent(`$23,002.98`);

    let followPart = new UIDiv().setAttr({ 'class':'follow-part activefollow' });
    let btn01 = new UIButton().setAttr({ 'class':'btn-follow follow-state' });
    let span01 = new UISpan().setAttr({ 'class':'follow' }).setTextContent('Follow');
    let span01I01 = new UIIcon().setAttr({ 'class':'fa fa-user-plus' });
    let span02 = new UISpan().setAttr({ 'class':'unfollow' }).setTextContent('Unfollow');
    let span03 = new UISpan().setAttr({ 'class':'following' }).setTextContent('Following');

    let loadBtnWrapper = new UIDiv().setAttr({ 'class':'load-btn' });
    let loadA01 = new UIA().setAttr({ 'href':'#', 'class':'default-btn move-bottom' });
    let loadSpan01 = new UISpan().setTextContent('Load More');


    thumb.addSeq( a01, img01 );

    h01.add( h01a01 );
    content01.add( h01, p02 );

    assetOwner.add( thumb, content01 );
    sellerPart.add( p01, assetOwner );

    span01.add( span01I01 );
    btn01.add( span01, span02, span03 );
    followPart.add( btn01 );

    inner.add( sellerPart, followPart );
    row02.addSeq( col, item, inner )

    loadBtnWrapper.addSeq( loadA01, loadSpan01 )

    wrapper.add( title, row02, loadBtnWrapper );
    tabPane.addSeq( row01, wrapper );

    container.add( tabPane );
    
    return container.dom;
}

export default profileTalkPage