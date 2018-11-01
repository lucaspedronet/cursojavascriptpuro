var minhaPromise = function() {
  //A função minhaPromise retorna uma Promise
    return new Promise(function(resolve, reject) {
      //Promise tem como parametro um função
      var xhr = XMLHttpRequest();
      xhr.open('GET', 'https://github.com/users/lucaspedronet')
      xhr.send(null)

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200)  {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject('Erro na solicitação da requisição!')
          }
        } 
      }
    });
}

minhaPromise()
  .then(function(response) {
    console.log(response)  
  })
  .catch(function(error) {
    console.log(error)  
  })