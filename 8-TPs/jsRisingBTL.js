/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	var valorDeVerdad=isNaN(edad,estadoCivil,sueldoBruto,legajo);

	edad = prompt("Ingrese su edad");
	edad= parseInt(edad);
	
	while( isNaN(edad)||edad <18 || edad >90)
	{
		alert("Error, edad valida solo entre 18 y 90 años");
		edad= prompt("Vuelva a  ingresar su edad");
	}

	sexo= prompt("Ingrese su sexo, m para masculino y f para femenino");

	while(sexo != "m" && sexo != "f")
	{
		alert("Error, Ingrese solo f o m para seleccionar su sexo");
		sexo=prompt("Vuelve a Ingresar m para masculino y f para femenino");
	}

	estadoCivil=prompt("Ingrese su estadocivil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil=parseInt(estadoCivil);

	while(isNaN(estadoCivil)|| estadoCivil <1 || estadoCivil >4)
	{
		alert("Error, solo ingrese 1, 2, 3 o 4 de acuerdo a su estado civil");
		estadoCivil=prompt("Ingrese su estadocivil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}

	sueldoBruto=prompt("Ingrese su sueldo bruto, no menor a $8000");
	sueldoBruto=parseInt(sueldoBruto);

	while(isNaN(sueldoBruto) || sueldoBruto <8000)
	{
		alert("Error, solo sueldo mayor a $8000");
		sueldoBruto=prompt("Ingrese su sueldo bruto, no menor a $8000");
	}

	legajo=prompt("Ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	legajo=parseInt(legajo);

	while(isNaN(legajo) || legajo <1111 || legajo >9999)
	{
		alert("Error, su numero de legajo tiene que ser mayor a 1111");
		legajo=prompt("Ingrese numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	}
	
	nacionalidad=prompt("Ingrese su nacionalidad, “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");

	while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	{
		alert("Error, solo ingrese “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
		nacionalidad=prompt("Ingrese su nacionalidad, “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
	}

	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=legajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;
}
