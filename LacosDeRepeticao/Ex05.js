// Menu simples até o usuário sair(Use o do...While)

var prompt = require('prompt-sync')();

let numero = 0;

do {   
    console.log("+================+")    
    console.log("|                |")    
    console.log("| 1) Musica      |")    
    console.log("| 2) Jogo        |")    
    console.log("| 3) Sair        |")    
    console.log("|                |")    
    console.log("+================+")    
    num = Number(prompt(""))

} while (numero !== 0);




















// var prompt = require('prompt-sync')();

// let soma = 0;
// let numero = Number(prompt("Digite um número (0 para parar):"));

// while (numero !== 0) {
//   soma += numero;
//   numero = Number(prompt("Digite outro número (0 para parar):"));
// }

// console.log(soma);