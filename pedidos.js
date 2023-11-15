
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
        costoVelas: 600,
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
        costoVelas: 600,
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
        costoVelas: 600,
    }
];

function comprarTorta() {
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = `
        <label for="tortaInput">¿Qué torta desea comprar?</label>
        <input type="text" id="tortaInput" placeholder="Ingrese el nombre de la torta">

        <label for="velasInput">¿Quiere agregar velas? (si/no)</label>
        <input type="text" id="velasInput" placeholder="Ingrese 'si' o 'no'">

        <label for="codigoDescuento">¿Tiene un código de descuento?</label>
        <input type="text" id="codigoDescuento" placeholder="Ingrese el código de descuento">

        <button onclick="procesarCompra()">Procesar Compra</button>
    `;
}

function procesarCompra() {
    const tortaInput = document.getElementById('tortaInput');
    const velasInput = document.getElementById('velasInput');
    const codigoDescuentoInput = document.getElementById('codigoDescuento');

    const tortaNombre = tortaInput.value.toLowerCase();
    const agregarVelas = velasInput.value.toLowerCase();
    const codigoDescuento = codigoDescuentoInput.value.toUpperCase(); 

    const torta = tortas.find(torta => torta.nombre === tortaNombre);

    if (!torta) {
        // alert("Torta no encontrada. Por favor, ingrese una torta válida.");
        Swal.fire({
            icon: "error",
            title: "Torta no disponible",
            text: "Porfavor elegi una torta del catalogo",
            });
        return;
    }

    let costoPorCuota = torta.preciosPorCuotas[1] || 0; // Por defecto, sin cuotas porque no quiero, en el caso de querer activar cuotas lo edito.
    let costoVelas = 0;

    if (agregarVelas === 'si' && torta.costoVelas) {
        costoVelas = torta.costoVelas;
    }

    let seAplicoDescuento = false;

    // Aplicar descuento si el código es válido
    if (codigoDescuento === 'POC10' && torta.precioDescuento10) {
        costoPorCuota = torta.precioDescuento10;
        seAplicoDescuento = true;
    }

    mostrarResultado(tortaNombre, costoPorCuota, costoVelas, seAplicoDescuento);
}

function mostrarResultado(tortaNombre, costoPorCuota, costoVelas, seAplicoDescuento) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>Tu pedido:</h2>
        <p>Eligió la torta ${tortaNombre},</p>
        ${costoVelas ? `<p>Costo adicional por velas: ${costoVelas} pesos.</p>` : ''}
        <p>Total: ${costoPorCuota + costoVelas} pesos.</p>
        ${seAplicoDescuento ? `<p class="descuento">¡Se aplicó un descuento del 10%!</p>` : ''}
    `;
    outputDiv.style.display = 'block';
}
