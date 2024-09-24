var valorCarro = parseFloat(prompt("Qual o custo de fábrica? "))
var custoTotal = (valorCarro * 0.28) + (valorCarro * 0.45) + valorCarro
var custoTotalFixed = custoTotal.toFixed(2)
alert("O valor final do carro é de: R$" + custoTotalFixed)