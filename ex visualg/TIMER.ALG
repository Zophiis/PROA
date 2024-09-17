Algoritmo "timer"
// Disciplina   : [Linguagem e Lï¿½gica de Programaï¿½
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/09/2024
Var
   contadora1, contadora2, contadora3, hora, minutos, segundos: inteiro

Inicio
   escreval("Qual a hora da contagem?")
   leia(hora)
   escreval("Quantos minutos da contagem?")
   leia(minutos)
   escreval("Quantos segundos?")
   leia(segundos)


   para contadora1 de hora ate 0 passo -1 faca
      para contadora2 de minutos ate 0 passo -1 faca
         para contadora3 de segundos ate 0 passo -1 faca
         timer 300
            escreval(contadora1, ":", contadora2, ":", contadora3)
         fimpara
         segundos<-59
      fimpara
      minutos<-59
   fimpara
Fimalgoritmo