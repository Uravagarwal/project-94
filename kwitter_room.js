var firebaseConfig = {
      apiKey: "AIzaSyCEMQ2ZJI6y45gZ4wXu23y1p9iwR8cdRzw",
      authDomain: "kwitter-db1e3.firebaseapp.com",
      databaseURL: "https://kwitter-db1e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-db1e3",
      storageBucket: "kwitter-db1e3.appspot.com",
      messagingSenderId: "918857964514",
      appId: "1:918857964514:web:b7ae6fe7169dcdb5c3f7bb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}