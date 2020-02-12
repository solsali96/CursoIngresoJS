function mostrar()
{
	var edad;
	var estado;
	edad = document.getElementById('edad').value;
	edad= parseInt(edad);
	estado = document.getElementById('estadoCivil').value;

	if (edad <18 && estado != "soltero" )
	{
		alert("Es muy pequeño para NO ser soltero");
	}
 

	


}//FIN DE LA FUNCIÓN