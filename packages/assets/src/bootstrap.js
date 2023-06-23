import Menu from "./component/menu";

const mount = ( el, db ) => {

    // console.log('menu: ' + Menu() );

    let assetSection= `
    <div>
        <h1>에셋 페이지</h1>
        <ul>
            <li>에셋1</li>
            <li>에셋2</li>
            <li>에셋3</li>
        </ul>    
    </div>
    `

    // el.appendChild( Menu() );
    assetSection += Menu();
    el.innerHTML = assetSection;

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

export { mount }