<<<<<<< HEAD
// Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. 
// Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessárioconsiderar o mês em que a pessoa nasceu).

var anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
var anoAtual = new Date().getFullYear();

var idade = anoAtual - anoNascimento;

var mensagem = ((idade >= 16) && (anoAtual % 4 ==0)) ?"Pode votar" : "Nao pode votar";

console.log;(mensagem);

// if ((idade >= 16) && (anoAtual % 4 ==0)) {
//     console.log("Pode votar");
// } else {
//     console.log("Nao pode votar");
=======
// Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. 
// Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessárioconsiderar o mês em que a pessoa nasceu).

var anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
var anoAtual = new Date().getFullYear();

var idade = anoAtual - anoNascimento;

var mensagem = ((idade >= 16) && (anoAtual % 4 ==0)) ?"Pode votar" : "Nao pode votar";

console.log;(mensagem);

// if ((idade >= 16) && (anoAtual % 4 ==0)) {
//     console.log("Pode votar");
// } else {
//     console.log("Nao pode votar");
>>>>>>> 663bc9bc7b647aa1dfab92136474250c2a04ce18
// }