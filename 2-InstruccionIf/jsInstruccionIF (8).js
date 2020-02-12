function mostrar()
{
	var edad;
	var estado;
	edad = document.getElementById('edad').value;
	edad= parseInt(edad);
	estado = document.getElementById('estadoCivil').value;

	if (!(edad <18 && estado != "soltero" ))
	{
		alert("Es soltero y no es menor");
	}

	


}//FIN DE LA FUNCIÓN