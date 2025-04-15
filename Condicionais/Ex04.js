// Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();

let senha = prompt("Digite a senha: ");;

if(senha == "123"){
    console.log("A senha está correta.")
} else {
    console.log("A senha está incorreta!")
}