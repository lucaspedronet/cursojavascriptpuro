class List{
    constructor(){
        this.todos =[];
        this.usuario = [];
        this.nome = ""
        this.idade = 0
    }
    
    
    
}

class Matematica{
    static soma(a, b){
        console.log(a+b)
        return a+b;
    }
}
class TodoList extends List{ //herança de List
    constructor(){
        super();
        //this.usuario = 'Lucas Pedro'
    }
    add(){
        var nome = document.querySelector('#app input'); // capcturando as informções no input e add em nome
        var idade = document.getElementById("usuario");

        this.nome = nome.value;
        this.idade = idade.value;  // usuario esta recebendo o valor value de idade
        
        this.usuario.push(this.nome, this.idade);
        this.todos.push(this.usuario);   //
        console.log(this.todos);
    }
    msg(){
        
        alert('Novo Usuário adicionado: '+ this.nome +" "+ this.idade);
        }
}

var MinhaLista = new TodoList(); // instânciando um objeto de TodoList e armazenando em MinhaLista
var teste = new List();

document.getElementById('novoUser').onclick = function(){// getElementById busca ação do click do usuário e após isso chama a função Minha.add()
    MinhaLista.add();
    MinhaLista.msg();
    Matematica.soma(10,20);
}