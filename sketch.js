//Create variables here
var canvas;
var dog, happydog;
var database;
var foodS, foodStock;
var doghappy,dogdown;
function preload()
{
  dogdown = loadImage("images/dogImg1.png");
  doghappy = loadImage("images/dogImg.png");
	//load images here
}

function setup() {
canvas = createCanvas(500, 500);

database = firebase.database();
  dog = createSprite(250,250,30,30);
  dog.addImage(dogdown);
  dog.scale = 0.2;


  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(doghappy);
  dog.scale = 0.2;
  }
  drawSprites();

textSize(20);
text("20",450,50);
  fill("orange");
stroke(2);
  //add styles here
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
database.ref('/').update({
Food:x
})
}






