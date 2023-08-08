let game_running = false;
let balloon;
let coin;
let cloud;
let posX=0;
let posY=0;
let scroll;
let balloonY = 300;
let balloonX =0;
let balloonWidth= 70;
let balloonHeight= 70;
let coinWidth= 20;
let coinHeight=20;
let isLeft;
let isRight;
let isUp;
let isDown;
let x=0; 
let y= 50; 
let goLeft= false;
let  collectedCoins=0;
let coinX= 300;
let coinY= 300;

let coin1X= 200;
let coin1Y= 40;

let coin2X= 600;
let coin2Y= 110;

let coin3X= 610;
let coin3Y= 250;

let coin4X= 650;
let coin4Y= 220;

let coin5X= 550;
let coin5Y= 550;
let coinVisible=true;
let coin1Visible=true;
let coin2Visible=true;
let coin3Visible=true;
let coin4Visible=true;
let coin5Visible=true;





 



function preload(){
    balloon = loadImage("balloon.png");
    coin = loadImage("coin.png");
    cloud = loadImage("cloud.png");
    grass = loadImage("grass.png");
}

function setup(){
    createCanvas(700, 700);
    scroll=0;

    isRight= false;
    isLeft= false;

   
   
}


var screen = 1;

function draw(){ 
    game();
    
    if(screen === 1){
      first();
    }

    if(screen === 2 ){
        game();
    } 

}


function game (){
background (200, 244, 253);
push();
//Draw the moving circles
fill(255, 255, 200);
ellipse(x, y, 30, 30);
ellipse(x, y+100, 30, 30);
ellipse(x, y+200, 30, 30);
ellipse(x, y+300, 30, 30);

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
pop();


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

if(coinVisible){
    image(coin, coinX, coinY, coinWidth, coinHeight);
}

if( coinVisible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coinX, coinY, coinWidth, coinHeight)){
    coinVisible = false;
    collectedCoins++;  
}

if(coin5Visible){
    image(coin, coin5X, coin5Y, coinWidth, coinHeight);
}

if( coin5Visible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coin5X, coin5Y, coinWidth, coinHeight)){
    coin5Visible = false;
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


}

function keyPressed(){
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
    

        if(mouseIsPressed){
            game_running=true;
            screen=2;
        }
        
    }
}



        