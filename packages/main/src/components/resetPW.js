import { MoglUI, UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIInput, UILI, UIRow, UISpan, UIUL } from "../libs/moglUI";
import AuthCSS from "./authStyle";
import { hookSignup } from "../hooks/auth/hook_signup";

const resetPWGUI = () => {

    let container = document.createElement('div');
        container.className = 'login-section padding-top padding-bottom';

        container.appendChild( AuthCSS().bootstrapCSS );
        container.appendChild( AuthCSS().authCSS );

    //head section
    let headerSection = new MoglUI( document.createElement('section') ).setAttr({ 'class':'page-header-section style-1' });
    let headerContainer = new UIDiv().setAttr({ 'class':'container' });
    let headerContent = new UIDiv().setAttr({ 'class':'page-header-content' });
    let headerInner = new UIDiv().setAttr({ 'class':'page-header-inner' });
    let pageTitle = new UIDiv().setAttr({ 'class':'page-title' });
    let titleText = new UIH( 'Forgot Password?', 2 );
    let contentText = new MoglUI( document.createElement('ol') ).setAttr({ 'class':'breadcrumb' });
    let headerLi01 = new UILI();
    let homeLink = new UIA().setAttr({ 'href':''}).setTextContent('Home');
    let headerLi02 = new UILI().setAttr({ 'class':'active' }).setTextContent('Forgot Password');

    //login section
    let loginSection = new UIDiv().setAttr({ 'class':'login-section padding-top padding-bottom' });
    let loginContainer = new UIDiv().setAttr({ 'class':'container' });
    let loginSectionRow = new UIDiv().setAttr({ 'class':'row g-5 align-items-center flex-md-row-reverse' });
    let loginSectionCol = new UIDiv().setAttr({ 'class':'col-lg-5' });
    let loginSecWrapper = new UIDiv().setAttr({ 'class':'account-wrapper' });
    let loginSecTitle = new UIH( 'Reset Password', 3 );
    let loginSecForm = new MoglUI( document.createElement('form') ).setAttr({ 'class':'account-form' });
    
    let formEmailSec = new UIDiv().setAttr({ 'class':'form-floating mb-3'});
    let formEmailIpt = new UIInput().setAttr({ 'type':'email', 'class':'form-control', 'id':'floatingInput', 'placeholder':'name@example.com' });
    let formEmailLabel = new MoglUI( document.createElement('label')).setAttr({ 'for':'floatingInput' }).setTextContent('Email address');

    let formGrp01 = new UIDiv().setAttr({'class':'form-group px-3'});
    let formGrp01Wrap = new UIDiv().setAttr({ 'class':'d-flex justify-content-between flex-wrap pt-sm-2' });
    let signInLink = new UIA().setAttr({ 'href':'/signin' }).setTextContent('SignIn');
    let signupLink = new UIA().setAttr({ 'href':'/signup' }).setTextContent('SignUp');

    let formGrp02 = new UIDiv().setAttr({ 'class':'form-group mb-0' });
    let resetBtn = new UIButton().setAttr({ 'type':'button', 'class':'d-block default-btn move-top' });
    let resetSpan = new UISpan().setTextContent('Reset Now');

    let imgCol = new UIDiv().setAttr({ 'class':'col-lg-7' });
    let innerImg = new UIDiv().setAttr({ 'class':'account-img' });
    let mainImg = new UIImg().setAttr({ 'src':'/img/account/resetPWMainImg.png' });

    //conversion
    pageTitle.add( titleText );
    headerLi01.add( homeLink );
    contentText.add( headerLi01, headerLi02 )
    headerInner.add( pageTitle, contentText );
    headerSection.addSeq( headerContainer, headerContent, headerInner );

    formGrp01Wrap.add( signInLink, signupLink );
    formGrp01.add( formGrp01Wrap );

    formEmailSec.add( formEmailIpt, formEmailLabel );

    formGrp02.addSeq( resetBtn, resetSpan );
    loginSecForm.add( formEmailSec, formGrp01, formGrp02 );
    loginSecWrapper.add( loginSecTitle, loginSecForm );
    loginSectionCol.add( loginSecWrapper );

    imgCol.addSeq( innerImg, mainImg );
    loginSectionRow.add( loginSectionCol, imgCol );
    loginSection.addSeq( loginContainer, loginSectionRow );

    container.append( headerSection.dom, loginSection.dom );

    //Evt Func
    resetBtn.dom.addEventListener('click', e => {

        let usrMail = formEmailIpt.dom.value;

        const { resetPWMail } = hookSignup();
        resetPWMail( usrMail );

    })

    return container
}

export default resetPWGUI