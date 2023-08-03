
const hookEditorMount = ( main, footer, mount, db, loader ) => {

    main.innerHTML = '';
    footer.firstChild.style.display = 'none';
    loader.style.display = 'none';

    const { res } = mount( main, db );
    history.pushState({ data: 'Editor' }, 'Editor Page', '/octa3d-editor');

}

export default hookEditorMount