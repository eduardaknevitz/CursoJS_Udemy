//Fazer estrutura if/else para verificar se um usuário pode dirigir;
//Armazenar em variaveis algumas informações sobre o usuário: idade e CNH;
//Idade>18 e s/CNH, exibir uma mensagem;
//Idade>18 c/CNH, exibir uma mensagem;
//Idade<18 s/CNH, exibir outra mensagem; 

let idade = prompt("Qual sua idade?");
let cnh = prompt("Possui CNH?")


if (idade>18 && cnh == "sim"){
    console.log("Idade e CNH aprovados para dirigir")
} else if (idade>18 && cnh == "não"){
    console.log("Não pode dirigir até obter a CNH!")
} else {
    console.log("Idade inferior ao permitido para dirigir")
}