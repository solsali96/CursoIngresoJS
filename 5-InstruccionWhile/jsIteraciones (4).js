function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	var valorDeVerdad=isNaN(numero);

	while(isNaN(numero) || numero <0 || numero >10)
	{
		alert("error");
		numero =prompt("Ingrese un numero entre 0 y 10.");
	}

	document.getElementById('Numero').value= numero;


}//FIN DE LA FUNCIÓN