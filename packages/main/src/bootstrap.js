import { mount } from 'assets/Assets';

const assetPageDOM = document.querySelector('.section-content');

document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();

    console.log('asset페이지 이동');
    const userData = {
        name: 'tmp유저',
        id: 'tmp00',
        login: true
    }

    const { res } = mount( userData );

    console.log('res: ' + res );

})

// document.querySelector('.btn-asset').addEventListener('click', () => {

//     assetPageDOM.removeChild( assetPageDOM.firstElementChild );    
//     const { res } = mount( assetPageDOM );

// });


