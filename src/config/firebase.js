import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 const firebaseConfig = {
      apiKey: "AIzaSyCOGJM2mrvbnzqzVjd71qn4fzG7Hbqyrrk",
      authDomain: "dr2023-67710.firebaseapp.com",
      projectId: "dr2023-67710",
      storageBucket: "dr2023-67710.appspot.com",
      messagingSenderId: "808367955073",
      appId: "1:808367955073:web:c558204b50e1257eae8180"
      };
 
 firebase.initializeApp(firebaseConfig)

 export default firebase;