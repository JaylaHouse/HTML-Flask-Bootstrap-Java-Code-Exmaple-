var username =document.getElementById("username");
var password =document.getElementById("password");
var submitBtn = document.getElementById("enter");
var registeredUser;
var registerdPassword;
function validate(){
    if(username.value==registeredUser && password.value==registerdPassword){
        alert("login succesfull")
    }else{ 
        alert("login succesfull") //dont really know how to write to a file in order to validate this so this is all i got
    }
}

/*
const user = {
    username: username.value,
    password: password.value
}
*/

function SignUp(){
    /*var users = new XMLHttpRequest();                 // Create XMLHttpRequest object
    users.open('GET', 'static/login.json', true);
  
    users.onload = function() {                       // When readystate changes
      var usersData = JSON.stringify(user);
    };
  
    users.send(usersData);
    */
   //couldnt figure out how to write users into json.file for real life simulation.
   registeredUser = username.value;
   registerdPassword = password.value;
   alert("Sign Up succesfull")
   
}
