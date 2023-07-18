import { UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIP, UISpan } from "../../../libs/octaUI";

const profileCoworkPage = () => {

    let container = new UIDiv();
    
    let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'coworking', 'role':'tabpanel', 'aria-labelledby':'nav-coworking-tab' });
    let row01 = new UIDiv().setAttr({ 'class':'row' });
    let div01 = new UIDiv();

    let wrapper = new UIDiv().setAttr({ 'class':'follow-wrapper' });
    let h04 = new UIH( 'CoWorking', 4 ).setAttr({ 'class':'h4-title' });
    let row02 = new UIDiv().setAttr({ 'class':'row g-3' });
    let col01 = new UIDiv().setAttr({ 'class':'col-lg-6' });
    let item = new UIDiv().setAttr({ 'class':'seller-item' });
    let inner = new UIDiv().setAttr({ 'class':'seller-inner' });
    let sellerPart = new UIDiv().setAttr({ 'class':'seller-part' });
    let assetNum = new UIP().setAttr({ 'class':'assets-number' }).setTextContent('21');
    let assetOwner = new UIDiv().setAttr({ 'class':'assets-owner' });
    let ownerThumb = new UIDiv().setAttr({ 'class':'owner-thumb veryfied' });
    let ownerA01 = new UIA().setAttr({ 'href':'' });
    let ownerImg = new UIImg().setAttr({ 'src':'', 'alt':'seller-img' });
    let ownerContent = new UIDiv().setAttr({ 'class':'owner-content' });
    let ownerConH05 = new UIH( '', 5 );
    let ownerConH05A01 = new UIA().setAttr({ 'href':'' }).setTextContent('Andrea Guido');
    let ownerConP01 = new UIP().setTextContent('$23,002.98');

    let followPart = new UIDiv().setAttr({ 'class':'follow-part' });
    let part2Btn = new UIButton().setAttr({ 'class':'btn-follow follow-state' });
    let part2Span01 = new UISpan().setAttr({ 'class':'follow' }).setTextContent('Follow');
    let part2Icon01 = new UIIcon().setAttr({ 'class':'fa fa-user-plus' });
    let part2Span02 = new UISpan().setAttr({ 'class':'unfollow' }).setTextContent('Unfollow');
    let part2Span03 = new UISpan().setAttr({ 'class':'following' }).setTextContent('Following');

    let loadBtnDiv = new UIDiv().setAttr({ 'class':'load-btn' });
    let loadBtnA01 = new UIA().setAttr({ 'href':'#', 'class':'default-btn move-bottom' });
    let loadBtnSpan01 = new UISpan().setTextContent('Load More');

    ownerThumb.addSeq( ownerA01, ownerImg );

    ownerConH05.add( ownerConH05A01 );
    ownerContent.add( ownerConH05, ownerConP01 );

    assetOwner.add( ownerThumb, ownerContent );
    sellerPart.add( assetNum, assetOwner );

    part2Span01.add( part2Icon01 );
    part2Btn.add( part2Span01, part2Span02, part2Span03 );
    followPart.add( part2Btn )
    inner.add( sellerPart, followPart );

    row02.addSeq( col01, item, inner )
    loadBtnDiv.addSeq( loadBtnA01, loadBtnSpan01 );

    wrapper.add( h04, row02, loadBtnDiv );
    tabPane.addSeq( row01, div01, wrapper )

    container.add( tabPane );

    return container.dom;
}

export default profileCoworkPage