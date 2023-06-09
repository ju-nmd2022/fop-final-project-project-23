function startGame(){
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
   

}

function gameOver(){
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
}



let level1 = [
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
]

let level2 = [
    [1, 1, 2, 0, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
]
let level3 = [
   [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
   [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
   [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
   [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
   [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
   [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
   [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
   [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
   [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
   [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
   [0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
   [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
   [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
   [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
   [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
   [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
   [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
   [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
   [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
]


let mazearray = level1;
let Level = document.getElementById("levelselect");
Level.addEventListener("change", function () {
    let level = Level.value;
    
    if (level == 1) {
        mazearray = level1;
    }
    if (level == 2) {
        mazearray = level2;
    }
    if (level == 3) {
        mazearray = level3;
    }
    maze.innerHTML =
        `<img src="guy2.gif" id ="guy" width="30px" height="30px" alt="guy" >
    <img src="door.png" alt="door" width="30px" height="30px" id="door">`
    createMaze();
})

let maze = document.getElementById("maze-container");
let guy = document.getElementById("guy");
let door = document.getElementById("door");

function setguyposition(x, y) {
    guy.style.top = x + "px";
    guy.style.left = y + "px";
}
function setdoorposition(x, y) {
    door.style.bottom = x + "px";
    door.style.right = y + "px";
}


function createMaze() {
    for (let i = 0; i < mazearray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < mazearray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (mazearray[i][j] == 0) {
                cell.classList.add("wall");
            }
            row.appendChild(cell);



            
            if (i == 0 && j == 0) {
                mazearray[i][j] = 2;
            }
        }
        maze.appendChild(row);
    }

    setguyposition(0, 0)
    setdoorposition(0, 0)
    
}


function getguyposition() {
    
    let position = [-1, -1];
    for (let i = 0; i < mazearray.length; i++) {
        for (let j = 0; j < mazearray[i].length; j++) {
            if (mazearray[i][j] == 2) {
                position[0] = i;
                position[1] = j;
            }
        }
    }
    console.log(position);
    return position;
}


document.addEventListener("keydown", function (e) {
    let guy = document.getElementById("guy");
    let door = document.getElementById("door");
    let guyleft = guy.offsetLeft;
    let guytop = guy.offsetTop;
    let doorleft = door.offsetLeft;
    let doortop = door.offsetTop;
    let guyposition = getguyposition();




    
    if (e.key == "ArrowRight" && guyleft < (mazearray.length - 1) * 30 && mazearray[guyposition[0]][guyposition[1] + 1] == 1) {
        guyleft += 30;
        guy.style.left = guyleft + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0]][guyposition[1] + 1] = 2;
    }


    if (e.key == "ArrowLeft" && guyleft > 0 && mazearray[guyposition[0]][guyposition[1] - 1] == 1) {
        guyleft -= 30;
        guy.style.left = guyleft + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0]][guyposition[1] - 1] = 2;
    }

    if (e.key == "ArrowUp" && guytop > 0 && mazearray[guyposition[0] - 1][guyposition[1]] == 1) {
        guytop -= 30;
        guy.style.top = guytop + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0] - 1][guyposition[1]] = 2;
    }


    if (e.key == "ArrowDown" && guytop < (mazearray.length - 1) * 30 && mazearray[guyposition[0] + 1][guyposition[1]] == 1) {
        guytop += 30;
        guy.style.top = guytop + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0] + 1][guyposition[1]] = 2;
    }


    if (guyleft == doorleft && guytop == doortop) {
        alert("You Won");
    }
})




const startingMinutes = 0.30;
let time = startingMinutes * 100;

var timeleft = 0.30;


const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;




    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

 

function stopCountdown(){
     if(timeleft<00){
        const startingMinutes = 0.30;
        let time = startingMinutes * 100;
        
        var timeleft = 0.30;
    }else{
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
    }
}




