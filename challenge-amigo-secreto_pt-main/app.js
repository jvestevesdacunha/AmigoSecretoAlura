//Programador: João Vitor Esteves da Cunha 
//Data começo: 17/08/2025
//Data fim: 18/08/2025


//Criar a lista para armazenar amigos:
let amigos = [];

//adcionar os nomes na lista:

function adicionarAmigo() {
    let nomeAmigoInput = document.getElementById('amigo');
    let nomeAmigo = nomeAmigoInput.value;
    
    //verificar se inseriu um nome:
    if(nomeAmigo.trim() === ''){
        alert ('Por favor, insira um nome.');
        return;
    }
    //adcionar o nome do na lista e limpar para inserir o próximo nome:
    else{
        amigos.push(nomeAmigo);
        atualizaLista();
        nomeAmigoInput.value = '';
        console.log('Lista de amigos atualizada:', amigos);
        alert ('Lista atualizada com sucesso!')
    }
    }
//atualizar a lista com o nome inserido:
function atualizaLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (i=0; i<amigos.length;i++){
        let atualiza = document.createElement('li');
        atualiza.textContent = amigos[i];
        lista.appendChild(atualiza);

    }
}
//sorteia um amigo com base em um indice aleaório:
function sortearAmigo(){
    if(amigos == null){
        alert('Não há nomes na lista!');
        return;
    }
    else{
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`; 
    }
   
}

