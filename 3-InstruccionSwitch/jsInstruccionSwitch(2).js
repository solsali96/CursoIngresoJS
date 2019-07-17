function mostrar() {
    var mes = document.getElementById('mes').value;

    switch (mes) {

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;
        case "Julio":
        case "Agosto":
            alert("Abrigate hace frío");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("¡Ya pasamos el frío, ahora calor!");
            break;

    }




}