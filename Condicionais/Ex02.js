var prompt = require('prompt-sync')();

let idade = prompt("Olá, digite a sua idade: ");

if(idade >= 18){
    console.log("Você pode tirar a carteira.")
} else if(idade < 18){
    console.log("Você não tem idade para tirar a carteira!")
} else {
    console.log("Essa informação não é válida!")
}