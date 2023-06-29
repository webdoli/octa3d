import Header from "./header";
import ArticleSec from "./article";

const MainSection = () => {

    let container = document.createElement('div');
        container.className = 'container';

    let article = document.createElement('section');
        article.className = 'section-wrapper';
        article.innerHTML += ArticleSec();
        
    container.innerHTML = Header();
    container.appendChild( article );

    return container

}

export default MainSection