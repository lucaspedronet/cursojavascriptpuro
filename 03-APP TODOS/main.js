// JS ASSÍNCRONO 
// AJAX é uma forma de solicitarmos requisições ao servidor sem ter a necessidade de atulizar a página.

var xhr = new XMLHttpRequest(); //Atribuimos a xhr todas as funcionalidades da classe/função do AJAX, para podermos recuperar alguma requisição ao servidor.

//por meio de xhr conseguimos invocar o método open() e passamos dois parametros o 1º é o método 'GET' e 2º a URL de github.
xhr.open('GET', 'https://api.github.com/users/lucaspedronet')
xhr.send(null)
