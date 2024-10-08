let qnt_macas = parseInt(prompt("Quantas maçãs foram compradas? "))
if (qnt_macas < 12 ){
    let pouca_maca = qnt_macas * 1.30
    alert("Suas maçãs custaram R$" + pouca_maca)
} else {
    let muita_maca = qnt_macas * 1.00
    alert("Suas maçãs custaram R$" + muita_maca)
}