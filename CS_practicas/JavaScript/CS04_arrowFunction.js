/*Arrow function en forEach */

const numbers = [99, 66, 33, 44];

//numbers.forEach((valor) => console.log("Imprimir valor ", valor));

numbers.forEach((valor) => {
    console.log("El valor es ", valor);
}
)

numbers.forEach((valor, indice, array) => {
    //console.log("El valor es ", valor + " del índice ", indice , " del array", array);
    console.log("El valor de", valor , "se encuentra en index", indice);
    console.log("Todos los datos del array son:", array);
})