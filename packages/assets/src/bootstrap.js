
const mount = ( db ) => {

    console.log('db: ' + db );
    window.assetDB = db;

    return {

        res: '@@ 에셋 페이지 유저DB window 저장 @@'

    }

}

/*
if( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#asset-root');

    console.log('devRoot: ' + devRoot );

    if( devRoot ) {
        mount( db, devRoot )
    }
}
*/

export { mount }