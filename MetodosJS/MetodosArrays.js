// .lenght() => tamanho
// let frutas = ["Amora", "Limão", "Morango", "Uva verde", "Melancia"];

// // console.log() => imprime o seu código
// console.log(frutas.length);

//                0  1  2
// let numeros = [30,23,12]
// console.log(numeros.lenght)

// -------------------------------------------- //

// .reverse() => reverte a ordem do array
// let numeros = [70, 100, 50, 23];

// numeros.reverse();

// console.log(numeros);


// ------------------------------------------- //


// let nomes = ["Juliana", "Thiago", "Sophia", "Bryan"];

// .push() => adiciona mais um objeto no final
// nomes.push("Jean");

// .unshift() => adiciona um obejo no inicio
// nomes.unshift("Agatha");

// console.log(nomes);

// .pop() => remove um objeto no final
// nomes.pop();

// .shift() => remove um objeto no inicio
// nomes.shift("Juliana");

// .splice() => adiciona ou remove elementos do array
// nomes.splice(0,1);

// console.log(nomes);


// ------------------------------------------ //


// let nomeAnimais = ["Luna", "Felicia", "Branca"];

// .includes() => se existe no array e se existir, ele retornará true. se não, false
// console.log(nomeAnimais.includes("Bobby"));


// ------------------------------------------ //


// let valores = [30, 55, 40, 100];
// // quero os valores maiores que 50
// let maiores = valores.filter(num => num > 50);

// console.log(maiores);


// ------------------------------------------- // 


// .map() => definição: método usado em arrays que permite transformar os 
// elementos do array original em novos valores, criando um novo array, sem
// modificar o original

// 1. lista de nomes de alunos e notas

// let alunos = [
//     {nome: "Agatha", nota: 10},
//     {nome: "Jean", nota: 3},
//     {nome: "Layza", nota: 9}
// ];
// lista de nomes
// let alunoNomes = alunos.map(alunos => alunos.nome);

// console.log(alunoNomes);


// 2. Criar um array com mensagens personalizadas

// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"]

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);

// console.log(mensagem);


// 3. pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicialNomes = nomes.map(itemNomes => itemNomes[0]);

// console.log(inicialNomes);


// 4. emails

// let emails = [
//     "agatha@gmail.com", "layza@outlook.com"
// ];

// let dominios = emails.map(element => element.split("@")[1]);

// console.log(dominios);


// const nome = "Laura";

// console.log(nome.toUpperCase());
// console.log(nome.toLowerCase());


// --------------------------------------------------- //


// FRASES.
// const frase = "Hoje é um bom dia para estudar JavaScript.";

// console.log(frase.includes("JavaScript")); // true
// console.log(frase.includes("Python"));     // false


// --------------------------------------------------- //


// const texto = "Olá, Agatha!";
// const novoTexto = texto.replace("Agatha", "Layza");

// console.log(novoTexto); // "Olá, Agatha!"


// --------------------------------------------------- //

// NUMEROS.

// trazer as casas depois da vírgula
// const numero = 155.999;

// console.log(numero.toFixed(2));


// -------------------------------------------------- //

// OBJETOS.

// const irmaos = [
//     {nome: "Agatha", idade: 17, cpf: "000.000.000-00"},
//     {nome: "Bryan", idade: 14, cpf: "100.100.100-10"},
//     {nome: "Sophia", idade: 10, cpf: "200.020.002-02"}
// ];

// // quem sao as chaves do meu objeto
// console.log(Object.keys(irmaos));
// // quais sao os valores do meu objeto
// console.log(Object.keys(irmaos));


// --------------------------------------------- //

// let agora = new Date();
// let horaBrasilia = agora.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
// // console.log(horaBrasilia);
// console.log(agora.getFullYear());
// console.log(agora.getDay());
// console.log(agora.getDate());
// console.log(agora.getMilliseconds());
// console.log(agora.getMonth());






