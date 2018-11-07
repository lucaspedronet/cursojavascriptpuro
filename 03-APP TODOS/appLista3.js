var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

//JSON.parse() converte o parametro localStorage.getItem('Lista_tudo') em um array.
// caso não exista nada em "Lista_tudo" é criado um array vazio.
var alunos = JSON.parse(localStorage.getItem("ListaAlunos")) || []

// var todos = [
//   'Fazer cafe',
//   'Add novo todo',
//   'Estudar javascript',
// ];

function render(){
    listElement.innerHTML = '' //apagando contúdo da <ul>
  for( aluno of alunos) { //for especifico para arrays
    let texto = document.createTextNode(aluno)
    let itemElement = document.createElement('li')
    let index = alunos.indexOf(aluno)
    
    let linkElement = document.createElement("a")
    let excluir = document.createTextNode("Excluir")
    linkElement.setAttribute("href", "#")
    linkElement.appendChild(excluir)
//chamamod o método excluirItem() passando index como parametro.
    linkElement.setAttribute("onclick", "excluirItem(" + index + ")")
    
    itemElement.appendChild(texto)
    itemElement.appendChild(linkElement)
    listElement.appendChild(itemElement)
  }
  save()

}
 render()

 function addList(){
   let texto = inputElement.value
   inputElement.value = ''
   alunos.push(texto) //adicionando conteúdo em alunos.
   render()
   save()
 }

 buttonElement.onclick = addList;

 function excluirItem(index) {
//o splice recebe o 1ª paramentro que é a posição e o 2º é a qnt de item que devem ser removidos do array na aquela possição.
   alunos.splice(index, 1)
   render()
   save()
 }

//  MÉTODO de que sava o array alunos em um espaço de memória que criamos com nome de ListaAluno em localStorage que fica em nossos navegadores.
 function save() {//JSON É UMA VARIAVEL GLOBAL que possui alguns métodos estamos usando stringify() para converter o nosso array alunos em um JSON (string).
  localStorage.setItem("ListaAlunos", JSON.stringify(alunos))
 }