
const tortas = [
    {
        nombre: "pavloa",
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
        nombre: "budin",
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

//MAIL!!!!!!!!
// Para enviar mail
const nodemailer = require('nodemailer');

// Configura el transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'resumenesflore@gmail.com',
        pass: 'pApimAmi2702'
    }
});




function comprarTorta() {
    const inputContainer = document.getElementById('input-container');
    const volverAtrasBtn = document.getElementById('volverAtrasBtn');
    const opcionesContainer = document.getElementById('opcionesContainer');
    const empezarBtn = document.getElementById('empezarBtn');

    volverAtrasBtn.style.display = 'none';

    opcionesContainer.style.display = 'none';
    empezarBtn.style.display = 'none';

    inputContainer.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Ingrese su nombre">

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder="Ingrese su apellido">
        
        <label for="tortaInput">¿Qué torta desea comprar?</label>
        <select id="tortaInput">
            <option value="pavloa">Pavloa</option>
            <option value="budin">Budin</option>
            <option value="chocotorta">Chocotorta</option>
            <option value="cheesecake">Cheesecake</option>
            <option value="marquise">Marquise</option>
        </select>

        <label for="velasInput">¿Quiere agregar velas? (si/no)</label>
        <input type="text" id="velasInput" placeholder="Ingrese 'si' o 'no'">

        <label for="codigoDescuento">¿Tiene un código de descuento?</label>
        <input type="text" id="codigoDescuento" placeholder="Ingrese el código de descuento">

        <button onclick="procesarCompra()">Procesar Compra</button>
    `;
}

function procesarCompra() {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const tortaInput = document.getElementById('tortaInput');
    const velasInput = document.getElementById('velasInput');
    const codigoDescuentoInput = document.getElementById('codigoDescuento');

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const tortaNombre = tortaInput.value.toLowerCase();
    const agregarVelas = velasInput.value.toLowerCase();
    const codigoDescuento = codigoDescuentoInput.value.toUpperCase(); 

    const torta = tortas.find(torta => torta.nombre === tortaNombre);

    if (!torta) {
        Swal.fire({
            icon: "error",
            title: "Torta no disponible",
            text: "Porfavor elegi una torta del catalogo",
        });
        return;
    }

    let costoPorCuota = torta.preciosPorCuotas[1] || 0;
    let costoVelas = 0;

    if (agregarVelas === 'si' && torta.costoVelas) {
        costoVelas = torta.costoVelas;
    }

    let seAplicoDescuento = false;

    if (codigoDescuento === 'POC10' && torta.precioDescuento10) {
        costoPorCuota = torta.precioDescuento10;
        seAplicoDescuento = true;
    }

    mostrarResultado(nombre, apellido, tortaNombre, costoPorCuota, costoVelas, seAplicoDescuento);
}



function mostrarResultado(nombre, apellido, tortaNombre, costoPorCuota, costoVelas, seAplicoDescuento) {
    const inputContainer = document.getElementById('input-container');
    const outputDiv = document.getElementById('output');
    const volverAtrasBtn = document.getElementById('volverAtrasBtn');
    const opcionesContainer = document.getElementById('opcionesContainer');
    const empezarBtn = document.getElementById('empezarBtn');

    // Oculta el formulario
    inputContainer.style.display = 'none';

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pedido Procesado",
        showConfirmButton: false,
        timer: 1500
        
        });
    
    outputDiv.innerHTML = `
        <h2>Tu pedido ${nombre} ${apellido}:</h2>
        <p>Eligió la torta ${tortaNombre},</p>
        ${costoVelas ? `<p>Costo adicional por velas: ${costoVelas} pesos.</p>` : ''}
        <p>Total: ${costoPorCuota + costoVelas} pesos.</p>
        ${seAplicoDescuento ? `<p class="descuento">¡Se aplicó un descuento del 10%!</p>` : ''}
        <p>Alias: Peace.Of.Cakes CBU:0000022222233333</p>
        <p class="alertapedido">Para finalizar el pedido enviar comprobante de pago junto con los datos del pedido a peaceofcakes@gmail.com luego de hacer la transferencia.</p>
    `;
    outputDiv.style.display = 'block';

    volverAtrasBtn.style.display = 'block';

    opcionesContainer.style.display = 'none';
    empezarBtn.style.display = 'none';
}


function volverAtras() {
    const inputContainer = document.getElementById('input-container');
    const outputDiv = document.getElementById('output');
    const volverAtrasBtn = document.getElementById('volverAtrasBtn');
    const opcionesContainer = document.getElementById('opcionesContainer');
    const empezarBtn = document.getElementById('empezarBtn');


    // Muestra el formulario
    inputContainer.style.display = 'block';

    // Oculta los resultados
    outputDiv.style.display = 'none';

    // Oculta el botón de volver atrás
    volverAtrasBtn.style.display = 'none';

    opcionesContainer.style.display = 'block';
    empezarBtn.style.display = 'block';
}




// Obtener la fecha actual
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
const mesActual = fechaActual.getMonth() + 1; // Se suma 1 ya que los meses son indexados desde 0
const diaActual = fechaActual.getDate();

// Elemento p mostrar el resultado 
const resultadoElemento = document.getElementById('resultadoEnvioRetiro');

// Realizar la solicitud a la API para verificar si es un día festivo
fetch(`https://date.nager.at/api/v2/PublicHolidays/${añoActual}/us`)
    .then(response => response.json())
    .then(data => {
        console.log('Datos obtenidos:', data);
        // Comprueba si el día actual es un día festivo
        const esDiaFestivo = data.some(holiday => {
            const fechaHoliday = new Date(holiday.date);
            return fechaHoliday.getMonth() + 1 === mesActual && fechaHoliday.getDate() === diaActual;
        });

        // Modificar el contenido del elemento en el pie de página
        resultadoElemento.textContent = esDiaFestivo ? 'Hoy es un día festivo. No hay envío/retiro disponible.' : 'Hoy no es un día festivo. Puedes realizar envío/retiro.';
    })
    .catch(error => {
        console.error('Error:', error);
        // En caso de error
        resultadoElemento.textContent = 'Error al obtener la información. Inténtalo de nuevo más tarde.';
    });




