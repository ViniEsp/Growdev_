<<<<<<< HEAD

var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
var votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
var votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
var votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

// Calcula os percentuais
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

document.write("\nResultados:<br>");

document.write("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>");
document.write("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>");
=======

var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
var votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
var votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
var votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

// Calcula os percentuais
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

document.write("\nResultados:<br>");

document.write("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>");
document.write("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>");
>>>>>>> 663bc9bc7b647aa1dfab92136474250c2a04ce18
document.write("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%<br>");