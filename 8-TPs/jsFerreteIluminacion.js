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
	var lamparas;
	var precioLampara = 35;
	var precioDescuento;
	var precioFinal;
	var Marca;

	lamparas = document.getElementById('Cantidad').value;
	lamparas = parseInt(lamparas);
    Marca =document.getElementById('Marca').value;

	if (lamparas >5)
	{
		precioLampara = precioLampara * lamparas;

		precioDescuento =  precioLampara * 50;

		precioFinal = precioDescuento /100;

		document.getElementById('precioDescuento').value = precioLampara - precioFinal;
	}
	
	if ( lamparas == 5 && Marca == "ArgentinaLuz")
	{
		precioLampara = precioLampara * lamparas;

	    precioDescuento =  precioLampara * 40;

	    precioFinal = precioDescuento /100;

	    document.getElementById('precioDescuento').value = precioLampara - precioFinal;	
	}
	else
	{
		if( lamparas == 5 && Marca != "ArgentinaLuz")
		{
			precioLampara = precioLampara * lamparas;

	   	    precioDescuento =  precioLampara * 30;

	    	precioFinal = precioDescuento /100;

	   	    document.getElementById('precioDescuento').value = precioLampara - precioFinal;
		}
	}
	if ( lamparas == 4 && Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")
	{
		precioLampara = precioLampara * lamparas;

	    precioDescuento =  precioLampara * 25;

	    precioFinal = precioDescuento /100;

	    document.getElementById('precioDescuento').value = precioLampara - precioFinal;	
	}
	else
	{
		if ( lamparas == 4 && Marca != "ArgentinaLuz" || Marca != "FelipeLamparas")
		{
			precioLampara = precioLampara * lamparas;

	        precioDescuento =  precioLampara * 20;

	        precioFinal = precioDescuento /100;

	        document.getElementById('precioDescuento').value = precioLampara - precioFinal;
		}   
	}
	if (lamparas == 3 && Marca == "ArgentinaLuz")
	{
		precioLampara = precioLampara * lamparas;

		precioDescuento =  precioLampara * 15;

		precioFinal = precioDescuento /100;

		document.getElementById('precioDescuento').value = precioLampara - precioFinal;
	}
	else
	{
		if (lamparas == 3 && Marca == "FelipeLamparas")
		{
			precioLampara = precioLampara * lamparas;

		    precioDescuento =  precioLampara * 10;

		    precioFinal = precioDescuento /100;

		    document.getElementById('precioDescuento').value = precioLampara - precioFinal;
		}
		else
		{
			if (lamparas == 3 && Marca != "FelipeLamparas" || Marca != "ArgentinaLuz")
			{
				precioLampara = precioLampara * lamparas;

		        precioDescuento =  precioLampara * 5;

		        precioFinal = precioDescuento /100;

		        document.getElementById('precioDescuento').value = precioLampara - precioFinal;
			}
		}
	}
	
}
