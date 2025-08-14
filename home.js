document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

// pega dados salvos
const nome = localStorage.getItem("nome");
const cor = localStorage.getItem("cor");
const num = localStorage.getItem("num");
const texto = localStorage.getItem("texto");
const qtdCliques = localStorage.getItem("qtdCliques");
const horario = localStorage.getItem("horarioAcesso");

// mostra na tela
document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";
document.getElementById("msg_num").textContent = "Cujo seu número favorito é " + num + "!";
document.getElementById("msg_txt").textContent = "Você escreveu: " + texto;
document.getElementById("horaAcesso").textContent = "Você entrou no site no horario: " + horario;
document.body.style.backgroundColor = cor;

// criar um elemento para mostrar os cliques
document.getElementById("qtdCliquesHTML");
qtdCliquesHTML.textContent = `Você apertou o botão ${qtdCliques} vezes!`;


function sair() {
    localStorage.removeItem("nome");
    localStorage.removeItem("cor");
    localStorage.removeItem("num");
    localStorage.removeItem("texto");
    localStorage.removeItem("qtdCliques"); // se quiser zerar também

    window.location.href = "login.html";
}
