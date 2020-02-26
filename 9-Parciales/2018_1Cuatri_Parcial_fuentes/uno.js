
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));

	largo = parseInt(prompt("Ingrese el largo del rectangulo"));

	perimetro = ancho * 2 + largo *2;

	alert("El perimetro del rectangulo es: " + perimetro);


}
