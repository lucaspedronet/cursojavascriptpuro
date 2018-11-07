const arr = [1, 3, 4, 5, 8, 9];
/*
-> Nesta aula vamos conhecer algumas funções que nos permite percorrer o array, sem a necessidade de um for.
*/

const novoArr = arr.map(function(item, index){
    // criando um novo array de nome novoArr e usando a função map em arr passando como parametro a function(item)
    // a função map() percorre todo o vetor arr
    return item * index;
})
console.log(novoArr);

const sum = arr.reduce(function(total, next){ 
    //soma todos os elemnetos do array, onde total é o valor obtido na iteração + next.
    //O next recebe o valor da proxima iteração.
    return total + next;
})
console.log(sum);

const filter = arr.filter(function(item){ 
    //a função filter() nos permite filtrar as informaçõe que queremos obter dentro do array, sem a necessidade criar um for par percorre o array.
    return item %2 === 0;

})
console.log(filter);

const find = arr.find(function(item){
    return item === 3;
})
console.log(find);
