function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;
	var precioFinal;

	precio = parseInt(prompt("Ingrese el precio"));
	descuento = parseInt(prompt("Ingrese el porcentaje de descuento"));

	precioConDescuento = precio * descuento;

	precioFinal = precioConDescuento /100;

	document.getElementById('elPrecioFinal').value = precio - precioFinal;

}
