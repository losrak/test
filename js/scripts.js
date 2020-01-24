var _user = false;
var _pass = false;

function validateUser(element){
	var length = element.value.length;
	var value = element.value;
	sessionStorage.setItem("usern", value);
	// var permitC = "!\"$%&\/"
	var name = "error";
	if(!(/^[a-z0-9"$%&/]{8,20}$/).test(value)){
		alert('Solo se permiten letras, números y los caracteres !\"$%&\/ y la cadena debe de tener minimo ocho y máximo 20 caracteres');
		arr = element.className.split(" ");
		if (arr.indexOf(name) == -1) {
		    element.className += " " + name;
		}
	}else{
		element.classList.remove("error");
		console.log("user ok")
		_user = true;
		document.getElementById("enter").disabled = true;
	}
	if(_user == true && _pass == true)
		document.getElementById("enter").disabled = false;

}

function validatePass(element){
	var length = element.value.length;
	var value = element.value;
	// var permitP = "^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$";
	var name = "error";
	if(!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/).test(value)){
		alert('Solo se permiten letras, números y los caracteres !\"$%&\/ y la cadena debe de tener minimo ocho y máximo 20 caracteres');
		arr = element.className.split(" ");
		if (arr.indexOf(name) == -1) {
		    element.className += " " + name;
		}
	}else{
		element.classList.remove("error");
		console.log("pass ok")
		_pass = true;
		document.getElementById("enter").disabled = true;
	}
	if(_user == true && _pass == true)
		document.getElementById("enter").disabled = false;
}