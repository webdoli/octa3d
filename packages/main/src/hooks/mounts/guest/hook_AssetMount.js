
const hookAssetMount = ( main, footer, mount, db, loader ) => {

    main.innerHTML = '';
    footer.removeChild( footer.firstElementChild );
    loader.style.display = 'none';

    const { res } = mount( main, db );
    history.pushState({ data: '에셋' }, 'Asset Page', '/assets');

}

export default hookAssetMount