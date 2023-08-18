import { MoglUI, UIA, UIDiv, UIH, UIImg, UIP } from "../../../libs/moglUI";

const profileActivityPage = () => {

    let container = new UIDiv();

    let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'activity', 'role':'tabpanel', 'aria-labelledby':'nav-activity-tab' });
    let row = new UIDiv().setAttr({ 'class':'row' });

    let div01 = new UIDiv();
    let article = new MoglUI( document.createElement('article') );
    let artH04 = new UIH( 'Author Activity', 4 ).setAttr({ 'class':'h4-title' });
    let innerRow = new UIDiv().setAttr({ 'class':'row gy-3' });
    let artCol = new UIDiv().setAttr({ 'class':'col-12' });
    let actItem = new UIDiv().setAttr({ 'class':'activity-item' });
    let labInner = new UIDiv().setAttr({ 'class':'lab-inner d-flex flex-wrap align-items-center p-3 p-md-4' });
    let labThumb = new UIDiv().setAttr({ 'class':'lab-thumb me-3 me-md-4' });
    let thumbImg = new UIImg().setAttr({ 'src':'', 'alt':'img' });
    let labContent = new UIDiv().setAttr({ 'class':'lab-content' });
    let labConH04 = new UIH( '', 4 );
    let labConA01 = new UIA().setAttr({ 'href':'#' }).setTextContent('Gold digger x');
    let labConP01 = new UIP().setAttr({ 'class':'mb-2' }).setTextContent(`GOLD DIGGER (x Antoni Tudisco) #44/44 was put up for sale for`);
    let b01 = new MoglUI( document.createElement('b') ).setTextContent('0.0991 ETH');
    let labConP02 = new UIP().setAttr({ 'class':'user-id' }).setTextContent(`By:`);
    let labConP01A01 = new UIA().setAttr({ 'href':'#' }).setTextContent('@rasselmrh');
    let labConP03 = new UIP().setTextContent('At: 10/07/2022, 10:03 am');
    
    labThumb.add( thumbImg );
    labConH04.add( labConA01 );
    labConP02.add( labConP01A01 );
    labConP01.add( b01 );
    labContent.add( labConH04, labConP01, labConP02, labConP03 );
    labInner.add( labThumb, labContent );
    innerRow.addSeq( artCol, actItem, labInner );
    article.add( artH04, innerRow );
    tabPane.addSeq( row, div01, article );

    container.add( tabPane );

    return container.dom;

}

export default profileActivityPage