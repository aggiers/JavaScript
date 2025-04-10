// Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: ")); 

console.log("Tabuada do ${numero}:");

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}