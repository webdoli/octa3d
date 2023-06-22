console.log('로그인 name: ' + window.name );

// window.onload = () => {
//     window.addEventListener( 'message', ( evt ) => {

//         if( evt.origin !== 'http://localhost:8081') return;
    
//         console.log( evt.data );
    
//     })
// }


const mount = ( el ) => {

    //console.log('el: ' + el );

    return {

        res: '@@ 에셋 페이지 유저DB window 저장 @@'

    }
}

if( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#asset-root');

    if( devRoot ) {
        mount( devRoot )
    }
}


const db = ( db ) => {


    //파이어베이스 정보 넣기
    for( let item in db ) {
        console.log( db[item] + ': ' + item );
    }
    
    return {
        res: '@@ db 전달 완료 @@',
    }
}


export { mount, db }