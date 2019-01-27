var divElement = document.getElementById("app");
var inputElement = document.getElementsByTagName("input")[0];
var butaoElement = document.querySelector("div button");
var ulElement = document.querySelector("div ul");
var strong = document.querySelector("#qntAlunos")
var excluirTudo = document.querySelector("#Excluir")

var alunos = JSON.parse( localStorage.getItem('ListaAlunos')) || [];

function renderizar(){
  ulElement.innerHTML = ''
  strong.innerHTML = ''

  for(aluno of alunos){
    var itemElement = document.createElement("li");
    var itemTexto = document.createTextNode(aluno);
    var linkExcluir = document.createElement('a');
    var index = alunos.indexOf(aluno)
        
    linkExcluir.setAttribute("href","#");
    linkExcluir.appendChild(document.createTextNode("Excluir"));
    linkExcluir.setAttribute("onclick","remover("+index+")");
    itemElement.appendChild(itemTexto);
    itemElement.appendChild(linkExcluir);
    ulElement.appendChild(itemElement);
  }
  var qntAlunos = document.createTextNode(alunos.length)
  strong.appendChild(qntAlunos)  
}

function addTudo() {
  var inputTexto = inputElement.value
  
  if(inputTexto.length){
    alunos.push(inputTexto)
    inputElement.value = ''
    renderizar()
    save()  
  }
}

function remover(index){
  alunos.splice(index, 1)  
  renderizar()
  save()
}

function deletarTudo(){
   while(alunos.length>0){
     alunos.pop()
   }
   console.log(alunos)
   renderizar()
   save()
}

function save(){
  localStorage.setItem("ListaAlunos", JSON.stringify(alunos));
}

renderizar()
console.log(excluirTudo)
butaoElement.onclick = addTudo
excluirTudo.onclick = deletarTudo
