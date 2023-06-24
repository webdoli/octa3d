import Header from "./component/header";
import MainSection from "./component/mainSection";
import Footer from "./component/footer";

const mount = ( el, db ) => {

    let assetDom= `
        <div class="asset-wrap"></div>
    `

    assetDom += Header();
    assetDom += MainSection();
    assetDom += Footer();

    el.innerHTML = assetDom;    

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