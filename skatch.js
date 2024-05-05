let larguraCanva = 600;
let alturaCanva = 600;

let tomVermelho = 0;  // R
let tomAzul =     0;  // G
let tomVerde =    0; // B

let tomAmarelo = 0; // R
let tomLaranja = 0; // G
let tomRosa =    0  // B

function setup() {
  createCanvas(larguraCanva, alturaCanva);
  setInterval(sortearCorDoBackground, 500);
  setInterval(sortearCorDoQuadrado, 100);
}

function draw() {
  background(tomVermelho, tomAzul, tomVerde);
  
  
  stroke(tomAmarelo, tomLaranja, tomRosa);
  fill(tomAmarelo, tomLaranja, tomRosa);
  
  console.log();
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  } 
}

//Função para sortear a cor do background
function sortearCorDoBackground(){
  tomVermelho = parseInt(Math.random() * 255);
  tomAzul = parseInt(Math.random() * 255);
  tomVerde = parseInt(Math.random() * 255);
}
//Função para sortear a cor do quadrado quando o mouse estiver pressionado
function sortearCorDoQuadrado(){
  tomAmarelo = parseInt(Math.random() * 255);
  tomLaranja = parseInt(Math.random() * 255);
  tomRosa = parseInt(Math.random() * 255);
}