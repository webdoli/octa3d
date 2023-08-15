import { auth, db } from "../../../db/firebaseDB";
import { doc, setDoc, getDocs, collection, query, where, deleteDoc } from "firebase/firestore";
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword, deleteUser  } from "firebase/auth";
import getData from "../../hook_getData";
import { OctaUI, UIButton, UIDiv, UIH, UIInput, UILI, UIP, UISpan, UITextArea, UIUL } from "../../../libs/octaUI";

const profileAboutPage = ( signals ) => {

    let usrCollection = 'users';
    let modelsRef = collection( db, 'models' );
    let userRef = collection( db, 'users' );
    let firstLogin = ( auth.currentUser.metadata.createdAt === auth.currentUser.metadata.lastLoginAt ) ? true : false;
    console.log('첫 로그인: ', firstLogin );
    let currentUser = auth.currentUser.uid;
    let usrID = auth.currentUser.email;
    let container = new UIDiv();
    
    getData( usrCollection, currentUser )
        .then( ( data ) => {

            let user = data.data();
            let tabPane = new UIDiv().setAttr({ 'class':'tab-pane', 'id':'about', 'role':'tabpanel', 'aria-labelledby':'nav-about-tab' });
            let row = new UIDiv().setAttr({ 'class':'row' });
            let articleMain = new OctaUI( document.createElement('article' )).setAttr({ 'class':'visible', 'id':'profile-intro-article' });
            
            //cardInfo
            let cardInfo = new UIDiv().setAttr({ 'class':'info-card mb-3' });
            let cardTitle = new UIDiv().setAttr({ 'class':'info-card-title' });
            let cardInfoH4 = new UIH( 'About', 4 );
            let cardContent = new UIDiv().setAttr({ 'class':'info-card-content' });
            let cardConP = new UIP().setTextContent( user.self_intro );

            let cardInfo2 = new UIDiv().setAttr({ 'class':'info-card' });
            let cardInfo2Title = new UIDiv().setAttr({ 'class':'info-card-title' });
            let cardInfoH402 = new UIH( 'Other Info', 4 );
            let cardContent02 = new UIDiv().setAttr({ 'class':'info-card-content' });
            let cardInfo2Ul = new UIUL().setAttr({ 'class':'info-list' });
            let cardInfo2Li01 = new UILI();
            let cardInfoP01 = new UIP().setAttr({ 'class':'info-name' }).setTextContent( 'Nick Name' );
            let cardInfoP02 = new UIP().setAttr({ 'class':'info-details' }).setTextContent( user.nickName );
            let cardInfo2Li02 = new UILI();
            let cardInfoP03 = new UIP().setAttr({ 'class':'info-name' }).setTextContent( 'Country' );
            let cardInfoP04 = new UIP().setAttr({ 'class':'info-details' }).setTextContent( user.country );

            let withdrawalWrapLi = new UIDiv().setAttr({ 'class':'withdrawalBtn-wrap' });
            let withDrawalBtn = new UIButton()
                .setAttr({ 'class':'withdrawlBtn', 'style':'background:tomato;color:#fff;' })
                .setTextContent( '탈퇴(withdrawal)' );

            withdrawalWrapLi.add( withDrawalBtn )

            let aboutBtn = new UIButton().setAttr({ 'type':'button', 'class':'btn btn-primary', 'data-bs-toggle':'modal', 'data-bs-target':'#confirmPWModal', 
            'style':'margin-top:20px; margin-left:41%; padding:10px 30px' }).setTextContent('Edit');

            //Modal
            let modalWrap = new UIDiv().setAttr({ 'class': 'modal fade', 'id':'confirmPWModal', 
            'tabindex':'-1', 'aria-labelledby':'exampleModalLabel', 'aria-hidden':'true' });
            let modalDialog = new UIDiv().setAttr({ 'class':'modal-dialog' });
            let modalContent = new UIDiv().setAttr({ 'class':'modal-content' });
            let modalHeader = new UIDiv().setAttr({ 'class':'modal-header' });
            let modealH_h01 = new UIH( 'Confirm Password', 1 )
            .setAttr({ 'class':'modal-title fs-5', 'id':'exampleModalLabel', 'style':'color:black;' });
            let modalBtnClose = new UIButton().setAttr({ 'type':'button', 'class':'btn-close', 'data-bs-dismiss':'modal', 'aria-label':'Close' });
            let modalBody = new UIDiv().setAttr({ 'class':'modal-body' });
            let modalBodyLabel = new OctaUI( document.createElement('label') ).setAttr({ 'style':'color:black' }).setTextContent('insert password');
            let modalBodyIpt = new UIInput().setAttr({ 'type':'text', 'id':'profile-valid-pw-input' });
            let br01 = new OctaUI( document.createElement('br') );
            let span01 = new UISpan().setAttr({ 'id':'profileForm-pw-valid', 'style':'color:tomato;font-size:.7em;' });
            let modalFooter = new UIDiv().setAttr({ 'class':'modal-footer' });
            let modalSubmitBtn01 = new UIButton().setAttr({ 'type':'submit' }).setTextContent('Submit');
            let modalSubmitBtn02 = new UIButton().setAttr({ 'type':'button', 'class':'btn btn-secondary', 'data-bs-dismiss':'modal' }).setTextContent('Close');

            // Edit Article
            let editArticle = new OctaUI( document.createElement('article') ).setAttr({ 'id':'intro-article-form', 'style':'display:none;' });
            let myIntroTop = new UIDiv().setAttr({ 'class':'input-group' });
            let myIntroSpan = new UISpan().setAttr({ 'class':'input-group-text' }).setTextContent('My Intro');
            let myIntroTextarea = new UITextArea().setAttr({ 'class':'form-control', 
            'id':'profile-myIntro-edit', 'aria-label':'With textarea', 'rows':'6', 'required':'' });
            
            let infoWrap = new UIDiv().setAttr({ 'class':'mb-3 profile-edit-form-otherinfo', 'style':'font-size:1.2em; padding:30px 0;' });
            let infoLabel = new OctaUI( document.createElement('label') ).setTextContent('Other Info');
            let nickNameWrap = new UIDiv().setAttr({ 'class':'input-group mb-3' });
            let nickNameSpan = new UISpan().setAttr({ 'class':'input-group-text' }).setTextContent('nick name');
            let nickNameIpt = new UIInput().setAttr({ 'type':'text', 'id':'profile-nickName-edit', 'class':'form-control', 'placeholder':'Nickname', 'required':'' });
            let nickNameAlert = new UIDiv().setAttr({ 'id':'nickname-alert', 'style':'color:tomato;' });
            
            let slcNation = new OctaUI( document.createElement('select') )
            .setAttr({ 'class':'form-select', 'id':'profile-nation-edit', 'aria-label':'Default select example', 'required':'' });
            let opt01 = new OctaUI( document.createElement('option') ).setAttr({ 'selected':'' }).setTextContent('Select Country');
            let opt02 = new OctaUI( document.createElement('option') ).setAttr({ 'value':'America' }).setTextContent('America');
            let opt03 = new OctaUI( document.createElement('option') ).setAttr({ 'value':'Japan' }).setTextContent('Japan');
            let opt04 = new OctaUI( document.createElement('option') ).setAttr({ 'value':'South Korea' }).setTextContent('South Korea');

            let nationAlert = new UIDiv().setAttr({ 'id':'nation-alert', 'style':'color:tomato;' });
            let formWrap01 = new UIDiv().setAttr({ 'style':'margin-top:35px;' });

            let formRow01 = new UIDiv().setAttr({ 'class':'row g-3 align-items-center' });
            let formCol01 = new UIDiv().setAttr({ 'class':'col-auto' });
            let formCol01La01 = new OctaUI( document.createElement('label') ).setAttr({ 'for':'inputPassword6', 'class':'col-form-label' }).setTextContent('new Password');
            let formCol02 = new UIDiv().setAttr({ 'class':'col-auto' });
            let formColipt01 = new UIInput().setAttr({ 'type':'password', 'id':'newPassword', 'class':'form-control', 'aria-labelledby':'passwordHelpInline', 'required':'' });

            let formRow02 = new UIDiv().setAttr({ 'class':'row g-3 align-items-center', 'style':'margin-top:10px;' });
            let formCol03 = new UIDiv().setAttr({ 'class':'col-auto' });
            let formCol02La01 = new OctaUI( document.createElement('label') ).setAttr({ 'for':'inputPassword6', 'class':'col-form-label' }).setTextContent('confirm Password');
            let formCol04 = new UIDiv().setAttr({ 'class':'col-auto' });
            let formColipt02 = new UIInput().setAttr({ 'type':'password', 'id':'confirmPassword', 'class':'form-control', 'aria-labelledby':'passwordHelpInline', 'required':'' });
            let formRow02Invalid = new UIDiv().setAttr({ 'class':'invalid-feedback02', 'style':'color:tomato;font-size:.8em;' });

            let editFormSubmit = new UIDiv().setAttr({ 'class':'submit-btn-field text-center' });
            let submitBtn = new UIButton().setAttr({ 'type':'submit', 'id':'profile-edit-submitBtn', 'style':'padding:10px 25px;margin:25px 0;' }).setTextContent('Edit');

            //Evt
            modalSubmitBtn01.dom.addEventListener('click', async (e) => {
                
                //let modalEl = modalWrap.dom;
                let errorEl = span01.dom;
                let newPW = modalBodyIpt.dom.value;
                
                try {
                    const credential = EmailAuthProvider.credential( auth.currentUser.email, newPW );
                    await reauthenticateWithCredential( auth.currentUser, credential );
                    console.log('비번 인증 성공: ');
                    $('#'+modalWrap.dom.id).modal('hide');
                    articleMain.dom.style.display = 'none';
                    editArticle.dom.style.display = 'block';
                }
                catch( err ) {
                    console.log('비밀번호 틀림');
                    errorEl.innerHTML += `invalid password, insert correct password`
                }
    
            });

            submitBtn.dom.addEventListener('click', e => {

                let myIntro = myIntroTextarea.dom.value;
                let nickName = nickNameIpt.dom.value;
                let country = slcNation.dom.value;
                let newPW = formColipt01.dom.value;
                let confirmPW = formColipt02.dom.value;
                let originForm = articleMain.dom;
                
                if( nickName === '' ) {
                    $( '#'+nickNameAlert.dom.id ).empty();
                    $( '#'+nickNameAlert.dom.id ).append( 'make your nickName' );
                }

                if( country === 'Select Country' ) {
                    $( '#'+nationAlert.dom.id ).empty();
                    $( '#'+nationAlert.dom.id ).append('select your country');
                }

                if( newPW !== confirmPW ) {
                    $( '.'+formRow02Invalid.dom.className ).empty();
                    $( '.'+formRow02Invalid.dom.className ).append('<span> password not matched </span>');
                } else {
                    console.log('제출');
                    $('#'+editArticle.dom.id ).remove();
                    // $('#'+nickNameAlert.dom.id).empty();
                    // $('#'+nationAlert.dom.id).empty();
                    // $('#'+formRow02Invalid.dom.className ).empty();
                    console.log('db 연결');
                    const ref = doc( db, 'users', auth.currentUser.uid );

                    
                    try{
                        updatePassword( auth.currentUser, newPW ).then( async () => {

                            await setDoc( ref, {
                                country: country,
                                nickName: nickName,
                                self_intro: myIntro
                            }, { merge: true }).then(() =>{
                                signals.resetAboutPage.dispatch();
                            })

                        }).catch( err=> {
                            console.log('pw err: ', err );
                        })
                        
                    } catch(err) {
                    } finally {
                        
                        console.log('about page실행');
                    }

                }

            });

            function deleteDocuments( collecName, id ) {

                return new Promise( ( resolve ) => {

                    // const ref = collection( db, collecName )
                    // const q = query( ref, where( key, '==', val ));
                    // const querySnapshot = getDocs( q );
                    
                    // querySnapshot.forEach( async ( snapshot ) => {
                    //     console.log('doc ID: ', snapshot.docID );
                        deleteDoc( doc( db, collecName, id ));
                    // });

                    resolve( '' )
                })
            }

            async function deleteModels( id ) {
                const ref = collection( db, 'models' )
                const q = query( ref, where( 'uid', '==', id ));
                const querySnapshot = await getDocs( q );

                return new Promise( resolve => {

                    querySnapshot.forEach( snapshot => {
                        console.log('snapshot: ', snapshot.data().docID );
                        deleteDoc( doc(db, 'models', snapshot.data().docID ))
                    })

                    resolve('');
                })
                
            }

            function deleteUserPrifile( user ) {

                return new Promise( resolve => {

                    deleteUser( user ).then( () => {
                        console.log('삭제시작: ', user );
                    }).catch( err => {
                        console.log( '유저삭제 Error: ', err );
                    });

                    resolve()

                })
            }

            withDrawalBtn.onClick( (e) => {
                
                let answer = window.confirm('탈퇴하시겠습니까?');

                if( answer ) {
                    //1] 사용자 uid 넣어서 user collection에서 해당 사용자 데이터 삭제하기 => 마이그레이션 기능(훗날)
                    if( !firstLogin ) {
                        deleteDocuments( 'users', currentUser )
                            .then( () => {
                            
                                console.log('삭제[1]');
                                deleteModels( currentUser )
                                .then(() => {
                                    console.log('삭제[2]');
                                    deleteUserPrifile( auth.currentUser )
                                    .then(() => {
                                        console.log('삭제[3]');
                                        window.location.href= '/';
                                    });
                                });

                            })
                    } else {

                        alert('첫 로그인에서 탈퇴할 수 없습니다.(최소 로그인 1회 이상)');

                    }
                    

                    // deleteUserPrifile( auth.currentUser )
                    // .then( () => {

                    //     console.log('사용자 프로필 삭제 성공');
                    //     deleteDocuments( 'users', 'docID', currentUser )
                    //     .then( () => {

                    //         console.log('user 삭제 성공');
                    //         deleteDocuments( 'models', 'docID', usrID )
                    //         .then( () => {

                    //             console.log('model 삭제 성공'); 
                    //             console.log('전체 삭제 됨');
                    //             window.location.href = '/';
                                
                    //         });

                    //     });

                    // });

                }
                else 
                {
                    console.log('탈퇴 No');
                }
            })

            modalHeader.add( modealH_h01, modalBtnClose );
            modalBody.add( modalBodyLabel, modalBodyIpt, br01, span01 );
            modalFooter.add( modalSubmitBtn01, modalSubmitBtn02 );
            modalContent.add( modalHeader, modalBody, modalFooter );
            modalWrap.addSeq( modalDialog, modalContent );
            
            cardContent.add( cardConP );
            cardTitle.add( cardInfoH4 );
            cardInfo.add( cardTitle, cardContent );

            cardInfo2Title.add( cardInfoH402 );
            cardContent02.add( cardInfo2Ul );

            cardInfo2Li01.add( cardInfoP01, cardInfoP02 );
            cardInfo2Li02.add( cardInfoP03, cardInfoP04 );
            cardInfo2Ul.add( cardInfo2Li01, cardInfo2Li02, withdrawalWrapLi );

            cardInfo2.add( cardInfo2Title, cardContent02 );

            articleMain.add( cardInfo, cardInfo2, aboutBtn, modalWrap );

            // article edit
            myIntroTop.add( myIntroSpan, myIntroTextarea );
            nickNameWrap.add( nickNameSpan, nickNameIpt );
            slcNation.add( opt01, opt02, opt03, opt04 );
            formCol01.add( formCol01La01 );
            formCol02.add( formColipt01 );
            formRow01.add( formCol01, formCol02 );

            formCol03.add( formCol02La01 );
            formCol04.add( formColipt02, formRow02Invalid );

            formRow02.add( formCol03, formCol04 );
            formWrap01.add( formRow01, formRow02 );
            infoWrap.add( infoLabel, nickNameWrap, nickNameAlert, slcNation, nationAlert, formWrap01 );

            editFormSubmit.add( submitBtn );
            editArticle.add( myIntroTop, infoWrap, editFormSubmit );

            row.add( articleMain, editArticle );
            tabPane.add( row )
            container.add( tabPane );
        
        });

    return container.dom

}

export default profileAboutPage