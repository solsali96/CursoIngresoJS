/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;
	var resultado;

	importe = parseInt(document.getElementById('sueldo').value);

	aumento = parseInt (importe * 10);

	resultado = aumento /100;

	document.getElementById('resultado').value = resultado + importe;
}