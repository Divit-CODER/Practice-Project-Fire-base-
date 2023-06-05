var firebaseConfig = {
    apiKey: "AIzaSyA1_GlaXzCudOHyRow6qvkpFndbZxyN0KU",
    authDomain: "kwitter-62e44.firebaseapp.com",
    databaseURL: "https://kwitter-62e44-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-62e44",
    storageBucket: "kwitter-62e44.appspot.com",
    messagingSenderId: "628582526341",
    appId: "1:628582526341:web:a19ffdfb1dfd3dcaf5e8ec",
    measurementId: "G-C616H9JFJ5"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
    username=document.getElementById("username").value;
    console.log(username);
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    });
}