/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantDeLamparas;
	var marca;
	var precioBruto;
	var precioFinal;
	var porcentaje;

	cantDeLamparas = document.getElementById('Cantidad').value;
	cantDeLamparas=parseInt(cantDeLamparas);
	precioBruto = cantDeLamparas *35;
	marca = document.getElementById('Marca').value;
	console.info("El precio bruto es: ", precioBruto);
	porcentaje =0;

	switch(cantDeLamparas){
		case 5:
			switch(marca){
				case "ArgentinaLuz":
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
					break;
			}
		case 4:
			switch(marca){
				case "ArgentinaLuz || “FelipeLamparas”":
					porcentaje =25;
					break;
				default:
					porcentaje =20;
					break;		
			}
		case 3:
			switch(marca){
				case "ArgentinaLuz":
					porcentaje =15;
					break;
				case 'FelipeLamparas':
					porcentaje =10;
					break;
				default:
					porcentaje = 5;
					break;	
			}
		case 2:
		case 1:
			porcentaje =0;
			break;
		default:
			porcentaje =50;
			break;			
	}	

	precioFinal = precioBruto - precioBruto * porcentaje /100;
	console.info("El precio con descuento es: ", precioFinal); 
	document.getElementById('precioDescuento').value = precioFinal;


	
}
