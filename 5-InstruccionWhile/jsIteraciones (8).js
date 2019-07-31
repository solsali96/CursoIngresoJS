function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			alert("ingrese un numero valido");
			numero = parseInt(prompt("Ingrese un numero"));
		}
		if (numero < 0)
		{
			negativo = negativo * numero;
			contador++;
		}
		else
		{
			positivo = positivo + numero;
		}
		respuesta = prompt("Quiere ingresar otro numero?");

	}while(respuesta=="si");	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN