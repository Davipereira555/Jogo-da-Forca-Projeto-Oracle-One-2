var usadas = []
var errada = []
let concatPalavra = "";
let aux;
let erros = 0;
 let proibidas = ['CAPSLOCK', 'DEAD', 'TAB',' ', "'",'SHIFT','~',';','CONTROL', 'ALTGRAPH','.',',','/',
 'ARROWLEFT', 'ENTER', 'ARROWUP', 'ARROWDOWN', 'ARROWRIGHT', '[', ']', 'Ç','\\', 'META', 'ALT', '-', '=',
 'CONTEXTMENU', 'BACKSPACE','0','1', '2', '3', '4', '5', '6', '7', '8','9', 'ESCAPE']

function verificarPalavra(input){
    if(usadas.indexOf(input)== -1 && proibidas.indexOf(input) == -1){
        for(var j = 0 ; j <arrayPalavra.length; j++){

           /* if(arrayPalavra[j] == '-' && usadas.indexOf("-") == -1){
                let span = document.querySelectorAll(".span")
                let textoSpan = span[j].textContent = arrayPalavra[j]
                aux = textoSpan;
                concatPalavra += aux;                                            
            }
            */
            if(input == arrayPalavra[j]){
                let span = document.querySelectorAll(".span")
                let textoSpan = span[j].textContent = arrayPalavra[j]
                aux = textoSpan;
                concatPalavra += aux;                                  
            }
            
        } 
        console.log(concatPalavra)
        if(concatPalavra.length == arrayPalavra.length && erros <= 7){
            msgAcerto();
            
        }
        if(pegarPalavra.indexOf(input) == -1 && errada.indexOf(input)== -1){
            erros++;        
            errada.push(input)    
            console.log(errada)
            if(erros == 1) forca();
            if(erros == 2){
                cordaPescoco();
                cabeca();               
            }  
            if(erros == 3) corpo();
            if(erros == 4) bracoD();
            if(erros == 5) bracoE();
            if(erros == 6) pernaD();
            if(erros == 7) pernaE();
          
            createElementoLixo(input);
        }
        else{
            console.log("Erro: palavra ja utilizada!!");
        }
        if(erros > 7){
            msgErro();
        }
    }
    
    usadas.push(input);
}

//******************** Criação das caixas da palavra certas/ lixo *************************/
function criarCaixas(){
    for(var i = 0; i < arrayPalavra.length; i++){
        let caixa = document.querySelector(".caixa-texto");
        let criarElem = document.createElement("div")
        let addClass = criarElem.classList.add("span");
        caixa.appendChild(criarElem);
    }
}
function createElementoLixo(input){
    let caixa = document.querySelector(".palavras-lixo");
    let criarElem = document.createElement("div")
    let addClass = criarElem.classList.add("span-lixo");
    caixa.appendChild(criarElem).textContent = input;    
}
//********************* criação dos avisos de venceu/ perdeu ******************************************/
var modalAviso = document.querySelector(".modal-aviso");
var canvas = document.querySelector(".canvas");
var modalJogo = document.querySelector(".modal-jogo");
var resposta = document.querySelector(".resposta");
var imgModal =document.querySelector(".img-modal");
var img = document.createElement("img");            
var tituloModal = document.querySelector(".titulo-modal");

function msgAcerto(){
    modalAviso.style.display = "block";
    canvas.style.display = "none";
    modalJogo.style.height = "270px";
    resposta.textContent = "RESPOSTA: "+ pegarPalavra;                
    img.setAttribute("src", "././imagens/trofeu.svg");
    imgModal.appendChild(img);
    keys.removeEventListener("keydown",ver)
}

function msgErro(){
    tituloModal.textContent = "GAME-OVER!!";
    tituloModal.style.color = "red";
    modalAviso.style.display = "block";
    canvas.style.display = "none";
    modalJogo.style.height = "270px";
    resposta.textContent = "RESPOSTA: "+ pegarPalavra;                
    img.setAttribute("src", "././imagens/holyday-halloween-cemetery-grave-stone-yard-rip_108180.svg");
    imgModal.appendChild(img);
    keys.removeEventListener("keydown",ver)

}

function verifacarHifen(){
    for(var j = 0 ; j <arrayPalavra.length; j++){

        if(arrayPalavra[j] == '-' && usadas.indexOf("-") == -1){
            let span = document.querySelectorAll(".span")
            let textoSpan = span[j].textContent = arrayPalavra[j]
            aux = textoSpan;
            concatPalavra += aux;                                            
        }
    }
    usadas.push("-");
}

function verifacarEspaco(){
    for(var j = 0 ; j <arrayPalavra.length; j++){
        if(arrayPalavra[j] == ' ' && usadas.indexOf(" ") == -1){
            let span = document.querySelectorAll(".span")
            let textoSpan = span[j].textContent = arrayPalavra[j]
            span[j].style.backgroundColor = "black"
            aux = textoSpan;
            concatPalavra += aux;                                            
        }   
    }
    usadas.push(" ");
}