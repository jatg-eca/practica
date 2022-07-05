//Uso de slice para clonar un array a otro
const nombres = [];

nombres.unshift("Tanix");
nombres.push("Julio")
nombres.unshift("Sebas");

console.log(nombres);

const participantes = nombres.slice();

nombres.unshift("Bebeto");
participantes.unshift("Juanene");

console.log(`En nombres está ${nombres}`);
console.log(`En participantes está ${participantes}`);

//Uso de splice para eliminar elementos, cuántos eliminar y cuántos meter

//Esto borra elementos en el array nombres
console.log(nombres); 
nombres.splice(4);
console.log(nombres);
//Esto cuenta desde el dos para borrar dos
participantes.splice(2,2);
console.log(participantes);
//Se cuenta desde 1 para borrra 1, y añadir abue con otros números
participantes.splice(1, 1, "Abue", 26, 34, "56");
console.log(participantes);
//Se añaden participantes al principio en ese orden
participantes.unshift("Tanix", "Bebeto", "Reyna", "Benito");
console.log(participantes);
//Estas dos líneas quitan y meten informacón y meter info en el medio
participantes.splice(2, 3, "Estrella", "Sergio", "Adrian", "Reyna")
console.log(participantes);
//Con este código puedo medter información sin borrar nada
participantes.splice(5, 0, "Abue2");
console.log(participantes);
console.log(nombres);