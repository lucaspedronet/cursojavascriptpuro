/*
1º exercício
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", 
essa classe deve extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, 
e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas 
deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" 
como true na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
*/

class Admin{
    constructor(email, senha){
        this.e_mail = email;
        this.senha = senha;
        this.admin = null;
        
    }
    isAdmin(user){
        if (user instanceof Usuario){
            return this.admin= false;
        } else{
            return this.admin = true;
        }
    }

}

class Usuario extends Admin{
    constructor(){
        super();
    }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin(User1)) // false
console.log(Adm1.isAdmin(Adm1)) // true

/*
2º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
*/

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];

const idadeAll = usuarios.map(function(item){
    return item.idade; // retonar a idade
})  

//maneira otimizada de realizar a mesma coisa, usando arraw
const idadeFul = usuarios.map( item => item.idade); // retonar a idade

console.log(idadeAll);
console.log(idadeFul);

/*
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e 
com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
*/

const trabalham = usuarios.filter(function(item){
    if (item.empresa === "Rocketseat" && item.idade>18){
        return item
    }
});

console.log(trabalham);

/*
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
*/

const Google = usuarios.find(item => item.empresa === "Google");
console.log(Google);

/*
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro 
nos usuários que possuem no máximo 50 anos:
*/

const cinquenta = usuarios.map(function(item){
    item.idade = item.idade*2; 
    if (item.idade<=50){
        return item;
    }

});
console.log(cinquenta);
/*
3º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});
*/
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(item => item +10);
console.log(arr2);

/*
// 3.2 
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);*/

const usuario = { nome: 'Diego', idade: 23 };
const mostra = () => (usuario.idade); 
//a constante mostra recebeu "()" (este parente entre aspas é umafunção)  e retorna usuario.idade
console.log(mostra());

/*
// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
*/
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18)=> ({nome, idade});

console.log(mostraUsuario('lucas', 26));

/*
// 3.4

const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  })
}
*/

//const promise = () => Promise((resolve, reject) => (resolve()));
//console.log(promise());

/*
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

*/

const empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
    }
  };
  
const dadosPessoais = ({nome, endereco:{cidade, estado}}) => console.log(nome, cidade, estado);
console.log(dadosPessoais(empresa)); 

/*
function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })
Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:

return `${nome} tem ${idade} anos.`;
*/

 function mostraInfo({nome, idade}) {return `${nome} tem ${idade} anos.`};
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

 /*
 Utilizando o operador de rest/spread (...) realize as seguintes operações:

5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x 
que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

// function soma...

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
 */

const lista = [1, 2, 3, 4, 5, 6];
const x = (lista) => lista[0];

const newListar = [x, ...lista];

console.log(newListar);