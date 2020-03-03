/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoPersonas;
	var maximoPersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizada;


	respuesta='si';
	contador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfete=0;
	acumulador=0;

	while(respuesta=='si')
	{
		nombre=prompt("Ingrese nombre");

		
		
		do
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);


		do
		{
			cantidadDeDias=prompt("Ingrese cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}
		while(isNaN(cantidadDeDias) || cantidadDeDias <1);
	
		do
		{
			formaDePago=prompt("Ingrese forma de pago");
		}
		while(!isNaN(formaDePago) && formaDePago!= 'qr' && formaDePago!='efectivo' && formaDePago!='tarjeta');


		console.log("cantidad de personas: " + cantidadDePersonas);
		console.log("dias: "+ cantidadDeDias);
		console.log("Forma de pago: " + formaDePago);

		if(contador==0 || maximoPersonas < cantidadDePersonas)
		{
			maximoPersonas=cantidadDePersonas;
			maximoPersonasNombre=nombre;
		} 

		if(contador==0 || maximoDeDias < cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		} 

		switch(formaDePago)
		{
			case 'efectivo':
				contadorEfete++;
				break;
			case 'tarjeta':
				contadorTarjeta++;
				break;
			default:
			contadorQR++;
			break;

		}

		if(contadorEfete <contadorTarjeta && contadorEfete >contadorQR)
		{
			formaDePagoMasUtilizada="Efete";
		}else
		{
			if(contadorQR > contadorTarjeta)
			{
				formaDePagoMasUtilizada='qr';
			}
			else
			{
				formaDePagoMasUtilizada='tarjeta';
			}
		}

		acumulador=acumulador+cantidadDeDias;
		contador++;
		respuesta=prompt("Desea continuar?");	
	} //termine while


	promedio=acumulador/contador;
	
	console.log(maximoPersonasNombre);
	console.log(maximoDeDiasCantidadDePersonas);
	console.log(formaDePagoMasUtilizada);

	document.write("<br> nombre del huespued con mas invitados: " + maximoPersonasNombre);
	document.write("<br> cantidad de personas que se quedaron mas dias: " + maximoDeDiasCantidadDePersonas);
	document.write("<br> la forma de pago mas utilizada: "+ formaDePagoMasUtilizada);
	document.write("<br> el promedio de cantidad de días por reserva: " + promedio);






}
