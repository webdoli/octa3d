
import Header from "./header";
import MainWrapper from "./mainWrapper";

const MainSection = () => {

    let container = document.createElement('div');
        container.className = 'asset-container';

    container.innerHTML = Header();
    
    return container

}

export default MainSection