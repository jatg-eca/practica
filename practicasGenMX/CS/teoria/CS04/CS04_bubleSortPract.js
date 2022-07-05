//MI PRIMER BUBBLE SORT!!!!!!!!!!!!!!

function bubbleSortUno(inputArr){
    //Esta parte itera sobre la longitud del array
    for (let i = 0; i < inputArr.length; i++) {
        //Esta parte itera sobre los valores del array
        for (let j=0; j < inputArr.length; j++) {
           //Esta parte revisa dos pares
            if (inputArr[j]>inputArr[j + 1]) {
                //Si el elemento revisado es mayor, se guarda el valor
             let tmp = inputArr[j];
                //Se cambia el valor por el valor menor
                inputArr[j]=inputArr[j + 1];
                //Se cambia el valor mayor por el temporal guardado
                inputArr[j+1]=tmp;
           } 
        }
    }
    //Regresa todo el array
    return inputArr;
};

console.log(bubbleSortUno([54, 45 ,300, 23, 44, 56, 99, 54]));