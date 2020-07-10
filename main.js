// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;


// Iteration 1
function drawGrid() {
  for (let width = 0; width < 10; width++) {
    for(let height =0; height < 10; height++){
    context.strokeStyle = 'grey';
    context.strokeRect(width * 50,height * 50 , 50, 50);
    }
  }
}


class Character {
  constructor(col, row){
    this.row = row;
    this.col = col;
  }
  moveUp(){
    return this.col --;
  }
  moveRight(){
    return this.row ++;
  }
  moveDown(){
    return this.col ++;
  }
  moveLeft(){
    return this.row --;
  }
}

const player = new Character(0, 0)


function drawPlayer(){
const Knight = new Image();
Knight.src = 'images/character-down.png';
Knight.addEventListener('load', () => {
context.drawImage(Knight, player.row * 50,player.col * 50, 50, 50)
  }); 
}

class Treasure {
  constructor(col, row){
    this.row = row;
    this.col = col;
  }
  setRandomPosition(col,row){
    return this.col += Math.floor(Math.random() * 9),this.row += Math.floor(Math.random() * 9) ;
    }
  }

const loot = new Treasure (1,1)
loot.setRandomPosition();
console.log(loot.row, loot.col);

function drawTreasure(){
const Crystal = new Image();
Crystal.src = 'images/treasure.png';
Crystal.addEventListener('load', () => {
context.drawImage(Crystal, loot.row* 50, loot.col * 50,50, 50)
if(player.row === loot.row && player.col === loot.col){
  loot.setRandomPosition();
  drawEverything();
  context.clearRect(0, 0, width, height);
  
    }
  });
}




function drawEverything() {
  context.clearRect(0 ,0 , canvas.width, canvas.height);
  drawGrid();
  drawTreasure(); 
  drawPlayer();
 
}


drawEverything();


window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft(); 
      drawEverything();
      break;
    case 38:
      player.moveUp();
      drawEverything();
      break;
    case 39:
      player.moveRight();
      drawEverything();
      break;
    case 40:
      player.moveDown();
      drawEverything();
      break;
  }
});
