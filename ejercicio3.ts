// Filtrar los elementos de un arreglo de números, cuyo valor sean mayor que el numero recibido
//los elementos filtrados se deben guardar en nuevo arreglo.

const Original: number[] = [1, 2, 3, 4, 5, 6];
const parametro: number = 4;
let nuevoArreglo: number[] = [];

for (let i = 0; i < Original.length; i++) {
  let miVar: number = Original[i];
  if (miVar > parametro) {
    nuevoArreglo.push(miVar);
  }
}

console.log(`Arreglo original ${Original}`);
console.log(`Se filtran los numeros mayores a: ${parametro}`);
console.log(`Nuevo Arreglo ${nuevoArreglo}`);
