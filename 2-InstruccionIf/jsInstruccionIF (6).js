function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad= parseInt(edad);

	if (edad >17)
	{
		alert("Mayor de edad");
	}
	else
	{
		if(edad <13)
		{
			alert("Niño");
		}
		else
		{
			alert("Adolescente");
		}
	}





}//FIN DE LA FUNCIÓN