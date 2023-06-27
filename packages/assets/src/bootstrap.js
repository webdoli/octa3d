import MainSection from "./component/mainSection";
import mainStyle from "./mainStyle";
import bootstrapCSS from "./bootstrapCSS";
// import './assetStyle.css';

const mount = ( el, db ) => {

    let assetDom = document.createElement('section');
        assetDom.className = 'asset-main-wrap padding-top padding-bottom';
        
    let lib_bootstrap = document.createElement('style');
        lib_bootstrap.innerHTML += bootstrapCSS();
        assetDom.appendChild( lib_bootstrap );

    let assetStyle = document.createElement('style');
        assetStyle.innerHTML += mainStyle();
        assetDom.appendChild( assetStyle );

    // assetDom.innerHTML += MainSection();
    assetDom.appendChild( MainSection() );
    assetDom.innerHTML += `<scrip src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js" integrity="sha512-VK2zcvntEufaimc+efOYi622VN5ZacdnufnmX7zIhCPmjhKnOi9ZDMtg1/ug5l183f19gG1/cBstPO4D8N/Img==" crossorigin="anonymous" referrerpolicy="no-referrer"></scrip>`
    el.appendChild(assetDom);    

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