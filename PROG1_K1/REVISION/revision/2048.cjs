const prompt = require("prompt-sync")();
const grid = [];

const createGrid = () => {
  for (let i = 0; i < 4; i++) {
    grid.push([]);
    for (let j = 0; j < 4; j++) {
      grid[i].push("#");
    }
  }
  createNewNumber();
  console.log(grid);
};

const createNewNumber = () => {
  const posX = Math.floor(Math.random() * 4);
  const posY = Math.floor(Math.random() * 4);
  if (grid[posY][posX] == "#") {
    grid[posY].splice(posX, 1, 2);
  } else createNewNumber();
};

const slideNumbers = (move = prompt("Direction : ")) => {
  switch (move) {
    case "down":
      break;
    case "Up":
      break;
    case "right":
      break;
    case "left":
      break;
    default:
      break;
  }
};
const jouer = ()=>{
    createGrid()
    slideNumbers()
}

jouer()