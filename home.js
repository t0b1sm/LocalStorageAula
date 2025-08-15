document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

const nome = localStorage.getItem("nome");
const cor = localStorage.getItem("cor");
const num = localStorage.getItem("num");
const texto = localStorage.getItem("texto");
const qtdCliques = localStorage.getItem("qtdCliques");
const horario = localStorage.getItem("horarioAcesso");
const link = localStorage.getItem("linkHome");
const senha = localStorage.getItem("senha");
const listaSalva = localStorage.getItem("Lista");

// mostra na tela
document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";
document.getElementById("msg_num").textContent = "Cujo seu número favorito é " + num + "!";
document.getElementById("msg_txt").textContent = "Você escreveu: " + texto;
document.getElementById("horaAcesso").textContent = "Você entrou no site no horario: " + horario;
document.getElementById("btnLink").addEventListener("click", function(){
    window.location.href=link;
});
document.getElementById("senha").textContent = "Sua senha é: " + senha + " Meio fraquinha, tu n acha?";
document.body.style.backgroundColor = cor;


var itens = JSON.parse(listaSalva);    
var ul = document.getElementById("listaTxt");
    itens.forEach(item => {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });


// criar um elemento para mostrar os cliques
document.getElementById("qtdCliquesHTML");
qtdCliquesHTML.textContent = `Você apertou o botão ${qtdCliques} vezes!`;



function sair() {
    localStorage.removeItem("nome");
    localStorage.removeItem("cor");
    localStorage.removeItem("num");
    localStorage.removeItem("texto");
    localStorage.removeItem("qtdCliques"); 
    localStorage.removeItem("horarioAcesso");
    localStorage.removeItem("linkHome");
    localStorage.removeItem("senha");
    localStorage.removeItem("lista");

    window.location.href = "login.html";
}
