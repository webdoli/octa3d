import { db } from 'assets/Assets';

//const assetPageDOM = document.querySelector('.section-content');


document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();

    window.open('http://localhost:8081/')
        .postMessage('이주헌', '*')

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


