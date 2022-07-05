/*CS03. Práctica de operaciones del 09062022-
Se inicia con las funciones de sumas, restas, divisiones, multiplicaciones
y exponenciales
*/
function sumas(a,b)
{
    return a+b;
};

function restas(a,b)
{
    return a-b;
};

function division(a,b)
{
    return a/b;
};

function multiplicacion(a,b)
{
    return a*b;
};

function exponencial(a,b)
{
    return a**b;
};

//Inicia el código. Se asignan dos valores

let valorA= 10;
let valorB= 11;

//Los siguientes dan en la consola los resultados de las operaciones 
console.log("El resultado de la suma es " + sumas(valorA, valorB));
console.log("El resultado de la resta es " + restas(valorA, valorB));
console.log("El resultado de la division es " + division(valorA, valorB));
console.log("El resultado de la multiplicacion es " + multiplicacion(valorA, valorB));
console.log("El resultado de la exponencial es " + exponencial(valorA, valorB));
//En loas siguientes líneas practico template literal
console.info(`-------------- Practicar con TL --------------`);
            
console.log(`Con template literal, la suma es ${sumas(valorA, valorB)}`);
console.log(`Con template literal, la resta es ${restas(valorA, valorB)}`);
console.log(`Con template literal, la división es ${division(valorA, valorB)}`);
console.log(`Con template literal, la multiplicación es ${multiplicacion(valorA, valorB)}`);
console.log(`Con template literal, la exponencial es ${exponencial(valorA, valorB)}`);