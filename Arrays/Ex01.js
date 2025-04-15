// Um mercado quer listar as frutas disponíveis no estoque. Imprima a
// lista deste mercado, com dados fixos.

// um vetor (ou array) é uma coleção de valores, enquanto uma matriz é um objeto que armazena múltiplos valores. 


let frutas = ["maça", "banana", "mamão", "manga"]

console.log("Frutas do mercado:");

for (let i = 0; i < frutas.length; i++) {

  console.log((i + 1) + ". " + frutas[i]);

}