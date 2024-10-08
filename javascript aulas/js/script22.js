
let horasMensais = parseInt(prompt("Quantas horas tu trabalhou este mês?"))
let horaSemanal = horasMensais / 4
if (horaSemanal < 40) {
    alert("Tu está devendo horas, verificaque se haverá descontos.")
} else if (horaSemanal > 40) {
        let salarioMensal = parseFloat(prompt("Quanto tu recebe? "))
        let salarioHora = (salarioMensal / 28) / 7
        // considerando mês de 28 dias pois o exercício pede 4 semanas exatas.
        horaExtra = horaSemanal - 40 * (salarioHora * 0, 5 / 100)
    
    alert("Tu receberá R$" + horaExtra + " em horas extras." + "\n" + "Teu salário será de R$" + (salarioMensal + horaExtra) + " neste mês.")
} else {
    alert("Tu não fez horas extras, teu salário virá no valor normal.")
}