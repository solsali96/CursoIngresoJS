function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad= parseInt(edad);

	if (!(edad >12 && edad <18))
	{
		alert("Usted no es adolescente");
	}



}//FIN DE LA FUNCIÓN