/*
CS03. Ejercicio del 09062022 a las 11.11
Una función para calcular la suma de dos números
*/
function sumar(a, b) {
    return a+b;    
};

function sumarSinRetorno(a, b){
    let resultado = a + b;
    
    console.log("Y el resultado de sumar", a + " y", b + " es:" + " " + (a+b) + " o bien ", resultado);
    
    console.log(`Deja me aviento un template literal: La suma de ${a} y ${b} es ${resultado}`);
    
}
//A continuación dos líneas de código que podemos resumir
/* 
let suma=sumar(4, 5);
console.log("El resultado de la suma es:" + " ", suma);
*/

console.log("El resultado de la suma uno es:" + " " + sumar(4,5));

sumarSinRetorno(10,5);

//let resultadoSinValor=sumarSinRetorno(16,5);
console.warn("El siguiente resultado no tiene valor de la suma, porque viene de una función:", " ", resultadoSinValor);


let miPerrito = "LaYaki";
let cuerdita= typeof(miPerrito);
console.log(typeof(cuerdita));