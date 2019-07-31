function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));
		while(isNaN(numero))
		{
			alert("Ingrese un numero valido");
			numero = parseInt(prompt("Ingrese un número"));
		}
		acumulador = acumulador + numero;

		contador ++;

		respuesta = prompt("Quiere ingresar un nuevo número?")

	}while(respuesta=="si");
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;





}//FIN DE LA FUNCIÓN