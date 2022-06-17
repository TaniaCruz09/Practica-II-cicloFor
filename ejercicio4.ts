// Filtrar los elementos de un arreglo de números cuyo valor sean menor que el numero recibido,
//los elementos filtrados se deben guardar en nuevo arreglo.

const original: number[] = [1, 2, 3, 4, 5, 6];
const parameter: number = 3;
let newAr: number[] = [];

for (let i = 0; i < original.length; i++) {
  let myContent: number = original[i];
  if (myContent < parameter) {
    newAr.push(myContent);
  }
}

console.log(`Arreglo original ${original}`);
console.log(`Se filtran los numeros menores a: ${parameter}`);
console.log(`Nuevo Arreglo ${newAr}`);
