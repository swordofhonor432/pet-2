
var dog
var dog1
var dog2
var happydog;
var database;
var foodS;
var foodStock;
var food;
var food1;
var food2;

function preload()
{
  dog1.loadImage("dogImage.png/images");
  dog2.loadImage("dogImage1.png/images");
 
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addImage(dog1);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
  food = food2;
}

  drawSprites();
 if(food===food1){
   text("1 bottlle left",400,400);
 }
 if(food===food2){
  text("0 bottlle left",400,400);
}
}

function readStock(){
  foodS=data.val();

}


function writeStock(x){
  databasse.ref('/').update({
    Food:x
  })
}

co