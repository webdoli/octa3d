import AuthCSS from "./authStyle";
import { hookSignup } from "../hooks/auth/hook_signup";
import { auth } from "../db/firebaseDB";
import { sendSignInLinkToEmail, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { phoneAuthenticate } from "../hooks/auth/hook_signup";
import { OctaUI, UIA, UIButton, UIDiv, UIH, UIIcon, UIImg, UIInput, UILI, UIRow, UISpan, UIUL } from "../libs/octaUI";

const actionCodeSettings = {
    
    url: 'http://localhost:8080/',
    // This must be true.
    handleCodeInApp: true
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
};

const validationEmail = ( email ) => {

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test( email );

}

const createAlertEle = ( msg ) => {

    let emailVerifyAlert = new UIDiv().setAttr({ 'class':'d-flex flex-row mb-3 emailVerifyAlert' });
    let alertSpan = new UISpan().setAttr({ 'class':'p-2', 'style':'font-size:.85em;' }).setTextContent( msg );
    emailVerifyAlert.add( alertSpan );

    return emailVerifyAlert

}

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
    
    /******************/
    /*  user ID Code  */
    /******************/
    /*
    let formFloatingID = new UIDiv().setAttr({ 'class':'form-floating mb-3' });
    let userIDIpt = new UIInput()
        .setAttr({ 'type':'text', 'class':'form-control', 'id':'userIdInput', 'placeholder':'user-id' });
    let userIDLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'userIdInput' })
        .setTextContent('User ID');
    */

    let loginEmail = new UIDiv().setAttr({ 'class':'form-floating col-md-12 mb-3', 'style':'display:flex;' });
    let userEmailIpt = new UIInput()
        .setAttr({ 'type':'email', 'class':'form-control', 'id':'floatingInput', 'placeholder':'This email used when id is lost' });
    let userEmailLabel = new OctaUI( document.createElement('label' ))
        .setAttr({ 'for':'floatingInput' })
        .setTextContent('Email( id )');
    let emailVerifyBtn = new UIInput()
        .setAttr({ 
            'class':'btn btn-primary btn-sm col-md-2', 
            'type':'button', 'value':'Verify', 
            'style':'background:#5138ee;font-weight:400;border:none;' 
        })
        .onMouseOver((e) => { e.target.style='background-color:white;color:#5138ee;'})
        .onMouseOut((e) => { e.target.style='background-color:#5138ee;color:white;border:none;font-weight:400;'});
    

    /* alert div add after */
    let emailVerifyAlert = new UIDiv().setAttr({ 'class':'d-flex flex-row mb-3 emailVerifyAlert' });
    let alertSpan = new UISpan().setAttr({ 'class':'p-2', 'style':'font-size:.7em;' }).setTextContent('');
    emailVerifyAlert.add( alertSpan );

    let alertMsg = new UIDiv().setAttr({ 'id':'alertMsgEmail' });
    

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

    /******************/
    /* phoneAuth Code */
    /******************/
    /*
    function submitPhoneNumAuth () {
        
        let phoneNum = '+8210-2140-5789';
        var appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber( auth, phoneNum, appVerifier )
            .then( res => {

                console.log('폰 전송 Code: ', res );
                window.confirmationResult = res;

            })
            .catch( (error) => {
                console.log('phone SNS Error: ', error )
                // Error; SMS not sent
                // ...
            });

    }

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
        .setAttr({ 
            'class':'btn btn-primary btn-sm', 
            'id':'sign-in-button', 
            'type':'button', 
            'style':'background:#5138ee;'
         })
        .onClick( () => { submitPhoneNumAuth() } )
        .setTextContent('Verify');

    // usrPhoneVerifyBtn.dom.addEventListener('click', e => {
    //     submitPhoneNumAuth();
    // })

    function testFunc01 () {
        console.log('testFunc01 실행');
    }

    window.recaptchaVerifier = new RecaptchaVerifier( 'recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
            console.log('response: ', response );
            testFunc01();
            // submitPhoneNumAuth()
        },
    }, auth );
    */

    let formRemember = new UIDiv().setAttr({ 'class': 'form-group' });
    let formRememHead = new UIDiv().setAttr({ 'class':'d-flex justify-content-center flex-wrap pt-sm-2' });
    
    /*********************/
    /* Remember Chk Code */
    /*********************/
    // let formRememCheckGrp = new UIDiv().setAttr({ 'class':'checkgroup' });
    // let formRememIpt = new UIInput().setAttr({ 'type':'checkbox', 'id':'remember', 'name':'remember' });
    // let formRememLabel = new OctaUI( document.createElement('label') )
    //     .setAttr({ 'for':'remember' })
    //     .setTextContent('Remember Me');

    /*********************/
    /* Forget IDPW Code  */
    /*********************/
    /*
    let forgetID = new UIA().setAttr({ 'href':'', 'class':'px-2', 'style':'color:#fae499;font-size:.9em;' }).setTextContent('Forgot ID?');
    let passSpan = new UISpan().setAttr({ 'style':'font-size:.9em;' }).setTextContent(' or ');
    let forgetPW = new UIA().setAttr({ 'href':'', 'class':'px-2', 'style':'color:#fae499;font-size:.9em;' }).setTextContent('Password?');
    */

    let formGroup = new UIDiv().setAttr({ 'class':'form-group' });
    let signupBtn = new UIButton().setAttr({ 'class':'d-block default-btn move-top', 'type':'button' });
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
    // formFloatingID.add( userIDIpt, userIDLabel );
    loginEmail.add( userEmailIpt, userEmailLabel );
    formFloatingPW.add( userPWIpt, userPWLabel );
    formFloatingRePW.add( userRePWIpt, userRePWLabel );
    
    /**************/
    /* phone Auth */
    /**************/
    // usrPhone.add( usrPhoneSpan, usrPhoneIpt, usrPhoneVerifyBtn  );
    
    // window.intlTelInput( usrPhoneIpt.dom, {
    //     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    // });

    // formRememCheckGrp.add( formRememIpt, formRememLabel );
    // formRememHead.add( forgetID, passSpan, forgetPW );
    // formRemember.add( formRememHead );
    formGroup.addSeq( signupBtn, signupSpan );

    wrapperForm.add( loginEmail, alertMsg, formFloatingPW, formFloatingRePW, formGroup );

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

    // Events
    function alertMsgFunc( message, msgEle, alertColor, msgDiv ) {

        msgDiv.clear();
        let alertNullMsg = msgEle( message );
        alertNullMsg.dom.style.color = alertColor;
        msgDiv.add( alertNullMsg );

    }

    signupBtn.onClick( (e) => {
        
        let msgDiv = alertMsg;
        let usrEmail = userEmailIpt.dom.value;
        let usrPW = userRePWIpt.dom.value;
        let emailValidation = validationEmail( usrEmail );

        if( !usrEmail || !emailValidation ) {
            alertMsgFunc( '∵ Invalid Email Address.', createAlertEle, 'tomato', msgDiv );
            return;
        }

        sendSignInLinkToEmail( auth, usrEmail, actionCodeSettings )
            .then( () => {
                
                console.log('Sign-in Email sent successfully');
                window.localStorage.setItem( 'emailForSignIn', usrEmail );

                //Create User into Server
                const { signup } = hookSignup();
                console.log( `서버 저장 || ID: ${ usrEmail }, PW: ${ usrPW }` );
                signup( usrEmail, usrPW );

            })
            .catch( err => {
                console.log('이메일 인증 Error: ', err );
            }) 
    });

    /*************************/
    /*  Btn Validation Code  */
    /*************************/
    /*
    emailVerifyBtn.onClick( (e) => {
        
        let msgDiv = alertMsg;
        let usrEmail = userEmailIpt.dom.value;
        let emailValidation = validationEmail( usrEmail );

        if( !usrEmail ) {
            alertMsgFunc( '∵ Insert your Email.', createAlertEle, 'tomato', msgDiv );
            return;
        }
        
        if( emailValidation ) {

            sendSignInLinkToEmail( auth, usrEmail, actionCodeSettings )
                .then( () => {
                    console.log('Sign-in Email sent successfully');
                    window.localStorage.setItem( 'emailForSignIn', usrEmail );
                })
                .catch( err => {
                    console.log('이메일 인증 Error: ', err );
                }) 

        } else {
            alertMsgFunc( '∵ Insert right Email Form.', createAlertEle, 'tomato', msgDiv );
            return;
        }

    })
    */

    return container

}

export default SignupGUI