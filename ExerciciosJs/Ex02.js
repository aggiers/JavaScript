// 2. Maior Palavra
// Peça uma frase e crie uma função que retorna a maior palavra da frase usando
// split() e reduce().

function maiorPalavra(frase) {

    let palavras = frase.split(' ');

    let maior = palavras.reduce(function(maiorAtual, palavraAtual) {
      return palavraAtual.length > maiorAtual.length ? palavraAtual : maiorAtual;
    });

    return maior;
    
  }

  console.log(maiorPalavra('Hoje está um dia ensolarado'));