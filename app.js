let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;
    nome = nome.trim();
    
    if (nome !== "" && amigos.indexOf(nome) === -1) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já está na lista!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um participante.");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = "O amigo secreto sorteado é: " + sorteado;
    resultado.appendChild(li);
}
