function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad= parseInt(edad);

	if (edad >17)
	{
		alert("Usted es mayor");
	}
	else
	{
		alert("Usted es menor");
	}
 


}//FIN DE LA FUNCIÓN