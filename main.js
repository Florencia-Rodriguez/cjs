let producto = prompt("De cuantos pisos desea comprar la torta?")
while(producto) {
    switch (producto){
        case "1":
            alert ("Eligio la torta de un piso")
        let preguntacuotas = prompt("En cuantas cuotas desea la compra?");
if (preguntacuotas < 2) {
    alert ("El costo en una sola cuota es de 10.000 pesos")
    
} 
else if (preguntacuotas <3){
    alert ("El costo por mes es de 5.000 pesos durante dos meses")
}
else if (preguntacuotas <4){
    alert ("El costo por mes es de 3.333 pesos durante tres meses")
}
else if (preguntacuotas <5){
    alert ("El costo por mes es de 2.500 pesos durante cuatro meses")
}
else if (preguntacuotas <6){
    alert("El costo por mes es de 2.000 pesos durante cinco meses")
}
else if (preguntacuotas <7){
    alert("El costo por mes es de 1.666 pesos durante seis meses")
}
else {
    alert("El maximo de cuotas posible es 6")
}
            break;
        case "2":
            alert ("Eligio la torta de dos pisos")
            let preguntacuotasdos = prompt("En cuantas cuotas desea la compra?");
if (preguntacuotasdos < 2) {
    alert ("El costo en una sola cuota es de 15.000 pesos")
    
} 
else if (preguntacuotasdos <3){
    alert ("El costo por mes es de 7.000 pesos durante dos meses")
}
else if (preguntacuotasdos <4){
    alert ("El costo por mes es de 5.000 pesos durante tres meses")
}
else if (preguntacuotasdos <5){
    alert ("El costo por mes es de 3.750 pesos durante cuatro meses")
}
else if (preguntacuotasdos <6){
    alert("El costo por mes es de 3.000 pesos durante cinco meses")
}
else if (preguntacuotasdos <7){
    alert("El costo por mes es de 2.500 pesos durante seis meses")
}
else {
    alert("El maximo de cuotas posible es 6")
}
            break;
        default:
            alert ("No es posible esa cantidad de pisos")
            break;
    }

}

