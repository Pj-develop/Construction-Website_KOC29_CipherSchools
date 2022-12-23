var emailenter=document.getElementById('email');
var usernameenter=document.getElementById('username');
var passenter=document.getElementById('password');
var button=document.getElementById('btn');
button.addEventListener("click",function(){
	var email=emailenter.value;
	var username=usernameenter.value;
	var pass=passenter.value;
	var correctemail="Priyanshu@Gmail.Com";
	var correctusername="Admin";
	var correctpass="Admin123";
	if(email==correctemail && pass===correctpass && username==correctusername){
		window.alert("Login Successfully")
		window.alert("You are Now the Admin & Your Permissions have been upgarded to Super User")
		window.open("index.html");
	}
	else{
		window.alert("Login Failed")
		window.alert("Please Enter Correct User Name/Email/Password")
		}
	});
