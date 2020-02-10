/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = parseInt(document.getElementById('numeroUno').value);
	segundoNumero = parseInt(document.getElementById('numeroDos').value);
	suma = parseInt( primerNumero + segundoNumero);

	alert("La suma es: " + suma);

	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero = parseInt(document.getElementById('numeroUno').value);
	segundoNumero = parseInt(document.getElementById('numeroDos').value);
	resta = parseInt(primerNumero - segundoNumero);

	alert("La resta es: " + resta);
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;

	primerNumero = parseInt(document.getElementById('numeroUno').value);
	segundoNumero = parseInt(document.getElementById('numeroDos').value);
	multiplicacion = parseInt(primerNumero *  segundoNumero);

	alert("La multiplicacion es: " +  multiplicacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;

	primerNumero = parseInt(document.getElementById('numeroUno').value);
	segundoNumero = parseInt(document.getElementById('numeroDos').value);
	division = parseInt(primerNumero / segundoNumero);

	alert("La division es: " + division);
	
}

