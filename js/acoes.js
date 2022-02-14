let botao = document.querySelector("#botao");
let palavra = document.querySelector("#palavra");
let keys = document.body
let novojogo = document.querySelector("#botao-novojogo");
let reset = document.querySelector("#botao-reset");
let campoDica = document.querySelector("#dica");
let pegarPalavra;
let arrayPalavra = [];


//*****************888  para gerar uma plavra randomica ***************/
let linguagensProg =["JAVASCRIPT", "JAVA", "PYTHON", "PHP", "HTML", "CSS", "RUBY", "VISUAL STUDIO","GIT", "NODE","REACT", "KOTLIN"]
let random = Math.floor(Math.random()*linguagensProg.length);
let botaoRandom = document.querySelector("#botao-random");

//******************* ações botoes *************************************************/
botaoRandom.addEventListener("click", function(){
    pegarPalavra = linguagensProg[random];
    console.log(pegarPalavra)
    arrayPalavra = pegarPalavra.split("");    
    criarCaixas();
    dica = "MUNDO DA PROGRAMACAO";
    display(dica);
    verifacarHifen();   
    verifacarEspaco();  
})

botao.addEventListener("click", function (){    
    pegarPalavra = palavra.value.toUpperCase().trim();//.replace(/\s+/g , '')
    dica = campoDica.value.toUpperCase();
    if(pegarPalavra != 0 && dica !=0){
        arrayPalavra = pegarPalavra.split("");
        criarCaixas();   
        limpar();
        display(dica);
        verifacarHifen();   
        verifacarEspaco();     
        
    }else{
        alert("Preencha o campo")
    }
    
});
//*****************ver = ver a tecla digitada ***************/
function ver(event){     
    let input = event.key.toLocaleUpperCase()    
    verificarPalavra(input);    
    console.log("Erros: "+ erros)    
}

novojogo.addEventListener("click", ()=>{
    novoJogo();
})

reset.addEventListener("click", ()=>{
    novoJogo();
})

function limpar(){    
    palavra.value =""; 
    campoDica.value ="";
}

function novoJogo(){
    document.location.reload(true)   
}
function display(dica){
    keys.addEventListener("keydown",ver);
    document.querySelector(".acoes").style.display = "none";
    document.querySelector("#acoes").style.display = "none";
    document.querySelector(".canvas").style.display = "block"
    document.querySelector("#botao-reset").style.display = "block"
    document.querySelector(".dica").style.display = "block"
    document.querySelector(".dica").textContent = "DICA:"+dica;
}