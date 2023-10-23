// global vars
//field
let tileSize = 32;
let rows = 19;
let columns = 26;

let field;
let fieldWidth = tileSize * columns; // 32 * 16
let fieldHeight = tileSize * rows; // 32 * 16
let fieldContext;

let game;
let gameWidth = tileSize * columns; // 32 * 16
let gameHeight = tileSize * rows; // 32 * 16
let gameContext;


// striker
let strikerWidth = tileSize;
let strikerHeight = tileSize;
let strikerX = (fieldWidth / 2) - (strikerWidth / 2);
let strikerY = fieldHeight - tileSize * 5;
let strikerVelocityX = tileSize;
let strikerVelocityY = tileSize;
let striker = {
    x: strikerX,
    y: strikerY,
    width: strikerWidth,
    height: strikerHeight
}

// goalie
let goalieWidth = tileSize;
let goalieHeight = tileSize;
let goalieX = (fieldWidth / 2) - (strikerWidth / 2)
let goalieY = tileSize * 5
let goalieVelocityX = tileSize;
let goalieVelocityY = tileSize;
let goalie = {
    x: goalieX,
    y: goalieY,
    width: goalieWidth,
    height: goalieHeight
}


window.onload = function () {
    console.log("game loading")
    console.log("strikerX: " + striker.x.toString())
    console.log("strikerY: " + striker.y.toString())
    console.log("strikerWidth: " + striker.width.toString())
    console.log("strikerHeight: " + striker.height.toString())
    field = document.getElementById("field");
    field.width = fieldWidth;
    field.height = fieldHeight;
    fieldContext = field.getContext("2d"); //used for drawing on the board
    console.log(field)

    // game = document.getElementById("game");
    // game.width = gameWidth;
    // game.height = gameHeight;
    // gameContext = game.getContext("2d"); //used for drawing on the board
    // console.log(game)

    // draw field
    // var background = new Image();
    // background.src = "./images/field.png";

    // // Make sure the image is loaded first otherwise nothing will draw.
    // background.onload =  () => {
    //     gameContext.drawImage(background, 0, 0);
    // }
    

    // draw players
    fieldContext.fillStyle = "blue"
    fieldContext.fillRect(striker.x, striker.y, striker.width, striker.height)
    fieldContext.fillStyle = "red"
    fieldContext.fillRect(goalie.x, goalie.y, goalie.width, goalie.height)

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveStriker);

}
function update() {
    requestAnimationFrame(update);
    fieldContext.clearRect(0, 0, field.width, field.height);

    //striker
    fieldContext.fillStyle = "blue"
    fieldContext.fillRect(striker.x, striker.y, striker.width, striker.height);

    //goalie
    fieldContext.fillStyle = "red"
    fieldContext.fillRect(goalie.x, goalie.y, goalie.width, goalie.height);

}

function moveStriker(e) {
    console.log('BUTTON CLICKED!')
    console.log(e)

    // if (gameOver) {
    //     return;
    // }

    if (e.code == "ArrowLeft" && striker.x - strikerVelocityX >= 0) {
        striker.x -= strikerVelocityX; //move left one tile
    }
    else if (e.code == "ArrowRight" && striker.x + strikerVelocityX + striker.width <= field.width) {
        striker.x += strikerVelocityX; //move right one tile
    }
    else if (e.code == "ArrowUp" && striker.y - strikerVelocityY >= 0) {
        striker.y -= strikerVelocityY; //move left one tile
    }
    else if (e.code == "ArrowDown" && striker.y + strikerVelocityY + striker.height <= field.height) {
        striker.y += strikerVelocityY; //move right one tile
    }
    else if (e.code == "KeyD" && goalie.x + goalieVelocityX + goalie.width <= field.width) {
        goalie.x += goalieVelocityX; //move right one tile
    }
    else if (e.code == "KeyA" && goalie.x - goalieVelocityX >= 0) {
        goalie.x -= goalieVelocityX; //move right one tile
    }
    else if (e.code == "KeyW" && goalie.y - goalieVelocityY >= 0) {
        goalie.y -= goalieVelocityY; //move left one tile
    }
    else if (e.code == "KeyS" && goalie.y + goalieVelocityY + goalie.height <= field.height) {
        goalie.y += goalieVelocityY; //move right one tile
    }
}

