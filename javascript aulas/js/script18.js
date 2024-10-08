let anoAtual = parseInt(prompt("Em que ano estamos? "))
let anoNasc = parseInt(prompt("Em que ano tu nasceu? "))

if ((anoAtual - anoNasc) < 16){ //funciona COM e SEM os parenteses extras
    alert("Não poderá votar enste ano.")
} else if (anoAtual-anoNasc < 18){
    alert("Teu voto é opcional.")
}else {
    alert("Teu voto é obrigatório.")
}