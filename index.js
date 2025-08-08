//estilo da pagina geral
document.body.style.textAlign = "center"

//Onde salvo os dados
function entrar(){

    var nome = document.getElementById("nome").value;
    var cor = document.getElementById("cor").value;
    var num = document.getElementById("num").value;
    var texto = document.getElementById("texto").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("cor", cor);
    localStorage.setItem("num", num);
    localStorage.setItem("texto", texto);
    
    window.location.href = "home.html";
    
}


//home
const nome = localStorage.getItem("nome");
const cor = localStorage.getItem("cor");
const num = localStorage.getItem("num");
const texto = localStorage.getItem("texto");

document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";
document.getElementById("msg_num").textContent = "Cujo seu número favorito é " + num + "!";
document.getElementById("msg_txt").textContent = "Você escreveu: " + texto;

document.body.style.backgroundColor = cor

function sair(){

    localStorage.removeItem("nome");
    window.location.href = "login.html";
    
}