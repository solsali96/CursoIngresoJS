/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;

	primerPrecio = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio = parseInt(document.getElementById('PrecioTres').value);

	suma = parseInt(primerPrecio + segundoPrecio + tercerPrecio);

	alert("La suma de los precios es: " + suma);


	
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;

	primerPrecio = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio = parseInt(document.getElementById('PrecioTres').value);

	suma = parseInt(primerPrecio + segundoPrecio + tercerPrecio);

	promedio = parseInt( suma /3);

	alert("El promedio de los precios es: " + promedio);

	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var aumento;
	var precioFinal;


	primerPrecio = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio = parseInt(document.getElementById('PrecioTres').value);

	suma = parseInt(primerPrecio + segundoPrecio + tercerPrecio);

	aumento = parseInt(suma * 21);

	precioFinal = parseInt( aumento /100);

	alert("El precio final con iva es de: " + (precioFinal + suma));
	
}