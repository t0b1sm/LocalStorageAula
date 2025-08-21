document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

//puxa do local storage---------------------------------------------------------------------------------------------------------------------------

const nome = localStorage.getItem("nome");
const cor = localStorage.getItem("cor");
const num = localStorage.getItem("num");
const texto = localStorage.getItem("texto");
const qtdCliques = localStorage.getItem("qtdCliques");
const link = localStorage.getItem("linkHome");
const password = localStorage.getItem("password");
const ListaCompras = JSON.parse(localStorage.getItem("ListaCompras"));

//mostra na tela------------------------------------------------------------------------------------------------------------------------------

document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";
document.getElementById("msg_num").textContent = "Cujo seu número favorito é " + num + "!";
document.getElementById("msg_txt").textContent = "Você escreveu: " + texto;
document.getElementById("password").textContent = "Sua senha é: " + password + " Meio fraquinha, tu n acha?";
document.getElementById("msg_listC").textContent = ListaCompras;
document.title = "Site do: " + nome;
document.body.style.backgroundColor = cor;

//Mostrar Senha -------------------------------------------------------------------------------------------------------------------------------

function Show(){
    const input = document.getElementById("password")
    if(input.type === "password"){
        input.type = "text"
    }
    else{
        input.type = "password"
    }
}

//link------------------------------------------------------------------------------------------------------------------------------------------

function btnLink(){ 
    window.open(link, "_blank");
}

//Contador Clicks ---------------------------------------------------------------------------------------------------------------------------------

document.getElementById("qtdCliquesHTML");
qtdCliquesHTML.textContent = `Você apertou o botão ${qtdCliques} vezes!`;

//sair-------------------------------------------------------------------------------------------------------------------------------------------

function sair() {
    localStorage.removeItem("nome");
    localStorage.removeItem("cor");
    localStorage.removeItem("num");
    localStorage.removeItem("texto");
    localStorage.removeItem("qtdCliques"); 
    localStorage.removeItem("linkHome");
    localStorage.removeItem("password");
    localStorage.removeItem("lista");


    window.location.href = "login.html";
}
