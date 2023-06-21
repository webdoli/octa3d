

const mount = ( el ) => {

    console.log('db: ' + el );

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

    return {
        res: '@@ db 전달 완료 @@'
    }

}





export { mount, db }