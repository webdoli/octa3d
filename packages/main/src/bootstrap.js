import { mount } from 'assets/Assets';

const mainEle = document.querySelector('#main');

document.querySelector('.octa-asset-page-btn').addEventListener('click', (e) => {

    e.preventDefault();

    mainEle.removeChild( mainEle.firstElementChild );
    
    const userData = {
        name: 'tmp유저', 
        id: 'tmp00',
        login: 'ok'
    }

    const { res } = mount( mainEle, userData );
    console.log('res: ' + res );

});



// document.querySelector('.btn-asset').addEventListener('click', () => {

//     assetPageDOM.removeChild( assetPageDOM.firstElementChild );    
//     const { res } = mount( assetPageDOM );

// });


