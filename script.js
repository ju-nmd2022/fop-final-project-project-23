let game_running=false;
let balloon;
let cloud;
let posX=0;
let posY=0;


function preload(){
    balloon = loadImage("balloon.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
    cloud = loadImage("cloud.png");
}

function setup(){
    createCanvas(800, 800);
}

let balloonY = 500; 
let velocity = 0;
let acceleration = 0.1;
let isGameActive = true;


function draw(){
background(230);
image(balloon, posX, 250, 100, 100);
image(cloud, posY+100, 0, 250, 150);
image(cloud, posY+400, 50, 300, 150);
image(cloud, posY+700, 0, 350, 170);



if(isGameActive){
    balloonY=balloonY + velocity;
    velocity=velocity + acceleration;


    if (mouseIsPressed){
        velocity=velocity-0.1;
    }


    if (balloonY > 720 && velocity>2.5) {
        isGameActive = false;
        //screen = 3;
      }


    if (balloonY > 720 && velocity<2.5){
        isGameActive = false;
        //screen = 4;
    }
  
    if (balloon>=320  && velocity <2) {
     // winScreen();
    }
    else if ( balloon<=320  && velocity>2){
        //losingScreen();


        velocity = 0;
    }

}

}


function mousePressed() {
    velocity = velocity -0.3;
  } 


  let screen = 1;


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
