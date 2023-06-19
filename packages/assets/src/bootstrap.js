
const mount = ( el ) => {

    let assetPage = `
        <div id="assetPage">
            <h1> 에셋 페이지 생성 </h1>
        </div>
    `

    el.innerHTML += assetPage;

    return {

        res: '@@ 에셋 페이지 생성 End @@'

    }

    // if( process.env.NODE_ENV === 'development' ) {

    //     const devRoot = document.querySelector('#asset-root');

    //     if( devRoot ) {
    //         mount( devRoot )
    //     }
    // }

}

export { mount }