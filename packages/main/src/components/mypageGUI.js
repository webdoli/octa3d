import { auth, db } from '../db/firebaseDB';
import getData from './../hooks/hook_getData';
import getRealData from './../hooks/hook_getData';
import mypageCSS from "./mypageCSS";
import Strings from './strings';
import { userPWValidChk } from '../hooks/hookAuth';

//importing subPage
import myPageMain from '../hooks/myPage/myPage_main';
import profileHeader from '../hooks/myPage/subPage/profile_header';

// const createCSSLib = ( url  ) => {

//     let link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = url;

//     document.head.appendChild( link );
// }

function createGUI ( parentGUI, childGUI ) {
    console.log('createGUI 실행');
    return new Promise( ( resolve, reject ) => {

        parentGUI.appendChild( childGUI );
        resolve('1) createGUI 실행 끝')
    
    });  
}


const MypageGUI = () => {

    let currentUser = auth.currentUser.uid;

    // createCSSLib( './lib/mypage/bootstrap.min.css' );
    // createCSSLib( './lib/mypage/icofont.min.css' );
    // createCSSLib( './lib/mypage/swiper-bundle.min.css' );

    let container = document.createElement('section');
    container.className = 'profile-section padding-top padding-bottom';
    container.appendChild( mypageCSS() );
   
    createGUI( container, myPageMain() )
        .then( ( res ) => {
            
            console.log( res );
            console.log('2) mainPage Header 추가완료');
            

        })
        .then(() => {
            
            console.log('리턴 끝');
            
        })

    // getRealData( 'users', currentUser )
    //     .then( res => {

    //         return res.data();
        
    //     })
    //     .then( user => {
    // container.innerHTML += ``
        // })
    
    return container

}

export default MypageGUI