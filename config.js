import { firebase } from '@firebase/app'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCIi-mZV8g7I_hGSnRRO9BnFBZQdRoISEU",
    authDomain: "story-hub-407e2.firebaseapp.com",
    projectId: "story-hub-407e2",
    storageBucket: "story-hub-407e2.appspot.com",
    messagingSenderId: "819760160361",
    appId: "1:819760160361:web:8aad2965b7ca5e8b50ccf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()