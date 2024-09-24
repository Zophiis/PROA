let salarioFixo = parseFloat(prompt("Qual o valor do seu salário? "))
let comissaoFixa = parseFloat(prompt("Qual o valor da sua comissão fixa? "))
let carrosVendidos = parseFloat(prompt("Quantos carros foram vendidos? "))
let valorVendas = parseFloat(prompt("Qual o valor total de suas vendas?"))

let salarioBonus = salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendas * 0.05)
let salarioFinal = salarioBonus.toFixed(2)
alert("O seu salário final será de: R$" + salarioFinal)
