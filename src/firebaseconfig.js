import firebase from "firebase/app";
import "firebase/database"
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBLgXmDLwn9LyqYNo9AhaxdKbuJ48dTAY",
    authDomain: "country-news-8c435.firebaseapp.com",
    databaseURL: "https://country-news-8c435-default-rtdb.firebaseio.com",
    projectId: "country-news-8c435",
    storageBucket: "country-news-8c435.appspot.com",
    messagingSenderId: "266991622057",
    appId: "1:266991622057:web:8bd1bf9005b63d56f556b8"
  };
  function initializeFireBase(){
      if(!firebase.apps.length){
           // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

      }
  }
  initializeFireBase()
export {firebase}

