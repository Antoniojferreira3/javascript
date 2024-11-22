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
if (horario == "manha"){
    console.log ("Bom dia, " + nome)
}
else if (horario == "tarde") {
    console.log ("Boa tarde, " + nome)
    }
    else if (horario == "noite") {
        console.log ("Boa noite, " + nome)
        }
        else{
            console.log("Opção invalida")
        }
    // melhore o codigo incluindo o boa noite, e imprimindo opção inválida caso o usuario nao digite exatamente manha, tarde ou noite