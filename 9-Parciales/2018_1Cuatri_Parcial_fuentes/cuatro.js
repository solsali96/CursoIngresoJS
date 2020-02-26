function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	numeroUno= prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese un numero");
	numeroDos=parseInt(numeroDos);
	suma= numeroUno+numeroDos;
	resta=numeroUno - numeroDos;

	if(numeroUno == numeroDos)
	{
		alert("Son iguales "+ numeroUno + " y " + numeroDos);	
	}
	else
	{
		if (numeroUno < numeroDos)
		{
			alert(suma);
		if(suma >10)
		{
			alert("La suma es " + suma + " y supero el 10");
		}
		}
		else
		{
			alert(resta);
		}

		
	}

}
