//**************************
let stringArray = ['Johana', 'Miri', 'Maria', 'aaron'];
let numberArray = [40, 1, 5, 200, 210];
let numericStringArray = ['80', '9', '700'];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

function compare(a, b) {
  if (a<b){
    return -1;
  }
  if (a>b){
    return 1;
  }
  return 0;
}

//console.log ( stringArray.join() ); // 'Juan,Pedro,María'
//console.log ( stringArray.sort() ); // ['Juan', 'María', 'Pedro']

//console.log ( numberArray.join() ); // '40,1,5,200'
//console.log ( numberArray.sort() ); // [1, 200, 40, 5]
console.log ( numberArray.sort(compareNumbers) ); // [1, 5, 40, 200]
console.log ( numberArray.sort(compare) ); // [1, 5, 40, 200
