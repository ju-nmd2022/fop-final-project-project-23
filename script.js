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

function draw(){
background(230);
image(balloon, posX, 250, 100, 100);
image(cloud, posY+100, 0, 250, 150);
image(cloud, posY+400, 50, 300, 150);
image(cloud, posY+700, 0, 350, 170);


posX+=1;
posY-=1;

}




