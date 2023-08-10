import AuthCSS from "./authStyle";
import { hookSignup } from "../hooks/auth/hook_signup";
import { auth } from "../db/firebaseDB";
import { RecaptchaVerifier } from "firebase/auth";
import { OctaUI, UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIInput, UILI, UIRow, UISpan, UIUL } from "../libs/octaUI";

const SignupGUI = () => {

    let editSignupFormCSS = document.createElement('style');
    editSignupFormCSS.innerHTML += `
        .iti__country {
            color: black;
        }
    `
    document.getElementsByTagName('head')[0].appendChild( editSignupFormCSS );


    let container = document.createElement('div');
        container.className = 'login-section padding-top padding-bottom'

        container.appendChild( AuthCSS().bootstrapCSS );
        container.appendChild( AuthCSS().authCSS );

    let singupContainer = new UIDiv().setAttr({ 'class':'container' });
    let signupRow = new UIRow().setAttr({ 'class':'row g-5 align-items-center flex-md-row-reverse' });
    let signupCol = new UIDiv().setAttr({ 'class':'col-lg-5' });
    
    let wrapper = new UIDiv().setAttr({ 'class':'account-wrapper' });
    
    let wrapperH01 = new UIH('Sign Up', 3 ).setAttr({ 'class':'title' });
    let wrapperForm = new OctaUI( document.createElement('form') )
        .setAttr({ 'class':'account-form', 'id':'octa3d-signup-form' });
    
    let formFloatingID = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let userIDIpt = new UIInput()
        .setAttr({ 'type':'text', 'class':'form-control', 'id':'userIdInput', 'placeholder':'user-id' });
    let userIDLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'userIdInput' })
        .setTextContent('User ID');

    let formFloatingEmail = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let userEmailIpt = new UIInput()
        .setAttr({ 'type':'text', 'class':'form-control', 'id':'floatingInput', 'placeholder':'This email used when id is lost' });
    let userEmailLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'floatingInput' })
        .setTextContent('Email');

    let formFloatingPW = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let userPWIpt = new UIInput()
        .setAttr({ 'type':'password', 'class':'form-control', 'id':'floatingPassword', 'placeholder':'Password' });
    let userPWLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'floatingPassword' })
        .setTextContent('Password');

    let formFloatingRePW = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let userRePWIpt = new UIInput()
        .setAttr({ 'type':'password', 'class':'form-control', 'id':'confirmPass', 'placeholder':'Confirm Password' });
    let userRePWLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'confirmPass' })
        .setTextContent('Confirm Password');

    let usrPhone = new UIDiv().setAttr({ 
        'class':'form-floating mb-3',
        'style':'display:flex;align-items:center;justify-content:space-evenly'
    });
    let usrPhoneIpt = new UIInput()
        .setAttr({
            'id':'phoneIptEl', 
            'type':'tel', 
            'class':'form-control', 
            'style':'border-top-left-raduis:4px;border-top-right-radius:0;border-bottom-left-radius:4px;border-bottom-right-radius:0;' });
    let usrPhoneSpan = new UISpan().setAttr({ 'class':'input-group-addon' }).setTextContent('Phone');
    let usrPhoneVerifyBtn = new UIButton()
        .setAttr({ 'class':'btn btn-primary btn-sm', 'id':'phoneVerifyBtn', 'type':'button', 'style':'background:#5138ee;' })
        .setTextContent('Verify');
    

    let formRemember = new UIDiv().setAttr({ 'class': 'form-group' });
    let formRememHead = new UIDiv().setAttr({ 'class':'d-flex justify-content-between flex-wrap pt-sm-2' });
    let formRememCheckGrp = new UIDiv().setAttr({ 'class':'checkgroup' });
    let formRememIpt = new UIInput().setAttr({ 'type':'checkbox', 'id':'remember', 'name':'remember' });
    let formRememLabel = new OctaUI( document.createElement('label') )
        .setAttr({ 'for':'remember' })
        .setTextContent('Remember Me');
    let forgetPW = new UIA().setAttr({ 'href':'' }).setTextContent('Forgot Password?');

    let formGroup = new UIDiv().setAttr({ 'class':'form-group' });
    let signupBtn = new UIButton().setAttr({ 'class':'d-block default-btn move-top' });
    let signupSpan = new UISpan().setTextContent('Signup Now');

    let accountBottom = new UIDiv().setAttr({ 'class':'account-bottom' });

    let signinSpan = new UISpan()
        .setAttr({ 'class':'d-block cate pt-10' })
        .setTextContent('Already Have an Account? ');
    let signinLink = new UIA().setAttr({ 'href':'/login' }).setTextContent('Sign In');
    let signinAnotherWrap = new UISpan().setAttr({ 'class':'or' });
    let signinAnotherIcon = new UISpan().setTextContent('or');
    
    let snsLoginTitle = new UIH( 5 ).setAttr({ 'class':'subtitle' }).setTextContent('Signup With Social Media');
    let snsLoginWrap = new UIUL().setAttr({ 'class':'social-media social-color lab-ul d-flex justify-content-center' });
    
    let snsLogLi01 = new UILI();
    let snsLogLi01Link = new UIA().setAttr({ 'href':'', 'class':'google'});
    let snsLogLi01Icon = new UIIcon().setAttr({ 'class':'icofont-google' });

    let snsLogLi02 = new UILI();
    let snsLogLi02Link = new UIA().setAttr({ 'href':'', 'class':'facebook'});
    let snsLogLi02Icon = new UIIcon().setAttr({ 'class':'icofont-facebook' });

    let snsLogLi03 = new UILI();
    let snsLogLi03Link = new UIA().setAttr({ 'href':'', 'class':'naver'});
    let snsLogLi03Icon = new UIIcon().setAttr({ 'class':'icofont-naver' });

    let snsLogLi04 = new UILI();
    let snsLogLi04Link = new UIA().setAttr({ 'href':'', 'class':'cacao'});
    let snsLogLi04Icon = new UIIcon().setAttr({ 'class':'icofont-cacao' });
    
    let signupImgCol = new UIDiv().setAttr({ 'class':'col-lg-7' });
    let signupImgDiv = new UIDiv().setAttr({ 'class':'account-img' });
    let signupImg = new UIImg().setAttr({ 'src':'./' });


    // Conversion
    formFloatingID.add( userIDIpt, userIDLabel );
    formFloatingEmail.add( userEmailIpt, userEmailLabel );
    formFloatingPW.add( userPWIpt, userPWLabel );
    formFloatingRePW.add( userRePWIpt, userRePWLabel );
    usrPhone.add( usrPhoneSpan, usrPhoneIpt, usrPhoneVerifyBtn  );
    
    window.intlTelInput( usrPhoneIpt.dom, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });


    formRememCheckGrp.add( formRememIpt, formRememLabel );
    formRememHead.add( formRememCheckGrp, forgetPW );
    formRemember.add( formRememHead );
    formGroup.addSeq( signupBtn, signupSpan );

    wrapperForm.add( formFloatingID, formFloatingEmail, formFloatingPW, formFloatingRePW, usrPhone, formRemember, formGroup );

    signinSpan.add( signinLink );
    signinAnotherWrap.add( signinAnotherIcon );

    snsLogLi01.addSeq( snsLogLi01Link, snsLogLi01Icon );
    snsLogLi02.addSeq( snsLogLi02Link, snsLogLi02Icon );
    snsLogLi03.addSeq( snsLogLi03Link, snsLogLi03Icon );
    snsLogLi04.addSeq( snsLogLi04Link, snsLogLi04Icon );

    snsLoginWrap.add( snsLogLi01, snsLogLi02, snsLogLi03, snsLogLi04 );
   
    accountBottom.add( signinSpan, signinAnotherWrap, snsLoginTitle, snsLoginWrap )

    wrapper.add( wrapperH01, wrapperForm, accountBottom );
    signupCol.add( wrapper );

    signupImgCol.addSeq( signupImgDiv, signupImg );

    signupRow.add( signupCol, signupImgCol );
    singupContainer.add( signupRow );
    
    container.appendChild( singupContainer.dom );

    
  

    // wrapperForm.dom.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const { signup } = hookSignup();
    //     let userID = userIDIpt.dom.value;
    //     let userPW = userRePWIpt.dom.value;
    //     let userEmail = userEmailIpt.dom.value;

    //     console.log( `ID: ${ userID }, PW: ${ userPW }, Name: ${ userEmail }` );

    //     signup( userID, userPW, userEmail );
    // })

    return container

}

export default SignupGUI