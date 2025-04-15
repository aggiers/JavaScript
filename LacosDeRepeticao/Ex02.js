// Somar números até que o usuário digite 0(Use o While)

var prompt = require('prompt-sync')();

let soma = 0;
let numero = Number(prompt("Digite um número (0 para parar):"));

while (numero !== 0) {
  soma += numero;
  numero = Number(prompt("Digite outro número (0 para parar):"));
}

console.log(soma);