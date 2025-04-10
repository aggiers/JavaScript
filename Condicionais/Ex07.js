// Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();

let M = Number(prompt("Diigte o número do mês: "));

switch (M){
    case 1:
        console.log("O mês escolhido foi: Janeiro!")
    break;
    case 2:
        console.log("O mês escolhido foi: Fevereiro!")
    break;
    case 3:
        console.log("O mês escolhido foi: Março!")
    break;
    case 4:
        console.log("O mês escolhido foi: Abril!")
    break;
    case 5:
        console.log("O mês escolhido foi: Maio!")
    break;
    case 6:
        console.log("O mês escolhido foi: Junho!")
    break;
    case 7:
        console.log("O mês escolhido foi: Julho!")
    break;
    case 8:
        console.log("O mês escolhido foi: Agosto!")
    break;
    case 9:
        console.log("O mês escolhido foi: Setembro!")
    break;
    case 10:
        console.log("O mês escolhido foi: Outubro!")
    break;
    case 11:
        console.log("O mês escolhido foi: Novembro!")
    break;
    case 12:
        console.log("O mês escolhido foi: Dezembro!")
    break;
}