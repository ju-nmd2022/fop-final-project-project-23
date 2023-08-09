let game_running = false;
let gameOver= false;
let balloon;
let coin;
let cloud;
let posX=0;
let posY=0;
let scroll;
let balloonY = 300;
let balloonX =50;
let balloonWidth= 30;
let balloonHeight= 30;
let coinWidth= 20;
let coinHeight=20;
let isLeft;
let isRight;
let isUp;
let isDown;
let x=100; 
let y= 150; 
let goLeft= false;
let  collectedCoins=0;
let coinX= 300;
let coinY= 300;

let coin1X= 200;
let coin1Y= 40;

let coin2X= 600;
let coin2Y= 110;

let coin3X= 410;
let coin3Y= 250;

let coin4X= 650;
let coin4Y= 220;

let coin5X= 550;
let coin5Y= 550;

let coin6X= 80;
let coin6Y= 80;

let coin7X= 100;
let coin7Y= 350;

let coin8X= 300;
let coin8Y= 550;

let coin9X= 550;
let coin9Y= 400;

let coin10X= 150;
let coin10Y= 200;

let coin11X= 320;
let coin11Y= 420;

let coin12X= 100;
let coin12Y= 500;

let coin13X= 650;
let coin13Y= 400;




let coinVisible=true;
let coin1Visible=true;
let coin2Visible=true;
let coin3Visible=true;
let coin4Visible=true;
let coin5Visible=true;
let coin6Visible=true;
let coin7Visible=true;
let coin8Visible=true;
let coin9Visible=true;
let coin10Visible= true ;
let coin11Visible=true;
let coin12Visible=true;
let coin13Visible=true;


let totalCoins= 14;
let gameIsOver= false;


 



function preload(){
    balloon = loadImage("balloon.png");
    coin = loadImage("coin.png");
    cloud = loadImage("cloud.png");
    grass = loadImage("grass.png");
}

function setup(){
    createCanvas(700, 700);
   

    isRight= false;
    isLeft= false;

   
   
}


var screen = 1;

function draw(){ 

    if (screen === 1){
        first();
    } else if(screen===2){
        game();
    }else if(screen===3){
        gameOver = true;
        gameOverScreen();
        } else if (screen === 4){
            winScreen();
        }
    }

let circlePositions = [



    { x: x, y: y },
    { x: x, y: y + 100 },
    { x: x, y: y + 250 },
    { x: x, y: y + 400 }
  ];


function game (){

background (200, 244, 253);
push();


if(goLeft == false){
    x=x+3;
}
if(goLeft == true){
    x=x-3;
}
if(x>700){
    goLeft =true ;
}
if(x<0){
    goLeft =false ;
}


//Draw the moving circles
fill(255, 255, 200);
ellipse(x, y, 35, 35);
ellipse(x, y+100, 35, 35);
ellipse(x, y+250, 35, 35);
ellipse(x, y+400, 35, 35);
pop();

noStroke();
for(let i=0; i<circlePositions.length; i++){
    const circle = circlePositions[i];
    if (goLeft ==false){
        circle.x = circle.x +3;
    }
    if (goLeft == true){
        circle.x = circle.x -3;
    }
}

if(checkCollisionWithMovingCircles(balloonX, balloonY, balloonWidth, balloonHeight, circle.x, circle.y, 30, 30)){
    console.log('Collision with moving circles.');
    gameOver= true;
    screen=3;
}


translate(scroll, 0);
image(balloon, balloonX, balloonY, balloonWidth, balloonHeight);

if(coinVisible){
    image(coin, coinX, coinY, coinWidth, coinHeight);
}

if( coinVisible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coinX, coinY, coinWidth, coinHeight)){
    coinVisible = false;
    collectedCoins++;  
}

if(coin1Visible){
    image(coin, coin1X, coin1Y, coinWidth, coinHeight);
}

if( coin1Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin1X, coin1Y, coinWidth, coinHeight)){
    coin1Visible = false;
    collectedCoins++;  
}


if(coin2Visible){
    image(coin, coin2X, coin2Y, coinWidth, coinHeight);
}

if( coin2Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin2X, coin2Y, coinWidth, coinHeight)){
    coin2Visible = false;
    collectedCoins++;  
}


if(coin3Visible){
    image(coin, coin3X, coin3Y, coinWidth, coinHeight);
}

if( coin3Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin3X, coin3Y, coinWidth, coinHeight)){
    coin3Visible = false;
    collectedCoins++;  
}

if(coin4Visible){
    image(coin, coin4X, coin4Y, coinWidth, coinHeight);
}

if( coin4Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin4X, coin4Y, coinWidth, coinHeight)){
    coin4Visible = false;
    collectedCoins++;  
}


if(coin5Visible){
    image(coin, coin5X, coin5Y, coinWidth, coinHeight);
}

if( coin5Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin5X, coin5Y, coinWidth, coinHeight)){
    coin5Visible = false;
    collectedCoins++;  
}

if(coin6Visible){
    image(coin, coin6X, coin6Y, coinWidth, coinHeight);
}

if( coin6Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin6X, coin6Y, coinWidth, coinHeight)){
    coin6Visible = false;
    collectedCoins++;  
}


if(coin7Visible){
    image(coin, coin7X, coin7Y, coinWidth, coinHeight);
}

