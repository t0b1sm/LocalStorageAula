//estilo da pagina geral
document.body.style.textAlign = "center";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "arial";

window.onload = function(){
    if(localStorage.getItem("nome")){
        document.getElementById("nome").value = localStorage.getItem("nome");
    }
}
var nome = document.getElementById("nome").value;
//if(nome !== ""){
//localStorage.setItem("nome", nome);
//}
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

//Entrar----------------------------------------------------------------------------------------------------------------------------------------
var confirmacao = prompt("Você permite que o site guarde suas informações? (sim/não)").toLowerCase;
    

function entrar() {
    
    
    if(confirmacao == 'sim'){
    //horario----------------------------------------------------------------------------------------------------------------------------------------
    localStorage.removeItem("horarioAcesso");
    
    if (!localStorage.getItem("horarioAcesso")) {
        const agora = new Date();
        localStorage.setItem("horarioAcesso", agora.toLocaleString());
    }
    
    //puxa o valor do input pra variável----------------------------------------------------------------------------------------------------------------------------------------

    var cor = document.getElementById("cor").value;
    var num = document.getElementById("num").value;
    var link = document.getElementById("linkHome").value;
    var password = document.getElementById("password").value;

    //envia pro local storage----------------------------------------------------------------------------------------------------------------------------------------

    if(link !== ""){
        localStorage.setItem("linkHome", link);
    }
    if(num !== ""){
        localStorage.setItem("num", num);
    }
    if(password !== ""){
        localStorage.setItem("password", password);
    }
    else{
        alert("você deixou um campo em branco!");
        return;
    }
    localStorage.setItem("cor", cor);
    localStorage.setItem("ListaCompras", JSON.stringify(listaCompras));
    
    window.location.href = "home.html";
}
else if(confirmacao === "não"){
    alert("Você não pode entrar sem aceitar!");
    return;
}
}