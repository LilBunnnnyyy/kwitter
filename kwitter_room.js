
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDBQoajA9b1XYknGIWIHnjWy6zQgu-G2ZQ",
      authDomain: "kwitter-dd3a0.firebaseapp.com",
      databaseURL: "https://kwitter-dd3a0-default-rtdb.firebaseio.com/",
      projectId: "kwitter-dd3a0",
      storageBucket: "kwitter-dd3a0.appspot.com",
      messagingSenderId: "947520104187",
      appId: "1:947520104187:web:35b07bb65f8ebc8db2f25e",
      measurementId: "G-GHV5BW597Y"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var y=localStorage.getItem("username");
 document.getElementById("wel").innerHTML="welcome "+y+"!";

 function ar(){
      rn=document.getElementById("pg2").value;
     
      firebase.database().ref("/").child(rn).update({
            purpose: "addingroomname"
      });
      localStorage.setItem("roomname",rn);
window.location="kwitter_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("the room name is: "+Room_names );
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(pm){
console.log(pm);
localStorage.setItem("roomname",pm);
window.location="kwitter_page.html";
}
function lg()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

