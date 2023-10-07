//array de tortas
const tortas = [
    {
        nombre: "marquise",
        preciosPorCuotas: {
            1: 6000,
            2: 3000,
            3: 2000
        }
    },
    {
        nombre: "chocotorta",
        preciosPorCuotas: {
            1: 4000,
            2: 2000,
            3: 1333
        }
    },
    {
        nombre: "cheesecake",
        preciosPorCuotas: {
            1: 6000,
            2: 3000,
            3: 2000 
        }
    }
];

//creo la funcion de comprar torta
function comprarTorta() {
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
}

// Llama a la función para iniciar la compra
comprarTorta();






