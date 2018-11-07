const arr = [1, 3, 4, 5, 6];
/*
-> Nesta aula vamos conhecer Arrow Functon, com  
*/

const novoArr01 = arr.map(function(item){
    return item * 2;
});
console.log(novoArr01);

// // com a notação Arrow, não precisamos da palavra reservada Function para chamar função.
// //também não precisamos de parentese quando temos apenas um parametro.
// const novoArr02 = arr.map( item => { 
//     return item * 2;
// });
// console.log(novoArr02);

// // aqui temos o usor da tecnica Arrow function muito mais clear e menos verbosa, bem mais simple e com a mesma funcionalidades das anteriores!
// // quando temos apenas uma linha de código em nossa função não precisamos de chaves {}.
// const novoArr03 = arr.map( item => item * 2);
// console.log(novoArr03);

// const teste = () => {
//     return 'Teste';
// }
// console.log(teste());

// const testeObjeto = () => ({nome:'Lucas Pedro'});
// //estamos retornando um objeto sem a necessidade da palavra return
// console.log(testeObjeto());