// - para sexo masculino: peso ideal = (72.7 * altura) - 58
//  - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 

let nome = prompt("Qual teu nome? ")
let altura = parseFloat(prompt("Digite sua altura: "))
let sexo = prompt("Qual seu sexo? *Digite 'M' para AMAB e 'F' para AFAB \n AMAB - Designado homem ao nascer \n AFAB - Designado mulher ao nascer ")
''
let pesoIdeal;

if (sexo === "M" | sexo ==="m") {
    pesoIdeal = (72.7 * altura) - 58;
} else if( sexo === "F" | sexo === "f") {
    pesoIdeal = (62.1 * altura) - 44.7;
}else{
    alert("Por favor, informe uma das letras indicadas." )
}
alert("Olá, " + nome + ". Seu peso deveria ser de " + pesoIdeal.toFixed(2))