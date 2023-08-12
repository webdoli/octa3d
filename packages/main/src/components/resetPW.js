import { OctaUI, UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIInput, UILI, UIRow, UISpan, UIUL } from "../libs/octaUI";
import AuthCSS from "./authStyle";

const resetPWGUI = () => {

    let container = document.createElement('div');
        container.className = 'login-section padding-top padding-bottom';

        container.appendChild( AuthCSS().bootstrapCSS );
        container.appendChild( AuthCSS().authCSS );

    let resetContainer = new UIDiv().setAttr({ 'class':'container' });
    let resetTitle = new UIH( 'Reset PW', 2 );

    resetContainer.add( resetTitle );

    container.appendChild( resetContainer.dom );

    return container
}

export default resetPWGUI