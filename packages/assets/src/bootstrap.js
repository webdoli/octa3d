
const mount = ( el ) => {

    console.log('팀명: ' + el );

    return {

        onNavi: 'Asset전달: '+el

    }

    if( process.env.NODE_ENV === 'development' ) {

        const devRoot = document.querySelector('#asset-root');

        if( devRoot ) {
            mount( devRoot )
        }
    }

}

export { mount }