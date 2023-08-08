let game_running = false;
let balloon;
let coin;
let cloud;
let posX=0;
let posY=0;
let scroll;
let balloonY = 300;
let balloonX =0;
let balloonWidth= 100;
let balloonHeight=100;
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
let coinVisible=true;




 



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
image(coin, coinX, coinY, coinHeight, coinWidth );

if(coinVisible){
    image(coin, coinX, coinY, coinWidth, coinHeight);
}

if( coinVisible && checkCollision(balloonX, balloonY, balloonWidth, balloonHeight, coinX, coinY, coinWidth, coinHeight)){
    coinVisible = false;
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



        