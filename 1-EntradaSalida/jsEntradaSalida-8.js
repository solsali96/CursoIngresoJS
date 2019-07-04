/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  
	var num1;

    var num2;

    var resultado;


    num1 = document.getElementById("numeroDividendo").value;

    num1 = parseInt(num1)
    
    num2 = document.getElementById("numeroDivisor").value;

    num2 = parseInt(num2)

    resultado = num1 % num2;

    alert ("El resto es " + resultado); 
}
