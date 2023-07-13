import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../db/firebaseDB";
import { doc, setDoc } from "firebase/firestore";

const imgUpload = ( data, uid ) => {

    console.log('이미지 업로드 시작');
    const uploadPath = `coverImg/${uid}/${data.name}`;
    const storageRef = ref( storage, uploadPath );

    const uploadTask = uploadBytesResumable( storageRef, data );

    uploadTask.on( 'state_changed', 
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log( 'Upload is ' + progress + '% done.');

            switch ( snapshot.state ) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }

        }, ( err ) => {

            console.log('err: ' + err )
        
        }, () => {
            getDownloadURL( uploadTask.snapshot.ref )
                .then( (downloadURL) => {

                    console.log( 'File available at downloadURL: ' + downloadURL );
                    const data = {
                        cover_img: downloadURL
                    }

                    setDoc( doc( db, 'users', uid ), data );
                })

            window.location.href = '/mypage'
        }

    )
    
}


export { imgUpload }