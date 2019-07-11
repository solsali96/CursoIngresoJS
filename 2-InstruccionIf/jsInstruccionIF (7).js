function mostrar()
{
 var edad;

 var estado;

 edad = parseInt(document.getElementById("edad").value);

 estado = document.getElementById("estadoCivil").value;

 if ( edad < 18  && estado != "Soltero")

 { alert("Es muy pequeño para NO ser soltero");

}


}