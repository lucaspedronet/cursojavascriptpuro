const usuario = { nome: 'Lucas Pedro'}; // constante de um objeto

usuario.nome = 'Ludimilla'; //mutação da constante usuário
console.log(usuario);

function teste (x){
    let i =10;
    if (x>i){
        console.log(x,i);
    }
}

teste(30);
