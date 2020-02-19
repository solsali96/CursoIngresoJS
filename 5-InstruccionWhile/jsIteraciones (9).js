function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;

	
	var respuesta='si';

	while(respuesta !='no')
	{
		contador= contador +1;
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);

		if(contador ==1)
		{
			maximo= numero;
			minimo= numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo = numero;
			}
		}

		respuesta= prompt("Ingrese no, para salir");
	}


	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo; 


}//FIN DE LA FUNCIÓN