/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

    var sueldo;

    var aumento;

    var resultado;


    sueldo = parseFloat(document.getElementById("sueldo").value);

    aumento = parseFloat(sueldo * 0.1);

    resultado = sueldo + aumento;

    document.getElementById("resultado").value = resultado;




}
