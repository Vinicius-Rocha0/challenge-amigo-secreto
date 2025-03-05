let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;
    nome = nome.trim();
    
    if (nome !== "" && amigos.indexOf(nome) === -1) {
        amigos.push(nome);
        input.value = "";
    } else {
        alert("Nome inválido ou já está na lista!");
    }
}
