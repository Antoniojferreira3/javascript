// Para solicitar entradas do usuario usando o comando prompt no ambiente Node, é necessário:
// 1- instalar a biblioteca com o comando npm install prompt-sync (NO console, NO TERMINAL)
// 2- criar um objeto prompt no seu codigo com o comando var propmpt = require("prompt-sync")()
// 3- utilize normalmente, exemplo: var nome = prompt("digite seu nome")

//importando a biblioteca prompt
let prompt = require("prompt-sync")()


// Primeiro passo: coletar as informações do usuário
let nome = prompt("Digitar seu nome: ")
let horario = prompt("Escolha entre manha, tarde ou noite: ")
// passo 2 - use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"
// agora vou mudar a lógica:
//nesta versão vou usar os comparadores logicos para verificar se a opção e invalida
// if (horario != "tarde" && horario != "manha" && horario != "noite"){
//     console.log ("OPÇÃO INVÁLIDA")
// }
// else if (horario == "manha"){
//     console.log ("Bom dia, " + nome)
// }
// else if (horario == "tarde") {
//     console.log ("Boa tarde, " + nome)
//     }
//     else if (horario == "noite") {
//         console.log ("Boa noite, " + nome)
//         }

//nesta versão (exercicio) utilize o operador logico OU para checar se a entrada é válida no inicio do programa
if (horario == "manha" || horario == "tarde" || horario == "noite"){
         
        
        if(horario == "manha"){console.log(`Bom dia, ${nome}`)} // o sinal de crase serve para mesma coisa que as aspas
        if(horario == "tarde"){console.log(`Bom tarde, ${nome}`)}
        if(horario == "noite"){console.log(`Bom noite, ${nome}`)}
}
else {
console.log("OPÇÃO INVÁLIDA")
}