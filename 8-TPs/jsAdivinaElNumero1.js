/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;

function comenzar()
{  
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	contadorIntentos=0;
	console.log(numeroSecreto);
	

}

function verificar()
{ 
	numero = parseInt(document.getElementById('numero').value);
	contadorIntentos = contadorIntentos +1;
	
	if (numero == numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
	}
	else
	{
		if (numero > numeroSecreto)
		{
			alert("Se paso del numero secreto");
		}
		else
		{
			alert("Falta para llegar al numero secreto");
		}
	}

	document.getElementById('intentos').value = contadorIntentos;
	
	
}