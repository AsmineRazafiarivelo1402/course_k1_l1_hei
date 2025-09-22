// CHANGE THE VALUE OF ATTACKS TO INDEX OF ARRAY
const newAttacks = (tableau) => {
  let indexAttacks; // one index to change
  let attacksValue = []; // all attacks already change in array index
  for (let i = 0; i < tableau.length; i++) {
    indexAttacks = [];
    for (let j = 0; j < tableau[i].length; j++) {
      indexAttacks.push(tableau[i][j] - 1);
    }
    attacksValue.push(indexAttacks);
  }
  return attacksValue;
};

// CHANGE THE BOARD RANGE TO FACILITE ATTACKS
const tempBoard = (tableau) => {
  let board = [];
  for (let i = tableau.length - 1; i >= 0; i--) {
    board.push(tableau[i]);
  }
  return board;
};

// VERIFY THE VALUE TO KNOW WHERE IS THE BOAT
const checkBoat = (tableau) => {
  let newTableau = tempBoard(tableau);
  let tmpBoat = [];
  for (let i = 0; i < newTableau.length; i++) {
    for (let j = 0; j < newTableau[i].length; j++) {
      if (newTableau[i][j] > 0) {
        tmpBoat.push([newTableau[i][j], j, i]);
      }
    }
  }
  return tmpBoat;
};
// DEPEND TO ABOVE FUNCTION IT FORMS THE BOAT IN ONE ARRAY
const whereIsBoat = (tmpBoat) => {
  let boat; //one boat find
  let allBoat = []; //all boatin the navire
  let eltXY;
  tmpBoat = checkBoat(tmpBoat);
  for (let i = 0; i < tmpBoat.length; i++) {
    eltXY = tmpBoat[i];
    boat = [];
    for (let j = 0; j < tmpBoat.length; j++) {
      if (eltXY[0] == tmpBoat[j][0]) {
        boat.push(tmpBoat[j]);
        tmpBoat[j] = 0;
      }
    }
    allBoat.push(boat.filter((a) => a != 0));
  }
  return allBoat.filter((a) => a.length >= 2);
};

const attacks = (board, attack) => {
  let damaged = 0;
  let sunk = 0;
  let noTouch=0
  let point = 0;
  let count = 0;
  attack = newAttacks(attack);
  board = whereIsBoat(board);
  for (let i = 0; i < board.length; i++) {
    count=0
    for (let j = 0; j < board[i].length; j++) {
      for (let e = 0; e < attack.length; e++) {
        if (board[i][j][1] == attack[e][0] && board[i][j][2] == attack[e][1]) {
          count++;
        }
      }
    }
    if(count>=board[i].length){
      sunk=sunk + 3
    }else if(count==0){
      noTouch= noTouch -1
    }else if(count>0 && count<board[i].length){
      damaged=damaged +0.5
    }
  }

 let result = {
  "sunk" : sunk,
  "Damaged" : damaged,
  "Notouch" : noTouch,
  "Point": sunk + damaged + noTouch
 }
 console.log(result);
  
};

attacks(
  [
    [0, 0, 0, 2, 2, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 0, 1, 0, 0],
    [0, 3, 0, 1, 0, 0],
  ],
  [
    [2, 1],
    [2,2],
    [2,3],
  ]
);


