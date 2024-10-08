let inicio = parseInt(prompt("Início da partida: "))
let final = parseInt(prompt("Final da partida: "))

let duracao

if (final < inicio) {
    duracao = (24 - inicio) + final
} else if (final > inicio) {
    duracao = final - inicio
} else { duracao = 24 }

alert("A duração da partida foi de " + duracao + "hs.")