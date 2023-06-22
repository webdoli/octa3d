import { db } from 'assets/Assets';

//const assetPageDOM = document.querySelector('.section-content');

// function openWithData( url, data ) {

//     window.open(url)
//         .postMessage( data, url );

//  }

document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();
    const userData = {
        name: 'tmp유저',
        id: 'tmp00',
        login: 'ok'
    }

    //openWithData( 'http://localhost:8081', '이주헌' )

    var newWin = window.open('http://localhost:8081/')
    newWin.name = '이주헌';

    // 1]파이어베이스 리얼타임
    // 2]로컬스토러지 활용
    const { res } = db( userData );
    
    console.log('res: ' + res );

});



// document.querySelector('.btn-asset').addEventListener('click', () => {

//     assetPageDOM.removeChild( assetPageDOM.firstElementChild );    
//     const { res } = mount( assetPageDOM );

// });


