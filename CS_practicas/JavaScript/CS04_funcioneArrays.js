//Se llama un array constante de edades
const edades = [18, 25, 34];

//Se añade un dato al arrya sabiendo el número de length del array
edades[3]=18;
//Se muestra en consola los datos dentro del array edades
console.log(edades);

//------------------------------------
//Esta parte del código revisa cómo se usa indexOf
//indexOf busca el índice en el que se encuentra algun dato. Si no lo encuentra, regresa -1
let indice = edades.indexOf(18);
console.log(indice);

indice=edades.indexOf(18, 2);
console.log(indice);

indice=edades.indexOf(33);
console.log(indice);
//Se acaba de practicar el indexOf
//----------------------------------------

//Los siguientes códigos repasan cómo se mete un dato al final del array
//edades.length va a regresar el número de datos totales del array, push mete el dato directamente al final
edades[edades.length] = 33;
console.log(edades);

edades.push(54);
//Se ven todos los datos dentro del array edades
console.log(edades);
//Se ven el número total de datos dentro del array edades
console.log(edades.length);

//unshift mete un dato al inicio del array
//Se ve en consola cómo se metió el dato
edades.unshift (99);
console.log(edades[0]);
console.log(edades);


//Vemos pop, una función para los array que elimina el último elemento del arreglo
const nombres = ["Azu", "Maga", "Sebas"];
let eliminado = nombres.pop();
console.log(eliminado);
console.log (nombres);

//Vemos shift, que elimina el primer elemento del array
eliminado = nombres.shift();
console.log(eliminado);
console.log (nombres);
