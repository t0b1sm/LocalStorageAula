//login
function entrar(){

    var nome = document.getElementById("nome").value;

    localStorage.setItem("nome", nome);

    window.location.href = "home.html";

}

//home

const nome = localStorage.getItem("nome");
document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";

function sair(){

    localStorage.removeItem("nome");
    window.location.href = "login.html";
    
}