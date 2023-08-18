
const hookEditorMount = ( main, footer, mount, db, loader, assetParam ) => {

    main.innerHTML = '';
    if(footer.firstChild) footer.firstChild.style.display = 'none';
    if( loader ) loader.style.display = 'none';

    let params = ( assetParam ) ? assetParam : '';
    const { res } = mount( { el:main, params:params } );
    history.pushState({ data: 'Editor' }, 'Editor Page', '/mogl3d-editor');

}

export default hookEditorMount