import Header from "./header";
import ArticleSec from "./article";

function createScript( index, main, lib ) {

    if( index >= lib.length ) {
        return false;
    }

    let el = document.createElement('script');
    el.onload = function() {
      //console.log("Script loaded: ", libs[index]);
      createScript( index+1, main, lib );
    }

    el.src = lib[ index ];
    main.appendChild( el );

}


const MainSection = () => {

    let libs = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/lightcase/2.5.0/js/lightcase.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.4.1/swiper-bundle.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js",
        "https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fassets%2Fjs%2Ffunctions.js?alt=media&token=b6564251-0249-4fe9-a6f8-fcd1fa5617a4"
    ];

    let container = document.createElement('div');
        container.className = 'container';

    let article = document.createElement('section');
        article.className = 'section-wrapper';
        article.innerHTML += ArticleSec();

    createScript( 0, article, libs)
        
    container.innerHTML = Header();
    container.appendChild( article );

    return container

}

export default MainSection