/*CS04. 10.28 am. Vemos forEach, otro loop que puede revisar
uno por uno cada elemento de los arrays*/

//forEach necesita una función, por lo que procedemos a crear una
//Esta función marca un parámetro de valor, que se imprime
function mostrar(valor){
    console.log("Imprimir un valor: ", valor);
}

/*Por ejemplo, la siguiente línea de código
mostraría el número 5:
console.log(mostrar(5))
*/

//Ahora, si existe un array...
const num = [44, 22, 66, 99];

//...forEach va a revisar cada uno de los parámetros y mostrarlos en consola
num.forEach(mostrar);