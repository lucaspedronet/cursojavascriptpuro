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
    linkExcluir.setAttribute("onclick","removerAluno("+index+")");
    itemElement.appendChild(itemTexto);
    itemElement.appendChild(linkExcluir);
    ulElement.appendChild(itemElement);
  }
  var qntAlunos = document.createTextNode(alunos.length)
  strong.appendChild(qntAlunos)  
}

function addAluno() {
  var inputTexto = inputElement.value
  
  if(inputTexto.length){
    alunos.unshift(inputTexto)
    inputElement.value = ''
    renderizar()
    save()  
  }
}

function removerAluno(index){
  alunos.splice(index, 1)  
  renderizar()
  save()
}

function removerTodoAluno(){
   while(alunos.length>0){
     alunos.pop()
   }
   renderizar()
   save()
  }
  
  function save(){
    localStorage.setItem("ListaAlunos", JSON.stringify(alunos));
  }
  
  renderizar()
  
butaoElement.onclick = addAluno
excluirTudo.onclick = removerTodoAluno
