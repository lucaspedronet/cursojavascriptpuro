/*
-> Desistruturação de objetos
*/

const usuario = {
    nome: "Lucas Pedro",
    idade: 26,
    endereco: {
        rua: 'Curitiba',
        setor: 'Planalto'
    }
};
// essa aqui é a maneira antiga e trabalhosa de acessar os atributos de um objetos.
/*const nome = usuario.nome;
const idade = usuario.idade;
const endereco = usuario.endereco.rua;
console.log(nome, idade, endereco);*/

// após const criamos um objeto que foi passdo os parametros do objeto usuário
// dizemos aqui que objeto endereço foi passado como parametro e seus atributos como parametro de endereço.
//const {nome, idade, endereco: {rua, setor} } = usuario;
//console.log(nome, idade,  rua, setor);

const dadosPessoais = ({nome, idade, endereco:{rua,setor}}) => console.log(nome, idade, rua,setor);
console.log(dadosPessoais(usuario));

//exemplo acima utilizamos a desistruturação de objetos na passagem de parametros da função dadosPessoais
// também utilizamos as técnicas e Arrow reduzindo a função dadosPessoais para uma única linha.