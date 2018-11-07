//REST -> SERVE PARA PEGARMOS O RESTO DAS PROPRIEDADES
/*
const usuario={
    nome: 'Lucas Pedro',
    idade: 26,
    empresa: 'Pulso Criativo'
};

//Se utiliza os três pontos ... na sintaxe do REST.
//veja qui nos parametros do objeto usuário não fez necessário mencionar todos, apenas o nome e ...resto.
// com isso obtivemos todos os parametros de usuário.
const {nome, ...resto} = usuario;
console.log(nome, resto);

//a mesma coisa acontece aqui no array arr a variável d armazena todo o resto dos item de arr.
const arr = [1,2,3,4,5,6];
const [a, b, c, ...d] = arr;

console.log(a, b, c, d);
*/

const soma = (a, b) => a+b;
console.log(soma(1,2));

//...params irá pega todas as entradas de dados que forem passadas para adição
function adicao(...params){
    return params.reduce((total, netx) => total+netx);
    //o params nos retorna um vetor com todas as entradas e reduce soma todos os elementos e retorna valor da soma.
}
console.log(adicao(2,2,2));

//SPREAD faz o inverso do REST

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const pessoa = {
    nome: "Lucas Pedro",
    idade: 26,
    empresa: "Pulso"
};

const pessoa2 = {...pessoa, nome: "Pedro"};

console.log(pessoa2);