// //Somar números de 1 a 100(Use o for)

// var prompt = require('prompt-sync')();
// let numero = 0;

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     i++;
// }

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("A soma de 1 a 100 é:", soma);