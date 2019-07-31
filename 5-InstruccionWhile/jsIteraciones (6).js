function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	do
	{
		numero = parseInt(prompt("ingrese un numero "+ contador +"/5"));
		while(isNaN(numero))
		{
			alert("Ingrese un numero valido");
			numero = parseInt(prompt("ingrese un numero"+ contador +"/5"));
		}
		contador++;
		acumulador = acumulador + numero;	
	}while (contador<5);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN