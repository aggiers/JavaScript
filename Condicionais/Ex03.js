// Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

let numero = prompt("Olá, um número: ");

if(numero %2 == 0){
    console.log("Esse número é par.")
} else {
    console.log("Esse número é ímpar.")
}