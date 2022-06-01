//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB9vGqxxfw3I2RzsU8LbUD5WFyPi2pd3R0",
    authDomain: "kwitter-fdb75.firebaseapp.com",
    databaseURL: "https://kwitter-fdb75-default-rtdb.firebaseio.com",
    projectId: "kwitter-fdb75",
    storageBucket: "kwitter-fdb75.appspot.com",
    messagingSenderId: "608350172635",
    appId: "1:608350172635:web:8c4f585130a1ddf21d23fe"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("room name - " + Room_names);
     row = "<div class = 'room_name' id = "+Room_names + " onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row ;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html ";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}