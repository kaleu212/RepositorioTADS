const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome:")

let sobrenome = prompt("Digite seu sobrenome:")

let cidade = prompt("Digite sua cidade: ")

let idade = prompt("Digite sua idade:")

let time = prompt("Digite seu time do coração: ")
 
console.log("Olá," + nome + sobrenome + "! É um prazer conhecer você. Eu vejo que você mora na bela cidade de "+ cidade + "Com " + idade + "anos, você ter muitas histórias para contar. E que interessante saber que você é torcedor(a) do "+ time + ". Espero que seu time tenha muitas vitórias pela frente.");