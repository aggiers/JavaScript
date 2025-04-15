// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let lista = [' Agatha '];

let nome;

do {
    nome = prompt("Digite seu nome (ou 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === "sair") {
        break;
    }

    const existe = lista.some(n => n.toLowerCase() === nome.toLowerCase());

    if (existe) {
        console.log("Nome já utilizado.");
    } else {
        lista.push(nome);
        console.log("Nome adicionado ao sistema.");
    }

} while (true);

// console.log(`Lista final: ${lista}`);
console.log("Lista final de nomes:", lista)
