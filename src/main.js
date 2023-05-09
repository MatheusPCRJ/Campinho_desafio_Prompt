// Primeiro desafio, devolva o dobro!
const clickMultiplier = document.querySelector('#clickMultiplier');
let resultado = document.querySelector('#receiveNumber');

function multiplier() {
    const pergunta = parseInt(prompt("Me fale um número que eu devolverei o dobro"));
    return resultado.innerHTML = "O resultado é " + (pergunta*2).toFixed(2);
}
clickMultiplier.onclick = multiplier;



const clickDinner = document.querySelector('#linkDinner');
let resultDinner = document.querySelector('#resultDinner');

function calculateDinner() {
    const valueDinner = parseInt(prompt("Me informe o valor do jantar"));
    alert("A taxa do garçon é R$12,00.");
    const rateWaiter = 12;
    const resultFinal = valueDinner + rateWaiter
    return resultDinner.innerHTML = "Valor do jantar ficou por R$" + resultFinal.toFixed(2);
}
clickDinner.onclick = calculateDinner;



//Terceiro desafio, programa para uma pizzaria!
// const valorTotal = parseFloat(prompt("Favor informar o valor total."));
// const clientes = parseInt(prompt("Quantas pessoas irão pagar?"));
// const TotalCadaCliente = valorTotal / clientes;
// alert("Valor de cada um ficou por R$" + TotalCadaCliente.toFixed(2));
