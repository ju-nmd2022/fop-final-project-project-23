let balloon;


function preload(){
    balloon = loadImage("balloon.png");
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
background(230);
image(balloon, 0, 250, 100, 100);
}




