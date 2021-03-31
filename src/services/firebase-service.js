import firebase from "firebase/app";
import firestore from "firebase/app";

// import firebase from 'firebase/app';
// import 'firebase/firestore';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

// const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        // let firestore = firebase.firestore();
    }
//   const firebaseApp = firestore.initializeApp({firebaseConfig});
 export default firebase;

  
// export const getOne = () => {
//     // const db = firebase.firestore();
//     firebase.
    
//     return firebase.collection('countries').onSnapshot((snapshot) => {
//         const postData = [];
//         snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
//         console.log(postData);  // <------
//         // setPosts(postData);
//       });
// }
