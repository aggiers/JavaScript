// Solicitar idade até uma válida (Use o do...While)

var prompt = require('prompt-sync')();

let idade = 0;

do {
    idade = Number(prompt("Quantos anos você tem?: "))

} while (idade < 1)

console.log("Está idade é valida! :)")