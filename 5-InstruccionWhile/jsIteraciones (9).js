function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	
	var respuesta='si';

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			alert("ingrese un numero valido");
			numero = parseInt(prompt("Ingrese un numero"));
		}
		


		respuesta = prompt("Quiere ingresar otro numero?");

	}while(respuesta=="si");

	document.getElementById("maximo").Value=maximo;
	document.getElementById("minimo").value=minimo; 


}//FIN DE LA FUNCIÓN