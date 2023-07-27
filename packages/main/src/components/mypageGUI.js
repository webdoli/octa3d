import mypageCSS from "./mypageCSS";
import Strings from './strings';

//importing subPage
import myPageMain from '../hooks/myPage/myPage_main';

function createGUI ( parentGUI, childGUI ) {
    console.log('createGUI 실행');
    return new Promise( ( resolve, reject ) => {

        parentGUI.appendChild( childGUI );
        resolve()
    
    });  
}

// module

const MypageGUI = ( signals ) => {

    let container = document.createElement('section');
    container.className = 'profile-section padding-top padding-bottom';
    container.appendChild( mypageCSS() );
   
    createGUI( container, myPageMain( signals ) )
        .then( () => {
            
            console.log('2) mainPage Header 추가완료');
            
        })
    
    return container

}

export default MypageGUI