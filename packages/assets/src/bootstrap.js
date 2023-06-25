import Header from "./component/header";
import MainSection from "./component/mainSection";
import Footer from "./component/footer";
import './assetStyle.css';

const mount = ( el, db ) => {

    let assetDom= `
        <section class="asset-main-wrap">
            <div class="asset-container">
            </div>
        </section>
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