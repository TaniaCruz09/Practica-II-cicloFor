// Sumar todos los elementos de un arreglo de números

const misNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let sum: number = 0;

for (let i = 0; i < misNumeros.length; i++) {
  sum += misNumeros[i];
}
console.log(`La suma de todos los numeros es ${sum}`);
