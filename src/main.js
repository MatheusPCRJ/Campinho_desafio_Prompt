// Primeiro desafio, devolva o dobro!
const clickMultiplier = document.querySelector('#clickMultiplier');
let resultado = document.querySelector('#receiveNumber');

function multiplier() {
    const pergunta = parseFloat(prompt("Me fale um número que eu devolverei o dobro"));
    return resultado.innerHTML = "O resultado é " + (pergunta * 2).toFixed(2);
}
clickMultiplier.onclick = multiplier;



const clickDinner = document.querySelector('#clickDinner');
let resultDinner = document.querySelector('#resultDinner');

function calculateDinner() {
    const valueDinner = parseFloat(prompt("Me informe o valor do jantar"));
    alert("A taxa do garçon é R$12,00.");
    const rateWaiter = 12;
    const resultFinal = valueDinner + rateWaiter
    return resultDinner.innerHTML = "Valor do jantar ficou por R$" + resultFinal.toFixed(2);
}
clickDinner.onclick = calculateDinner;



const clickPizza = document.querySelector('#clickPizza');
let resultPayment = document.querySelector('#resultPayment');

function calculatePayment() {
    const valorTotal = parseFloat(prompt("Favor informar o valor total."));
    const clientes = parseInt(prompt("Quantas pessoas irão pagar?"));
    const TotalCadaCliente = valorTotal / clientes;
    return resultPayment.innerHTML = "O valor para cada ficou por R$" + TotalCadaCliente.toFixed(2);
}
clickPizza.onclick = calculatePayment;
