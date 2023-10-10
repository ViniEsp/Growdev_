// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário.
// imprima no terminal o nome, a idade e o ano de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceuem 2000”.
// OBS: Pegue o ano atual como base

const name = prompt('Digite seu Nome');
let age = parseInt(prompt("Digite sua idade")); 

let year = Date().getFullYear(); // Pega o ano atual

year -= Number(prompt(`Em que ano você nasceu ${name}? `)); // Subtrai o ano digitado pelo usuario da data atual

document.write(`${name}, você tem ${Number(Date().getFullYear()) - Number(prompt(`Ano de ${name}:`))} anos, nasceu em ${year}`);
