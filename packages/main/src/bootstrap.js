import { mount, db } from 'assets/Assets';

//const assetPageDOM = document.querySelector('.section-content');

//mount( '' );

document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();

    console.log('asset페이지 이동');
    const userData = {
        name: 'tmp유저',
        id: 'tmp00',
        login: true
    }

    // 1]파이어베이스 리얼타임
    // 2]로컬스토러지 활용
    const { res } = db( userData );
    

    console.log('res: ' + res );

})

// document.querySelector('.btn-asset').addEventListener('click', () => {

//     assetPageDOM.removeChild( assetPageDOM.firstElementChild );    
//     const { res } = mount( assetPageDOM );

// });


