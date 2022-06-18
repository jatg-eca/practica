let indNumero = 50;
let numero = window.prompt("Inserta un número entre 1 y 100");

parseInt(numero);

while (true) {
    if (numero >= 1 && numero <= 100) {
        break;
    }
    else {
        numero=window.prompt("El número no está entre 1 y 100. Inserte un nuevo número");
    }
}


if (numero == indNumero) {
    window.alert("¡Genial!");
}

else if (numero > indNumero) {
    for (; indNumero<numero; indNumero++) {
    console.log(indNumero);
    }
}
else {
    for (; indNumero > numero; indNumero--) {
        console.log(indNumero);
    }
}

window.alert(`Tu numero es ${indNumero}`);