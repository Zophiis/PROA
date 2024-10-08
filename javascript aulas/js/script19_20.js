let valor1 = parseFloat(prompt("digite um número: "))
let valor2 = parseFloat(prompt("Digite outro número, diferente do anterior: "))

while (valor1 == valor2) {
    alert("Valores iguais não aceitos ")
    valor2 = parseFloat(prompt("Digite outro valor: "))
}

if (valor1 < valor2) {
    alert("A ordem crescente dos números é " + valor1 + ", " + valor2 + "." + "\n"  + "E o valor mais alto é " + valor2 + ".")
} else {
    alert("A ordem crescente é " + valor2 + ", " + valor1 + ". E o valor mais alto é " + valor1 + ".")
}