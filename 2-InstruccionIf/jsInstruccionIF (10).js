function mostrar()
{
	var nota;
	
	nota = Math.floor ( Math.random() * 10 +1);

 if (nota >= 9 ) {
 
 
 
  alert ("Nota: " + nota + " Excelente");

}

else if ( nota >= 4) {
 
	alert ("Nota: " + nota + " Aprobo");
}

else {
	alert ("Nota: " + nota + " Vamos la proxima se puede");
}

}