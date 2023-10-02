//creo la funcion para calcular cuotas
function calcularCostoPorCuotas(pisos, cuotas) {
    let costoPorCuota;

    switch (pisos) {
        case 1:
            if (cuotas === 1) {
                costoPorCuota = 7000;
            } else if (cuotas === 2) {
                costoPorCuota = 3500;
            } else if (cuotas === 3) {
                costoPorCuota = 2333;
            } else {
                alert("El máximo de cuotas posible es 3");
            }
            break;
        case 2:
            if (cuotas === 1) {
                costoPorCuota = 10000;
            } else if (cuotas === 2) {
                costoPorCuota = 5000;
            } else if (cuotas === 3) {
                costoPorCuota = 3333;
            } else {
                alert("El máximo de cuotas posible es 3");
            }
            break;
        default:
            alert("No es posible esa cantidad de pisos");
    }

    if (costoPorCuota) {
        alert("El costo por mes es de " + costoPorCuota + " pesos durante " + cuotas + " meses.");
    }
}

//creo la funcion para elegir torta
function comprarTorta() {
    let pisos = parseInt(prompt("¿De cuántos pisos desea comprar la torta?"));

    switch (pisos) {
        case 1:
            alert("Eligió la torta de un piso");
            let cuotasUno = parseInt(prompt("¿En cuántas cuotas desea la compra?"));
            //llama a la funcion de calcular cuotas creada anteriormente
            calcularCostoPorCuotas(1, cuotasUno);
            break;
        case 2:
            alert("Eligió la torta de dos pisos");
            let cuotasDos = parseInt(prompt("¿En cuántas cuotas desea la compra?"));
            //llama a la funcion de calcular cuotas creada anteriormente
            calcularCostoPorCuotas(2, cuotasDos);
            break;
        default:
            alert("No es posible esa cantidad de pisos");
    }
}

// Llama a la funcion para iniciar la compra
comprarTorta();