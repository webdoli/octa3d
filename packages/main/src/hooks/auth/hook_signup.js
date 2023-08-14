import { auth, db, storage } from "../../db/firebaseDB";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile, RecaptchaVerifier, sendEmailVerification, sendPasswordResetEmail   } from "firebase/auth";

const phoneAuthenticate = ( domID ) => {

    window.recaptchaVerifier = new RecaptchaVerifier( auth, domID, {})

}

function deleteCookies() {
    var Cookies = document.cookie.split(';');

    // set 1 Jan, 1970 expiry for every cookies
    for (var i = 0; i < Cookies.length; i++)
    document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();

 }

const hookSignup = () => {

    const resetPWMail = ( email ) => {

        sendPasswordResetEmail( auth, email )
        .then( () => {

            console.log('password reset email sent!');
            
        
        })
        .catch( err => {

            console.log( 'pw sent err: ', err.message );
            window.location.href = '/';
        })
    
    }

    const signup = async ( email, pw, nick ) => {

        await createUserWithEmailAndPassword( auth, email, pw )
                .then( async (res) => {

                    let nickName = ( nick ) ? nick : Date.now();
                    const data = {
                        self_intro: 'introduce your profile',
                        registration_date: '',
                        recent_login_date: '',
                        octa_points: '',
                        country: '',
                        main_sw: '',
                        cover_img: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2Fcover.jpg?alt=media&token=d6e6b6b7-0b2a-45f3-b2a1-5b140a4ae13e',
                        user_icon: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2FMartin-Berube-Square-Animal-Octopus.256.png?alt=media&token=ff22b8c6-df45-4241-8819-b494be047ffd',
                        online: true,
                        nickName: nickName,
                        id: email
                    }

                    await setDoc( doc( db, "users", res.user.uid ), data );

                });
        await sendEmailVerification(auth.currentUser);
        deleteCookies();

        window.location.href = '/';

    }

    /*
    const signup = ( email, password, nickName ) => {

        createUserWithEmailAndPassword( auth, email, password )
            .then( async (res) => {

                if( !res ) throw new Error('Could not complete signup');
                let usrNick = ( nickName ) ? nickName : Date.now(); 
                const data = {
                    self_intro: 'introduce your profile',
                    registration_date: '',
                    recent_login_date: '',
                    octa_points: '',
                    country: '',
                    main_sw: '',
                    cover_img: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2Fcover.jpg?alt=media&token=d6e6b6b7-0b2a-45f3-b2a1-5b140a4ae13e',
                    user_icon: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2FMartin-Berube-Square-Animal-Octopus.256.png?alt=media&token=ff22b8c6-df45-4241-8819-b494be047ffd',
                    online: true,
                    nickName: usrNick,
                    id: email
                }

                try {

                    const docRef = await setDoc( doc( db, "users", res.user.uid ), data );
                    console.log("Document written with ID: ", res.user.uid);

                } catch (e) {

                    console.error("Error adding document: ", e);

                }
            })
            .then( () => {

                window.location.href = '/';

                return updateProfile( auth.currentUser, {
                    displayName: usrNick
                });

            })
            .catch( err => {

                console.log( '회원가입 Error: ' + err );

            })

    }

    */
    
    /*
    const signup = ( usrInfo, usrNick ) => {

        console.log('usrInfo: ', usrInfo );

        const data = {

            self_intro: 'introduce your profile',
            registration_date: '',
            recent_login_date: '',
            octa_points: '',
            country: '',
            main_sw: '',
            cover_img: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2Fcover.jpg?alt=media&token=d6e6b6b7-0b2a-45f3-b2a1-5b140a4ae13e',
            user_icon: 'https://firebasestorage.googleapis.com/v0/b/octa3d-439a2.appspot.com/o/octa3d%2Fmypage%2Fprofile%2FMartin-Berube-Square-Animal-Octopus.256.png?alt=media&token=ff22b8c6-df45-4241-8819-b494be047ffd',
            online: true,
            nickName: usrNick,
            id: usrInfo.email

        }

        async function insertUserDataModel () {
            try {

            const docRef = await setDoc( doc( db, "users", usrInfo.uid ), data );
            console.log( "Document written with ID: ", usrInfo.uid );
            
            } catch (e) {
                    
                console.error("Error adding document: ", e);
                
            }
        }

        insertUserDataModel()
        

    }
    */

    return { signup, resetPWMail }

}

export { hookSignup, phoneAuthenticate }