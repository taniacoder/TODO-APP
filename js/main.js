function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function activity() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doitem(inputBoxValue);
		clean();
	}
}
function doitem(itText) {
	var lista = document.getElementById("lista");
	//Crear el elemento
	var elemento = document.createElement("li");
	elemento.className = "item";
	var texto = document.createElement("span");
	texto.className = "textostyle";
	texto.innerHTML = itText;
	var check = document.createElement("input");
	check.type = 'checkbox';
	check.onchange = function (){
		if (check.checked == true){
			texto.innerHTML = itText.strike(); 
		}
		else{
				texto.innerHTML = itText;
		}
	};
	var borrar = document.createElement("button");
	borrar.className = "borra glyphicon glyphicon-trash";
	borrar.onclick = function(){
		lista.removeChild(elemento)
	}
	elemento.appendChild(check);
	elemento.appendChild(texto);
	elemento.appendChild(borrar);
	lista.appendChild(elemento);
	
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}