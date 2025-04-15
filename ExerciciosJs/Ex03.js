// 3. Contar Palavras com Letra Inicial
// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().


var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");
let letra = prompt("Digite uma letra: ");

function contarPalavrasComLetra(frase, letra) {
    
    const letraMinuscula = letra.toLowerCase();
    
    const palavras = frase.split(" ");
  
    const palavrasComLetra = palavras.filter(palavra =>
      palavra.toLowerCase().startsWith(letraMinuscula)
    );
  
    return palavrasComLetra.length;
  }

let resultado = contarPalavrasComLetra(frase, letra);
  
console.log(`Total de palavras com a letra '${letra}': ${resultado}`);
  