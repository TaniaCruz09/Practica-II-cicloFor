// Sumar todos los elementos de un arreglo de números cuyo valor sean mayor al numero recibido

const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const limit: number = 4;
let newArray: number[] = [];
let suma: number = 0;

for (let i = 0; i < myArray.length; i++) {
  let myVar: number = myArray[i];
  if (myVar > limit) {
    newArray.push(myVar);
  }
}
for (let i = 0; i < newArray.length; i++) {
  suma += newArray[i];
}

console.log(`El nuevo arreglo es: ${newArray}`);
console.log(`La suma del arreglo es de: ${suma}`);
