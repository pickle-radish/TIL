var subject1="Welcome to Javascript! <br>";
var subject2="Enjoy Javascript programming!";

function welcome(target){
	document.getElementById("here").innerHTML = target;
	
}

window.welcome(window.subject1);
welcome(subject2);