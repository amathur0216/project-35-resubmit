//Create variables here
var dog, happyDog, dogImage, happyDogImage;
var database;
var foodS, foodStock;

function preload(){
  dogImage = loadImage("../images/dogImg.png");
  happyDogImage = loadImage("../images/dogImg1.png");
	//load images here
}

function setup(){
  createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20);
  dog.addImage("dog", dogImage);
  dog.scale = 0.5;
  database = firebase.database();
  //console.log(firebase);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);  
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dog", happyDogImage);
}

  drawSprites();
  textSize(20);
  fill("black");
  text("food: " + foodS, 20, 20);
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x - 1;
  }
  
database.ref('/').update({
  food: x
  })
}



