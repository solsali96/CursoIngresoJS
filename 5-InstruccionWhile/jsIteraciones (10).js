function mostrar() {


	var acumPositivos = 0;
	var contadorPos = 0;
	var acumNegativos = 0;
	var contNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promPos = 0;
	var promNeg = 0;
	var diferencia;
	var numero;
	var seguir;

	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		if ( numero > 0 ) {
			// este es el bloque de los positivos
			acumPositivos = acumPositivos + numero;
			contadorPos++;

		} else if (  numero < 0 ) {
			// este es el bloque de los negativos
			acumNegativos += numero;
			contNegativos++;

		}
		else { 
			// este es el bloque de los ceros
			contadorCeros++;

		}

		// aca me fijo si el numero es par
		if( numero % 2 == 0){
			// aca hago lo que tengo que hacer si el numero es par
			contadorPares++;

		}

		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == 's');


	// aca hago las cosas que tengo que hacer una sola vez por eso lo hago afuera de la repetitiva

	if(contadorPos != 0){
	promPos = acumPositivos / contadorPos;
	}

	if( contNegativos != 0){
	promNeg = acumNegativos / contNegativos;
	}

	diferencia = contadorPos - contNegativos;


	document.write("1-Suma de los negativos: " + acumNegativos + "<br>");
	document.write("2-Suma de los positivos: " + acumPositivos + "<br>");
	document.write("3-Cantidad de positivos: " + contadorPos + "<br>");
	document.write("4-Cantidad de negativos: " + contNegativos + "<br>");
	document.write("5-Cantidad de ceros: " + contadorCeros + "<br>");
	document.write("6-Cantidad de n�meros pares: " + contadorPares + "<br>");
	document.write("7-Promedio de positivos: " + promPos + "<br>");
	document.write("8-Promedios de negativos: " + promNeg + "<br>");
	document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br>");






}//FIN DE LA FUNCI�N