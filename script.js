
let balloon;
let cloud;
let posX=0;
let posY=0;
let scroll;
let balloonY = 300;
let balloonX =0;
let isLeft;
let isRight;


function preload(){
    balloon = loadImage("balloon.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
}

function setup(){
    createCanvas(800, 800);
    scroll=0;

    isRight= false;
    isLeft= false;
}




function draw(){
background(230);
translate(scroll, 0);
image(balloon, balloonX, balloonY, 100, 100);
image(cloud, posY, posX, 250, 150);
image(cloud, posY+ posX + 200, 50, 300, 150);
image(cloud, posY+400, posX + 0, 350, 170);
image(cloud, posY+600, posX + 70, 350, 170);
image(cloud, posY+100, posX + 100, 250, 190);


if(isLeft){
    if(balloonX > width * 0.5){
        balloonX-=10;
    }
    else{
        scroll +=10;
    }

}

if(isRight){
    if(balloonX < width * 0.8){
        balloonX+=10;
    }
    else{
        scroll -=10;
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
}


function keyReleased(){
    if(keyCode == LEFT_ARROW){
        isLeft=false;
    }
    if(keyCode == RIGHT_ARROW){
        isRight=false;
    }
}





 


  function first(){
    background(249, 232, 163);
    if(! game_running){
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(139, 0, 0);
        text('The adventure of the tomato', 400, 150);
        text('Click to start', 400, 600);
        
        fill(0, 0, 0);
        textSize(20);
        text('Welcome to the land of the tomatoes! ', 400, 300);
    
        fill(0, 0, 0);
        textSize(17);
        text('Your main task is to land the tomato on the plate, BUT be careful, you have to do it as slow as possible!', 400, 350);
    
        fill(0, 0, 0);
        textSize(30);
        text('Good Luck!', 400, 480);

        if(mouseIsPressed){
            game_running=true;
        }
        
    }else{
        draw();
    }
}


function scenary(){ 
    
    if(screen == 1){
      first();
    }

    if(screen == 2 ){
        draw();
    }

    
    if(screen == 3 ){
        losingScreen();
    }

    
    if(screen== 4 ){
        winScreen();
    }
  

}
