var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function cabeca(){    
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(200,80,20,0, 2*Math.PI);
    pincel.fill();
}

function corpo(){
    pincel.fillStyle = "black";
    pincel.fillRect(199, 108, 5, 45)
    
}
function bracoE(){    
    pincel.fillStyle = "black";
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.moveTo(200,120);
    pincel.lineTo(150,90);    
    pincel.stroke();
    
    
}
function bracoD(){    
    pincel.fillStyle = "black";
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.moveTo(200,120);
    pincel.lineTo(250,90);    
    pincel.stroke();
    
}
function pernaE(){    
    pincel.fillStyle = "black";
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.moveTo(200,145);
    pincel.lineTo(240,200);    
    pincel.stroke();
    
}
function pernaD(){
    pincel.fillStyle = "black";
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.moveTo(200,148);
    pincel.lineTo(160,205);    
    pincel.stroke();
}
function forca(){
    pincel.fillStyle = "brown";
    pincel.fillRect(10,10, 200, 10)
    pincel.fillRect(10,10,10,230)
    pincel.fillRect(10,230,100,10)
    
}
function cordaPescoco(){
    pincel.fillStyle = "green";
    pincel.fillRect(199,10, 6, 65)
    pincel.fillRect(195,100, 15, 8)
}