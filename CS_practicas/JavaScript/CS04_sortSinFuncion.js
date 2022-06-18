let numberArray = [40, 1, 5, 200, 210];

function compare(a,b) {
    console.log(a-b);
    return a-b;
}

/*
numberArray.sort(compare);
console.log(numberArray);
*/


numberArray.sort(function compare (a, b){return a-b;});

numberArray.sort((a, b) => {return a-b;})