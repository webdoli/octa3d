
const hookEditorMount = ( main, footer, mount, db, loader, assetParam ) => {

    main.innerHTML = '';
    footer.firstChild.style.display = 'none';
    loader.style.display = 'none';

    let params = ( assetParam ) ? assetParam : '';
    const { res } = mount( { el:main, params:params } );
    history.pushState({ data: 'Editor' }, 'Editor Page', '/octa3d-editor');

}

export default hookEditorMount