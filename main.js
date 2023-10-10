//array de tortas
const tortas = [
    {
        nombre: "marquise",
        precio: 6000,
        preciosPorCuotas: {
            1: 6000,
            2: 3000,
            3: 2000
        },
        precioDescuento10: 5100,
        precioVelas: 600,
    },
    {
        nombre: "chocotorta",
        precio: 4000,
        preciosPorCuotas: {
            1: 4000,
            2: 2000,
            3: 1333
        },
        precioDescuento15: 3400,
        precioVelas: 600,
    },
    {
        nombre: "cheesecake",
        precio: 6000,
        preciosPorCuotas: {
            1: 6000,
            2: 3000,
            3: 2000 
        },
        precioDescuento10: 5400,
        precioVelas: 600,
    }
];

//creo la funcion que mostrara opciones de tortas
function mostrarOpcionesTortas() {
    alert("Opciones disponibles:");
    tortas.forEach((torta,) => {
        alert(torta.nombre + ", precio: " + torta.precio + " pesos");
    });
}

//creo la funcion de comprar torta
function comprarTorta() {
    mostrarOpcionesTortas();
    let tortaNombre;
    do {
        tortaNombre = prompt("¿Qué torta desea comprar?").toLowerCase();
    } while (!tortas.some(torta => torta.nombre === tortaNombre));
//metodo de busqueda
    const torta = tortas.find(torta => torta.nombre === tortaNombre);
    alert("Eligió la torta de " + torta.nombre);

    let cuotas;
    do {
        cuotas = parseInt(prompt("¿En cuántas cuotas desea la compra?"));
    } while (!(cuotas in torta.preciosPorCuotas));

    const costoPorCuota = torta.preciosPorCuotas[cuotas];
    alert("El costo por mes es de " + costoPorCuota + " pesos durante " + cuotas + " meses.");

    // Preguntar si desea agregar velas

    let agregarVelas;
    do {
        agregarVelas = prompt("¿Desea agregar velas a su compra? (Si/No)").toLowerCase();
    } while (agregarVelas !== "si" && agregarVelas !== "no");

    let costoTotal = costoPorCuota * cuotas;

    if (agregarVelas === "si") {
        costoTotal += torta.precioVelas;
    }

    alert("El costo total de su compra es de " + costoTotal + " pesos.");
}



// Llama a la función para iniciar la compra
comprarTorta();