if( coin7Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin7X, coin7Y, coinWidth, coinHeight)){
    coin7Visible = false;
    collectedCoins++;  
}


if(coin8Visible){
    image(coin, coin8X, coin8Y, coinWidth, coinHeight);
}

if( coin8Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin8X, coin8Y, coinWidth, coinHeight)){
    coin8Visible = false;
    collectedCoins++;  
}


if(coin9Visible){
    image(coin, coin9X, coin9Y, coinWidth, coinHeight);
}

if( coin9Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin9X, coin9Y, coinWidth, coinHeight)){
    coin9Visible = false;
    collectedCoins++;  
}

if(coin10Visible){
    image(coin, coin10X, coin10Y, coinWidth, coinHeight);
}

if( coin10Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin10X, coin10Y, coinWidth, coinHeight)){
    coin10Visible = false;
    collectedCoins++;  
}

if(coin11Visible){
    image(coin, coin11X, coin11Y, coinWidth, coinHeight);
}

if( coin11Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin11X, coin11Y, coinWidth, coinHeight)){
    coin11Visible = false;
    collectedCoins++;  
}

if(coin12Visible){
    image(coin, coin12X, coin12Y, coinWidth, coinHeight);
}

if( coin12Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin12X, coin12Y, coinWidth, coinHeight)){
    coin12Visible = false;
    collectedCoins++;  
}

if(coin13Visible){
    image(coin, coin13X, coin13Y, coinWidth, coinHeight);
}

if( coin13Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin13X, coin13Y, coinWidth, coinHeight)){
    coin13Visible = false;
    collectedCoins++;  
}



image(cloud, posY, posX, 250, 150);
image(cloud, posY+ posX + 200, 50, 300, 150);
image(cloud, posY+400, posX + 0, 350, 170);
image(cloud, posY+600, posX + 70, 350, 170);
image(cloud, posY+100, posX + 100, 250, 190);
image(grass, posY, posY+600, 850, 100);





if(isLeft){
    if(balloonX < width ){
        balloonX-=5;
    }
    else{
        scroll +=5;
    }

}

if(isRight){
    if(balloonX < width ){
        balloonX+=5;
    }
    else{
        scroll -=5;
    }

}

if(isUp){
    if(balloonY < width ){
        balloonY-=5;
    }
    else{
        scroll +=5;
    }

}

if(isDown){
    if(balloonY < width ){
        balloonY+=5;
    }
    else{
        scroll -=5;
    }

}
if(collectedCoins === totalCoins){
    screen = 4;
}

}

function keyPressed(){

    if (keyCode === ENTER){
        if(gameIsOver){
            gameIsOver =false;
            collectedCoins=0;
        }
        
        screen=1;
        game_running= false;
    }



    if(keyCode == LEFT_ARROW){
        isLeft=true;
    }
    if(keyCode == RIGHT_ARROW){
        isRight=true;
    }

    if(keyCode == UP_ARROW){
        isUp=true;
    }

    if(keyCode == DOWN_ARROW){
        isDown = true;
    }
}


function keyReleased(){
    if(keyCode == LEFT_ARROW){
        isLeft=false;
    }
    if(keyCode == RIGHT_ARROW){
        isRight=false;
    }

    if(keyCode == UP_ARROW){
        isUp=false;
    }

    if(keyCode == DOWN_ARROW){
        isDown = false;
    }
}

function checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coinX, coinY, coinWidth,coinHeight){
    if(
        balloonX< coinX + coinWidth &&
        balloonX+balloonWidth>coinX&&
        balloonY < coinY + coinHeight &&
        balloonY + balloonHeight>coinY
    ){  
        return true;
    


    } else {
        return false;
        
    }
   
}


function checkCollisionWithMovingCircles(x, y, width, height){
   
      for (let i = 0; i < circlePositions.length; i++) {
        const circle = circlePositions[i];
        if (checkCollision(x, y, width, height, circle.x, circle.y, 30, 30)) {
          console.log(`Collision with circle ${i+1}`);
          return true;
        }
      }
      return false;
}

    
function winScreen(){
    console.log("YOU WON");
    background(50, 150, 50);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255);

  text('Congratulations!', width / 2, height / 2 - 50);
  textSize(30);
  text('You collected all the coins!', width / 2, height / 2 + 50);

 
}

function gameOverScreen() {
    gameIsOver=true;
    console.log('Game Over..');
    background(110, 56, 118); 
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(255);
    text('Game Over', width / 2, height / 2);

    textSize(30);
    fill(255, 150);
    text('You collected ' + collectedCoins + ' coins', 400, 200 );
  
    textSize(24);
    fill(255, 100);
    text('Press ENTER to play again', width / 2, (2 * height) / 3);
   
  } 


function first(){
    background(110, 56, 118);
    if(! game_running){
        textAlign(CENTER, CENTER);
        textSize(60);
        fill(236, 198, 45);
        text('The balloon', 380, 300);
        text('Click to start', 400, 600);
        
        fill(230, 27, 27);
        textSize(24);
        text('Welcome to the land of the coins! ', 400, 400);
        text('You have to collect all the coins if you want to get rich very quicly ', 360, 430);
        text('Be careful of the movin circles, they will kill you!!! ', 360, 530);
    

        if(mouseIsPressed){
            game_running=true;
            screen=2;
        }
        
    }
}



        