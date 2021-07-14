import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD46Ts1dARxE8AEoWrXmdd_J-Quq6F_k7o",
    authDomain: "my-todos-a390a.firebaseapp.com",
    projectId: "my-todos-a390a",
    storageBucket: "my-todos-a390a.appspot.com",
    messagingSenderId: "575986516113",
    appId: "1:575986516113:web:0b1edf1e8832188d1a3f30",
    measurementId: "G-MB7YEP9ZXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;