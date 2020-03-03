function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaDelFinal;
	var respuesta;
	var cantidadVarones;
	var contador;
	var acumulador;
	var acumuladorMenoresDeEdad;
	var contadorMenoresDeEdad;
	var promedioMenoresDeEdad;
	var acumuladorAdolescente;
	var contadorAdolescente;
	var promedioAdolescente;
	var acumuladorMayores;
	var contadorMayores;
	var promedioMayores;
	

	//respuesta='si'; // no es necesario en el do while
	cantidadVarones=0;
	contador=0;
	acumulador=0;
	acumuladorMenoresDeEdad=0;
	contadorMenoresDeEdad=0;
	acumuladorAdolescente=0;
	contadorAdolescente=0;
	acumuladorMayores=0;
	contadorMayores=0;

	do
	{
		nombre=prompt("Ingrese su nombre");

		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);

		}while(isNaN(edad) || edad<0);

		do
		{
			sexo=prompt("Ingrese su sexo. f para femenino y m para masculino");

		}while(sexo != 'f' && sexo !='m');

		do
		{
			notaDelFinal=prompt("Ingrese su nota");
			notaDelFinal=parseInt(notaDelFinal);

		}while(isNaN(notaDelFinal) || notaDelFinal <0 || notaDelFinal >10);

		if(sexo=='m' && notaDelFinal >6)
		{
			cantidadVarones++;
		}

		if(edad >18)
		{
			acumuladorMayores=acumuladorMayores+notaDelFinal;
			contadorMayores++;
		}else
		{
			if(edad >)

		}



		contador++;
		respuesta=prompt("Quiere seguir ingresando estudiantes?");
	}while(respuesta=='si')

	promedioMenoresDeEdad=acumuladorMenoresDeEdad/ contadorMenoresDeEdad;
	


	document.write("<br> La cantidad de varones aprobados: " + cantidadVarones);
	document.write(" <br> El promedio de notas de los menores de edad: " + promedioMenoresDeEdad);

}
