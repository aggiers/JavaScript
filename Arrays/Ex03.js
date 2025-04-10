// Um professor quer imprimir as notas de um aluno.( usando ForEach)

var notas = [10.0, 7.5, 8.5, 6.2];

console.log("Notas do aluno:");

notas.forEach(function(nota, indice) {

    console.log("Nota " + (indice + 1) + ": " + nota);
    
});