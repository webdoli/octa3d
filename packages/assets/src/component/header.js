import { MoglUI, UIButton, UIDiv, UIIcon, UIInput } from "../lib/moglUI";

const Header = () => {

    const headerSection = new UIDiv().setAttr({ 'class':'section-header' });
    const fileterWrap = new UIDiv().setAttr({ 'class':'nft-filter d-flex flex-wrap justify-content-center' });

    const formFields01 = new UIDiv().setAttr({ 'class':'form-floating' });
    const formFieldsSlc = new MoglUI( document.createElement('select'))
        .setAttr({ 
            'class':'form-select',
            'id':'catSelect', 
            'aria-label':'Floating label select example',
        });

    

    const formFieldsOption01 = new MoglUI( document.createElement('option')).setAttr({ 'selected':''}).setTextContent('All Category');
    const formFieldsOption02 = new MoglUI( document.createElement('option')).setAttr({ 'value':'1'}).setTextContent('Art');
    const formFieldsOption03 = new MoglUI( document.createElement('option')).setAttr({ 'value':'2'}).setTextContent('Music');
    const formFieldsOption04 = new MoglUI( document.createElement('option')).setAttr({ 'value':'3'}).setTextContent('Video');
    const formFieldsOption05 = new MoglUI( document.createElement('option')).setAttr({ 'value':'4'}).setTextContent('Digital Anime');
    const formFieldsLabel = new MoglUI( document.createElement('label')).setAttr({ 'for':'cateSelect'}).setTextContent('Select 카테고리');

    const formSort = new UIDiv().setAttr({ 'class':'form-floating' });
    const formSortSlc = new MoglUI( document.createElement('select'))
        .setAttr({ 'class':'form-select', 'id':'sortSelect', 'aria-label':'Floating label select example' });

    const formSortOption01 = new MoglUI( document.createElement('option')).setAttr({ 'selected':''}).setTextContent('Newest');
    const formSortOption02 = new MoglUI( document.createElement('option')).setAttr({ 'value':'1'}).setTextContent('Trending');
    const formSortOption03 = new MoglUI( document.createElement('option')).setAttr({ 'value':'2'}).setTextContent('Most Viewed');
    const formSortOption04 = new MoglUI( document.createElement('option')).setAttr({ 'value':'3'}).setTextContent('Less Viewed');
    const formSortOption05 = new MoglUI( document.createElement('option')).setAttr({ 'value':'4'}).setTextContent('Ending Soon');
    const formSortOption06 = new MoglUI( document.createElement('option')).setAttr({ 'value':'5'}).setTextContent('Recently Sold');
    const formSortOption07 = new MoglUI( document.createElement('option')).setAttr({ 'value':'6'}).setTextContent('Recently Created');
    const formSortOption08 = new MoglUI( document.createElement('option')).setAttr({ 'value':'7'}).setTextContent('Recently Viewed');
    const formSortOption09 = new MoglUI( document.createElement('option')).setAttr({ 'value':'8'}).setTextContent('Ending Soon');
    const formSortLabel = new MoglUI( document.createElement('label')).setAttr({ 'for':'sortSelect'}).setTextContent('Sort By');

    

    const searchIpt = new UIInput().setAttr({ 'class':'form-control', 'type':'text', 'id':'nftSearch', 'placeholder':'Search Assets' });
    const searchLabel = new MoglUI( document.createElement('label') ).setAttr({ 'for':'nftSearch' }).setTextContent('Search 3D Assets');
    const searchBtn = new UIButton().setAttr({ 'type':'button' });
    const searchIcon = new UIIcon().setAttr({ 'class':'icofont-search-1' });

    const searchInner = new UIDiv().setAttr({ 'class':'form-floating nft-search-input' });
    const searchWrap = new UIDiv().setAttr({ 'class':'nft-search' });


    //conversion
    formFieldsSlc.add( formFieldsOption01, formFieldsOption02, formFieldsOption03, formFieldsOption04, formFieldsOption05 );
    formFields01.add( formFieldsSlc, formFieldsLabel );
    fileterWrap.add( formFields01, formSort );

    formSortSlc.add( 
        formSortOption01, 
        formSortOption02, 
        formSortOption03, 
        formSortOption04, 
        formSortOption05, 
        formSortOption06, 
        formSortOption07, 
        formSortOption08, 
        formSortOption09, 
    );

    formSort.add( formSortSlc, formSortLabel );

    searchBtn.add( searchIcon );
    searchInner.add( searchIpt, searchLabel, searchBtn );
    searchWrap.add( searchInner );

    headerSection.add( fileterWrap, searchWrap )

    return headerSection

}

export default Header;