//estilo da pagina geral
document.body.style.textAlign = "center";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "arial";

//hora de acesso ---------------------------------------------------------------------------------------------------------------------------

const horario = localStorage.getItem("horarioAcesso");
document.getElementById("horaAcesso").textContent = "Você entrou no site no horario: " + horario;

//Contador de clicks -----------------------------------------------------------------------------------------------------------------------------

let i = localStorage.getItem("qtdCliques") 
        ? parseInt(localStorage.getItem("qtdCliques")) 
        : 0;

function contar() {
    i++;
    localStorage.setItem("qtdCliques", i); // salva no localStorage
    console.log(i);
}

//lista-----------------------------------------------------------------------------------------------------------------------------------------
var listaCompras = [];

function lista(){
    let qntdV = parseInt(prompt("Quantas compras você quer adicionar?"));
    for(let i = 0; i < qntdV; i++){
        let item = prompt("Digite o item " + (i + 1) + ":");
        listaCompras.push(item);
    }
    console.log(listaCompras);
}

//Entrar----------------------------------------------------------------------------------------------------------------------------------------

function entrar() {
    
    //horario----------------------------------------------------------------------------------------------------------------------------------------
    localStorage.removeItem("horarioAcesso");
    
    if (!localStorage.getItem("horarioAcesso")) {
        const agora = new Date();
        localStorage.setItem("horarioAcesso", agora.toLocaleString());
    }
    
    //puxa o valor do input pra variável----------------------------------------------------------------------------------------------------------------------------------------
    var nome = document.getElementById("nome").value;
    var cor = document.getElementById("cor").value;
    var num = document.getElementById("num").value;
    var texto = document.getElementById("texto").value;
    var link = document.getElementById("linkHome").value;
    var password = document.getElementById("password").value;

    //envia pro local storage----------------------------------------------------------------------------------------------------------------------------------------

    localStorage.setItem("linkHome", link);
    localStorage.setItem("nome", nome);
    localStorage.setItem("cor", cor);
    localStorage.setItem("num", num);
    localStorage.setItem("texto", texto);
    localStorage.setItem("password", password);
    localStorage.setItem("ListaCompras", JSON.stringify(listaCompras));
    
    window.location.href = "home.html";
}
