let av1 = parseFloat(prompt("Qual a nota da primeira avaliação?"))
let av2 = parseFloat(prompt("Qual a nota da segunda avaliação?"))
let media = av1 + av2 /2

if (media >= 6 ){
    alert("Sua média é "+ media + ". Você foi aprovade.")
}else{
    alert("Sua média é "+ media + ". Sua nota está abaixo da média. Você foi reprovade.")
}