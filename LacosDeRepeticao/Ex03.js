// Verificar senha com tentativa até acertar(Use o While)


var prompt = require('prompt-sync')();

let senha = "1234";
let tentativa = prompt("Digite a senha: ");

while(tentativa !== senha){
    console.log("Senha incorreta. Tente novamente.")
    tentativa = prompt("Digite a senha: ")
}

console.log("Acesso liberado!")
