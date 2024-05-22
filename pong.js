//Variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22
let raio = diametro / 2

//Variáveis Velocidades da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis Minha Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variáveis Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeXOponente;

//ColisãoRaquete
let colidiu = false;

//Pontuação
let meusPontos = 0;
let oponentePontos = 0;

//sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("Trilha.mp3");
  ponto = loadSound("Ponto.mp3");
  raquetada = loadSound("Raquetada.mp3");
  }


function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  
  incluiPlacar();
  marcaPonto();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  
  
  
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
  }
  
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    }
  }
  
function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura)
  }
   
function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
    }  
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
    }
  }

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}  
  
  
function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *=-1
    raquetada.play();
    }
  }

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(oponentePontos, 321, 26);
  }
  
function marcaPonto() {
    if (xBolinha > 580) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        oponentePontos += 1;
        ponto.play();
    }
  }
  
  
}
