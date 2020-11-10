var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var cars1, cars2, cars3, cars4, track, ground;
function preload(){
cars1 = loadImage("images/car4.png");
cars2 = loadImage("images/car1.png");
cars3 = loadImage("images/car3.png");
cars4 = loadImage("images/car2.png");
track = loadImage("images/track.jpg");
ground = loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.update(2);
    game.end();
  }
}
