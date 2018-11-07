// PRIMEIRA AULA
var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

//JSON.parse() converte o parametro localStorage.getItem('Lista_tudo') em um array.
// caso não exista nada em "Lista_tudo" é criado um array vazio.
var todos = JSON.parse(localStorage.getItem('Lista_tudo')) || [];
// var todos = [
//   'Fazer cafe',
//   'Add novo todo',
//   'Estudar javascript',
// ];


function renderTodo() {
    listElement.innerHTML = ""; //apagando conteúdo de ul
  for (todo of todos) { //um for especifico para arrays
    var liElemente = document.createElement("li")
    var text = document.createTextNode(todo)
    
    liElemente.appendChild(text)
    var index = todos.indexOf(todo)
    var excluirElement = document.createElement("a")
    excluirElement.setAttribute("onclick", "excluirTodo(" + index + ")")

    excluirElement.setAttribute("href", "#")
    text = document.createTextNode("Excluir")
    excluirElement.appendChild(text)
    liElemente.appendChild(excluirElement)
    listElement.appendChild(liElemente)

  }
}
renderTodo()

function addTodo() {
  var textTodo =  inputElement.value;

  todos.push(textTodo); //adicionando conteúdo em todos.
  inputElement.value = "";//apagando conteúdo de value
  renderTodo()
  saveStore()
}
buttonElement.onclick = addTodo;

function excluirTodo(index) {
//o splice recebe o 1ª paramentro que é a posição e o 2º é a qnt de item que devem ser removidos do array na aquela possição.
  todos.splice(index, 1)
  renderTodo()
  saveStore()
}

function saveStore() {
    localStorage.setItem("Lista_tudo", JSON.stringify(todos))
}