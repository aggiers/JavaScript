// Dia da semana por número(Switch case)

var prompt = require('prompt-sync')();

let Dia = Number(prompt("Diigte um dia da semana: "));

switch (Dia){
    case 1:
        console.log("O dia escolhi foi: domingo!")
    break;
    case 2:
        console.log("O dia escolhi foi: segunda!")
    break;
    case 3:
        console.log("O dia escolhi foi: terça!")
    break;
    case 4:
        console.log("O dia escolhi foi: quarta!")
    break;
    case 5:
        console.log("O dia escolhi foi: quinta!")
    break;
    case 6:
        console.log("O dia escolhi foi: sexta!")
    break;
    case 7:
        console.log("O dia escolhi foi: sábado!")
    break;
}