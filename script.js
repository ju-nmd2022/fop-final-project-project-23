let level1 = [
    [1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1]
]

let level2 = [
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 1]
]
let level3 = [
//    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
//    [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
   [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
   [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
   [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
   [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
   [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
   [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
   [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
   [0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
   [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
   [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
   [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
   [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
   [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
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
        `<img src="guy2.gif" id ="guy" width="50px" height="50px" alt="guy" >
    <img src="door.png" alt="door" width="50px" height="50px" id="door">`
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




    
    if (e.key == "ArrowRight" && guyleft < (mazearray.length - 1) * 50 && mazearray[guyposition[0]][guyposition[1] + 1] == 1) {
        guyleft += 50;
        guy.style.left = guyleft + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0]][guyposition[1] + 1] = 2;
    }


    if (e.key == "ArrowLeft" && guyleft > 0 && mazearray[guyposition[0]][guyposition[1] - 1] == 1) {
        guyleft -= 50;
        guy.style.left = guyleft + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0]][guyposition[1] - 1] = 2;
    }

    if (e.key == "ArrowUp" && guytop > 0 && mazearray[guyposition[0] - 1][guyposition[1]] == 1) {
        guytop -= 50;
        guy.style.top = guytop + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0] - 1][guyposition[1]] = 2;
    }


    if (e.key == "ArrowDown" && guytop < (mazearray.length - 1) * 50 && mazearray[guyposition[0] + 1][guyposition[1]] == 1) {
        guytop += 50;
        guy.style.top = guytop + "px";
        mazearray[guyposition[0]][guyposition[1]] = 1;
        mazearray[guyposition[0] + 1][guyposition[1]] = 2;
    }


    if (guyleft == doorleft && guytop == doortop) {
        alert("You Won");
    }
})
