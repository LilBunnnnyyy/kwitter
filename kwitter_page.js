//YOUR FIREBASE LINKS

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
 var a1=localStorage.getItem("username");
 var rnm=localStorage.getItem("roomname");

function snd(){
      m=document.getElementById("msg").value;
      firebase.database().ref(rnm).push({
            Name:a1,
            Message:m,
            Like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+rnm).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
n1=message_data['Name'];
m1=message_data['Message'];
m3=message_data['Like']; 
name_with_tag = "<h4> "+ n1 +"<img class='user_tick' src=''>";
message_with_tag = "<h4 class='message_h4'>" + m1 + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+m3+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ m3 +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(e1){
console.log(e1);
bi=e1;
l=document.getElementById(bi).value;
ul=Number(l)+1;
console.log(ul);
firebase.database().ref(rnm).child(e1).update({
      Like:ul
});

}
function lo()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}