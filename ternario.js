//Exeplpo aula:
//const idadeMinima = 18;
//const idadeCliente = 19;

//if (idadeCliente >= idadeMinima){
    //console.log ("cerveja")
//} else {
   // console.log ("suco")
//}
//console.log (idadeCliente >= idadeMinima ? "cerveja" : "suco")

// 1)Exercício :

const nome = "Leo"; //uma string
const idade = 23; // Um número
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
