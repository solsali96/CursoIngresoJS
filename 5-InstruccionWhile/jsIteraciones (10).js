function mostrar()
{

	var contador=0;
	var numero;
	var numeroDos;
	var suma;
	alert(numero);

	numeroDos=12;
	suma=numero*numeroDos;
	alert(suma);
	suma="3";

	// if(isNaN(suma))
	// {
	// 	alert("error");
	// }
	// else
	// {
	// 	alert("bien");
	// }
	suma=3;
	suma="lala";

	while( (isNaN(suma)) || (suma<0) || (suma>10) )
	{
		alert("error");
		suma=prompt("error, reingrese solo numero");
	}
	alert("ingreso correcto "+suma);
	

	//declarar contadores y variables 

	// var respuesta="si";

	// while(respuesta!="no")
	// {
		
	
	// }




}//FIN DE LA FUNCIÓN