function mostrar()
{
	var numero;
	var i;
	var bandera;
	contador=0;

	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	
	

	for(i=2;i<numero;i++)
	{
		console.log(i);
		if(numero %i==0)
		{
			contador++;
		}
	}

	if(contador==0)
	{
		alert("Es primo");
	}


}//FIN DE LA FUNCIÓN