var salario = parseFloat(prompt("Qual o valor do salário atual? "))
var reajuste = parseFloat(prompt("Qual o valor de reajuste? "))
var novoSalario = (salario * reajuste /100) + salario
var salarioDefinitivo = novoSalario.toFixed(2)
alert("Seu novo salario será de: R$"+ salarioDefinitivo)