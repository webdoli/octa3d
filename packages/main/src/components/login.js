import { MoglUI, UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIInput, UILI, UIP, UIRow, UISpan, UIUL } from "../libs/moglUI";
import AuthCSS from "./authStyle";

const LoginGUI = () => {

    let container = document.createElement('div');
        container.className = 'login-section padding-top padding-bottom';

        container.appendChild( AuthCSS().bootstrapCSS );
        container.appendChild( AuthCSS().authCSS );

    let loginContainer = new UIDiv().setAttr({ 'class':'container' });
    let row = new UIDiv().setAttr({ 'class':'row g-5 align-items-center flex-md-row-reverse' });
    let col = new UIDiv().setAttr({ 'class':'col-lg-5' });
    let wrapper = new UIDiv().setAttr({ 'class':'account-wrapper' });
    let title = new UIH('Sign In', 3).setAttr({ 'class':'title' });
    let form = new MoglUI( document.createElement('form') )
        .setAttr({ 'class':'account-form', 'id':'mogl3d-signin-form' });
    
    let emailForm = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let emailIpt = new UIInput().setAttr({ 'type':'email', 'class':'form-control', 'id':'floatingInput', 'placeholder':'' });
    let emailLabel = new MoglUI( document.createElement('label') )
        .setAttr({ 'for':'floatingInput' })
        .setTextContent('Email address');
    
    let pwForm = new UIDiv().setAttr({ 'class':'form-floating' });
    let pwIpt = new UIInput().setAttr({ 'type':'password', 'class':'form-control', 'id':'floatingPassword', 'placeholder':'Password' });
    let pwLabel = new MoglUI( document.createElement('label') ).setAttr({ 'for':'floatingPassword' }).setTextContent('Password');
    
    let formGrp = new UIDiv().setAttr({ 'class':'form-group' });
    let rememWrap = new UIDiv().setAttr({ 'class':'d-flex justify-content-between flex-wrap pt-sm-2' });
    let checkGrp = new UIDiv().setAttr({ 'class':'checkgroup' });
    let chkIpt = new UIInput().setAttr({ 'type':'checkbox', 'name':'remember', 'id':'remember' });
    let chkLabel = new MoglUI( document.createElement('label') ).setAttr({ 'for':'remember' }).setTextContent('Remember');
    let chkA = new UIA().setAttr({ 'href':'/resetPW' }).setTextContent('Forgot Password?');
    
    let formGrp02 = new UIDiv().setAttr({'class':'form-group'});
    let formGrpBtn = new UIButton().setAttr({ 'class':'d-block default-btn move-top' });
    let formGrpSpan = new UISpan().setTextContent('LOGIN');

    let alertMsg = new UIP()
        .setAttr({ 'class':'loginMsg', 'style':'color:tomato;font-size:.72em;' });
    
    let formBottom = new UIDiv().setAttr({ 'class':'account-bottom' });
    let bottomSpan = new UISpan()
        .setAttr({ 'class':'d-block cate pt-10' })
        .setTextContent('Don’t Have any Account?');
    let signupLink = new UIA().setAttr({ 'href':'' }).setTextContent('Sign Up');
    
    let connectLink01 = new UISpan().setAttr({ 'class':'or' });
    let connectLink02 = new UISpan().setTextContent('or');

    let subTitle = new UIH( 'Login With Social Media', 5).setAttr({ 'class':'subtitle' });
    let subUL = new UIUL().setAttr({ 'class':'social-media social-color lab-ul d-flex justify-content-center' });
    let subLi01 = new UILI();
    let subLiLink01 = new UIA().setAttr({ 'href':'', 'class':'facebook' });
    let subLiIcon01 = new UIIcon().setAttr({ 'class':'icofont-facebook' });
    let subLi02 = new UILI();
    let subLiLink02 = new UIA().setAttr({ 'href':'', 'class':'google' });
    let subLiIcon02 = new UIIcon().setAttr({ 'class':'icofont-google' });
    let subLi03 = new UILI();
    let subLiLink03 = new UIA().setAttr({ 'href':'', 'class':'naver' });
    let subLiIcon03 = new UIIcon().setAttr({ 'class':'icofont-naver' });
    
    let loginMainImg = new UIDiv().setAttr({ 'class':'col-lg-7' });
    let imgInner = new UIDiv().setAttr({ 'class':'account-img' });
    let loginImg = new UIImg().setAttr({ 'src':'' });


    //conversion
    emailForm.add( emailIpt, emailLabel );
    pwForm.add( pwIpt, pwLabel );

    checkGrp.add( chkIpt, chkLabel );
    rememWrap.add( checkGrp, chkA )
    formGrp.add( rememWrap );
    formGrp02.addSeq( formGrpBtn, formGrpSpan );

    form.add( emailForm, pwForm, formGrp, alertMsg, formGrp02 );

    bottomSpan.add( signupLink );
    connectLink01.add( connectLink02 );

    subLi01.addSeq( subLiLink01, subLiIcon01 );
    subLi02.addSeq( subLiLink02, subLiIcon02 );
    subLi03.addSeq( subLiLink03, subLiIcon03 );
    subUL.add( subLi01, subLi02, subLi03 );
    
    formBottom.add( bottomSpan, connectLink01, subTitle, subUL );

    wrapper.add( title, form, formBottom );
    col.add( wrapper );

    loginMainImg.addSeq( imgInner, loginImg );
    row.add( col, loginMainImg );
    loginContainer.add( row )

    container.appendChild( loginContainer.dom );

    return container
}

export default LoginGUI