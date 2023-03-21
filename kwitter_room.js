
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCNt6SE99UM83IeSTvdlEHxU9rA-ElROfs",
      authDomain: "el-chatsito.firebaseapp.com",
      databaseURL: "https://el-chatsito-default-rtdb.firebaseio.com",
      projectId: "el-chatsito",
      storageBucket: "el-chatsito.appspot.com",
      messagingSenderId: "458129361967",
      appId: "1:458129361967:web:c25a6a0413555ae2f30ada"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Inicio del código
console.log("nombre sala " + room_name);
row = "<div clas = 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
    //Final del código

    });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hola "+user_name;
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "sala añadida"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.js"

}

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";
}