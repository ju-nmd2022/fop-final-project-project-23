let game_running = false;
let balloon;
let cloud;
let posX=0;
let posY=0;
let scroll;
let balloonY = 300;
let balloonX =0;
let isLeft;
let isRight;
let isUp;
let isDown;




function preload(){
    balloon = loadImage("balloon.png");
    coin = loadImage("coin.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
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
    
    if(screen === 1){
      first();
    }

    if(screen === 2 ){
        game();
    } 

}


function game (){
background (200, 244, 253);
translate(scroll, 0);
image(balloon, balloonX, balloonY, 100, 100);
image(coin, posY+400, posX+400, 20, 20 );
image(coin, posY+500, posX+400, 20, 20 );
image(coin, posY+600, posX+400, 20, 20 );
image(coin, posY+700, posX+400, 20, 20 );
image(coin, posY+800, posX+400, 20, 20 );
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






  


