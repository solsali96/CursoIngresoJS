function mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo !="m") 
{
	alert("Error");
	sexo = prompt("ingrese f ó m .");

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN