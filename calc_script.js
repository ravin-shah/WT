var expr="";
var number = "";

/* window.addEventListener('keydown', function(event) {  //function to facilitate keyboard input.
	if(event.keyCode >= 48 && event.keyCode <= 57)
		digit(event.keyCode - 48);	
	else if(event.keyCode == 187)
		operation('+');
	else if(event.keyCode == 189)
		operation('-');
	else if(event.keyCode == 191)
		operation('/');
}, false); */

document.onkeydown = function(event) {
	var keyPressed = String.fromCharCode(event.keycode);
	//alert(keyPressed);
	if(keyPressed >= '0' && keyPressed <= '9')
		digit(keyPressed);	
	else if(keyPressed == 187)
		operation('+');
	else if(keyPressed == 189)
		operation('-');
	else if(keyPressed == 191)
		operation('/');
}

function operation(op){
	expr += op;
	this.number = "";
}

function digit(number){ 
	this.number += number;
	document.getElementById("displayArea").value = this.number;
	expr += number;
	return;
}

function showAnswer(){
	expr=eval(expr);
	document.getElementById("displayArea").value = expr;
}

function allClear() {
	expr = "";
	number = "";
	document.getElementById("displayArea").value = 0;
}