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
	var cantLamparas;
	var marca;
	var precioBruto;
	var precioFinal;
	var porcentaje;
	var ingresosBrutos;

	cantLamparas  = document.getElementById('Cantidad').value;
	cantLamparas = parseInt(cantLamparas);
	precioBruto = cantLamparas * 35;
	marca = document.getElementById('Marca').value;
	ingresosBrutos= parseInt(ingresosBrutos);

	if (cantLamparas >5)
	{
		porcentaje = 50;
	}
	else
	{
		if (cantLamparas == 5)
		{
			if (marca == 'ArgentinaLuz')
			{
				porcentaje = 40;
			}
			else  
			{
				porcentaje =30;
			}
		}
		else
		{
			if (cantLamparas == 4)
			{
				if(marca == "ArgentinaLuz" || marca == 'FelipeLamparas')
				{
					porcentaje = 25;
				}
				else
				{
					porcentaje =20;
				}

			}
			else
			{
				if(cantLamparas ==3)
				{
					if(marca == "ArgentinaLuz")
					{
						porcentaje =15;
					}
					else
					{
						if(marca == "FelipeLamparas")
						{
							porcentaje =10;
						}
						else
						{
							porcentaje=5;
						}
					}
				}
			}
		}
	}

	precioFinal = precioBruto - precioBruto *porcentaje/100;
	document.getElementById('precioDescuento').value= precioFinal;

	if (precioFinal >120)
	{
		ingresosBrutos = precioFinal + precioFinal * 10/100;

		alert("IIBB Usted pago: " + ingresosBrutos + " siendo " + precioFinal +" el impuesto que se pagó.");
	}

}
