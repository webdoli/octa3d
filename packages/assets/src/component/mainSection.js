
import Header from "./header";

const MainSection = () => {

    let container = document.createElement('div');
        container.className = 'asset-container';

    container.innerHTML = Header();
    
    return container

}

export default MainSection