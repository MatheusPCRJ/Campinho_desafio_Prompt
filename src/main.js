// Primeiro desafio, devolva o dobro!
const clickMultiplier = document.querySelector('#clickMultiplier');
let resultado = document.querySelector('#receiveNumber');
function multiplier(evento) {
    evento.preventDefault();
    const pergunta = parseInt(prompt("Me fale um número que eu devolverei o dobro"));
    return resultado.innerHTML = "O resultado é " + pergunta*2
}
clickMultiplier.onclick = multiplier;

//Segundo desafio, calcule o valor do jantar!
// const valorDoJantar = parseInt(prompt("Me informe o valor do jantar"));
// const taxaGarcon = 12;
// alert("A taxa do garçon é R$12,00.");
// const resultadoFinal = valorDoJantar + taxaGarcon;
// alert(`"O valor total do Jantar sairá por ${resultadoFinal}"`)


//Terceiro desafio, programa para uma pizzaria!
// const valorTotal = parseFloat(prompt("Favor informar o valor total."));
// const clientes = parseInt(prompt("Quantas pessoas irão pagar?"));
// const TotalCadaCliente = valorTotal / clientes;
// alert("Valor de cada um ficou por R$" + TotalCadaCliente.toFixed(2));
