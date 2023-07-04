import MainSection from "./component/mainSection";
import AssetStyle from "./assetStyle";
import bootstrapLib_501 from "./lib/bootstrapMin";

const mount = ( el, db ) => {

    if(db) console.log('user: ' + db.uid )
    let assetDom = document.createElement('section');
        assetDom.className = 'explore-section padding-top padding-bottom';

    let bootstrapLibCSS = document.createElement('style');
        bootstrapLibCSS.innerHTML += bootstrapLib_501();
        assetDom.appendChild( bootstrapLibCSS );

    let assetCSS = document.createElement('style');
        assetCSS.innerHTML += AssetStyle();
        assetDom.appendChild( assetCSS );

    assetDom.appendChild( MainSection() );

    //script 생성
    // let libs = [
    //     "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
    //     "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js",
    //     "https://cdnjs.cloudflare.com/ajax/libs/lightcase/2.5.0/js/lightcase.min.js",
    //     "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.4.1/swiper-bundle.min.js",
    //     "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js",
    //     "https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fassets%2Fjs%2Ffunctions.js?alt=media&token=b6564251-0249-4fe9-a6f8-fcd1fa5617a4"
    // ];

    // function loadScript( index, ele ) {

    //     if( index >= libs.length ) {
    //         return false;
    //     }
    
    //     let el = document.createElement('script');
    //     el.onload = function() {
    //       //console.log("Script loaded: ", libs[index]);
    //       loadScript( index+1, ele );
    //     }

    //     el.src = libs[ index ];
    //     ele.appendChild( el );
        
    // }
    
    // loadScript( 0 , assetDom ); 


    //최종 Home main섹션 추가
    el.appendChild(assetDom);

    return {
        res: '@@ 에셋 페이지 유저DB window 저장 @@'
    }
}

if( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#asset-root');
    if( devRoot ) mount( devRoot );

}

if ( process.env.NODE_ENV === 'production' ) {

    const devRoot = document.querySelector('#asset-root');
    if ( devRoot ) mount( devRoot );

}

export { mount }