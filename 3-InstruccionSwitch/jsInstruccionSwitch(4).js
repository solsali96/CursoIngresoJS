function mostrar() {

    var mes = document.getElementById('mes').value;


    switch (mes) {
        case "Febrero":
            alert("Tiene 28 días");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 días");
            break;

        default:
            alert("Tiene 31 días");
            break;

    }




}