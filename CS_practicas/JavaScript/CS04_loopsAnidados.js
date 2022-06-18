/*Practicando loops anidados creando tablas de multiplicar
del 1 al 10 por el 1 al 10*/

//El primer for va a checar todas las posibilidades del 1 al 10...
for (let i = 1; i <= 10; i++) {
    /*Pero no avanzará el anterior for, hasta que este for termine
        de probar todas las posibilidades*/
    for (let j=1; j <= 10; j++) {
        console.log("Veamos la tabla del " + i , " : ", i , "*",  j ,  "es", (i*j));
    }
}