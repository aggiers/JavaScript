var prompt = require('prompt-sync')();
 
 let x = prompt("Olá, digite um número: ");

    if (x > 0) {
      console.log("O número é positivo.");
    } else if (x < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
  