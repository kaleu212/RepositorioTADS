const prompt = require("prompt-sync")();

let numb1 = prompt("Digite um número:");
let numb2 = prompt('Digite outro número:');



if(numb1 <= numb2){
    console.log("O maior número é " + numb2)
}
else{
    console.log("O maior número é " + numb1)
}