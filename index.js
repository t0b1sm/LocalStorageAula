// estilo da pagina geral
document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

if (!localStorage.getItem("horarioAcesso")) {
    const agora = new Date();
    localStorage.setItem("horarioAcesso", agora.toLocaleString());
}

// pega contador salvo ou começa do zero
let i = localStorage.getItem("qtdCliques") 
        ? parseInt(localStorage.getItem("qtdCliques")) 
        : 0;

function contar() {
    i++;
    localStorage.setItem("qtdCliques", i); // salva no localStorage
    console.log(i);
}

function entrar() {
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
