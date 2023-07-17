import { OctaUI, UIButton, UIDiv, UIRow } from "../../../libs/octaUI";
import profileAssetUpload from "./profile_assets_upload";
import profileAssetCreated from "./profile_assets_created";
import profileAssetPicked from "./profile_assets_picked";

const profileAssetPage = ( signals ) => {

    let container = new UIDiv();
        container.setAttr({ 'class': 'tab-pane activity-page active', 'id': 'assets-page', 'role': 'tabpanel' });

    let row = new UIRow();
    let article = new OctaUI( document.createElement('article') );
    let activeTab = new UIDiv().setAttr({'class': 'activity-tab'});
    let topUL = new OctaUI( document.createElement('ul') );
        topUL.setAttr({'class':'nav nav-pills mb-30 px-2', 'id':'pills-tab', 'role':'tablist' });

    let tabContent = new UIDiv().setAttr({'class':'tab-content activity-content', 'id':'pills-tabContent'});

    let li01 = new OctaUI( document.createElement('li') ).setAttr({'class':'nav-item', 'role':'presentation'});
    let btn01 = new UIButton( 'Upload Asset' ).setAttr({
        'class':'nav-link', 
        'id':'pills-personal-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#upload-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'upload-assets', 
        'aria-selected':'false'
    });
    let icon01 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-flask'});

    let li02 = new OctaUI( document.createElement('li') ).setAttr({'class': 'nav-item', 'role':'presentation'});
    let btn02 = new UIButton( 'Created' ).setAttr({
        'class':'nav-link active', 
        'id':'pills-groups-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#created-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'created-assets', 
        'aria-selected':'false'
    });
    let icon02 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-puzzle'});

    let li03 = new OctaUI( document.createElement('li') ).setAttr({'class': 'nav-item', 'role':'presentation'});
    let btn03 = new UIButton( 'Picked' ).setAttr({
        'class':'nav-link', 
        'id':'pills-friends-tab',
        'data-bs-toggle': 'pill', 
        'data-bs-target':'#picked-assets', 
        'type':'button', 
        'role':'tab', 
        'aria-controls':'picked-assets', 
        'aria-selected':'false'
    });
    let icon03 = new OctaUI( document.createElement('i') ).setAttr({'class': 'icofont-library'});

    li01.addSeq( btn01, icon01 );
    li02.addSeq( btn02, icon02 );
    li03.addSeq( btn03, icon03 );
    topUL.add( li01, li02, li03 );

    //tap start
    tabContent.add( profileAssetUpload( signals ), profileAssetCreated(), profileAssetPicked() );
    activeTab.add( topUL, tabContent )
    container.addSeq( row, article, activeTab );

    return container.dom;

}

export default profileAssetPage