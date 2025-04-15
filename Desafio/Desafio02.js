// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

const objeto = [
    {nome: "Tenis", valor: "69.99"},
    {nome: "Camisa", valor: "19.99"}
]

 let valor = objeto.map(objeto => objeto.nome+" R$ "+objeto.valor);

console.log(valor);

