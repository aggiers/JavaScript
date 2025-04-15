// Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let nota = prompt("Digite a nota: ");

if(nota >= 6){
    console.log("Esse aluno foi aprovado.")
} else {
    console.log("Esse aluno foi reprovado.")
}