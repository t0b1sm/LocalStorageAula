document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";
var Dados = [];

//puxa do local storage---------------------------------------------------------------------------------------------------------------------------

const nome = localStorage.getItem("nome");
Dados.push(nome);
const cor = localStorage.getItem("cor");
Dados.push(cor);
const num = localStorage.getItem("num");
Dados.push(num);
const qtdCliques = localStorage.getItem("qtdCliques");
Dados.push(qtdCliques);
const link = localStorage.getItem("linkHome");
Dados.push(link);
const password = localStorage.getItem("password");
Dados.push(password);
const ListaCompras = JSON.parse(localStorage.getItem("ListaCompras"));
Dados.push(ListaCompras);
//mostra na tela------------------------------------------------------------------------------------------------------------------------------

document.getElementById("mensagem").textContent = "Bem vindo, " + nome + "!";
document.getElementById("msg_num").textContent = "Cujo seu número favorito é " + num + "!";
document.getElementById("password").textContent = "Sua senha é: " + password + " Meio fraquinha, tu n acha?";
document.getElementById("msg_listC").textContent = ListaCompras;
document.title = "Site do: " + nome;
document.body.style.backgroundColor = cor;


//link------------------------------------------------------------------------------------------------------------------------------------------

function btnLink(){ 
    window.open(link, "_blank");
}

//Contador Clicks ---------------------------------------------------------------------------------------------------------------------------------

document.getElementById("qtdCliquesHTML");
qtdCliquesHTML.textContent = `Você apertou o botão ${qtdCliques} vezes!`;

//apagar dados específicos


function excluir(){
let p = parseInt(prompt("Esses são os dados que recebemos sobre você: \n" + Dados + "\nEscreva a posição do odbjeto que vocêdeseja remover: (Começando do 0)"))
Dados[p] = "";
alert("Esses são os dados que sobraram: " + Dados);
}


//Deleta tudo-------------------------------------------------------------------------------------------------------------------------------------

function delete_td(){
    
    localStorage.removeItem("nome");
    localStorage.removeItem("num");
    localStorage.removeItem("cor");
    localStorage.removeItem("qtdCliques"); 
    localStorage.removeItem("linkHome");
    localStorage.removeItem("password");
    localStorage.removeItem("listaCompras");
    window.location.reload();
}

//sair-------------------------------------------------------------------------------------------------------------------------------------------

function sair() {
    
    localStorage.removeItem("nome");
    localStorage.removeItem("num");
    localStorage.removeItem("cor");
    localStorage.removeItem("qtdCliques"); 
    localStorage.removeItem("linkHome");
    localStorage.removeItem("password");
    localStorage.removeItem("listaCompras");
    

    window.location.href = "login.html";
}
