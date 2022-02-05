var sq = document.querySelectorAll(".sq");
const p_x = "X";
const p_o = "O";
const gameState = {
  turn: "playerOne",
  p1plays: [],
  p2plays: [],
  plays: [],
};
const winCondition = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["3", "5", "7"],
  ["1", "5", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
];
var turn = p_x;

for (let square = 0; square < sq.length; square++) {
  sq[square].addEventListener("click", runEvent);
}

function wincond(player) {
  for (let solution = 0; solution < winCondition.length; solution++) {
    // console.log("solution,", winCondition[solution]);

    var validSolution = true;
    for (let i = 0; i < winCondition[solution].length; i++) {
      if (player == "p1") {
        if (!gameState.p1plays.includes(winCondition[solution][i])) {
          validSolution = false;
        }
      } else {
        if (!gameState.p2plays.includes(winCondition[solution][i])) {
          validSolution = false;
        }
      }
    }
    if (validSolution == true) {
      return true;
    }
  }
  return false;
}
function runEvent(clicked) {
  const square = clicked.target;
  if (gameState["plays"].includes(square.id)) {
    return;
  }
  if (turn == p_x) {
    square.innerText = p_x;
    gameState.plays.push(square.id);
    gameState.p1plays.push(square.id);
    turn = p_o;
    var win = wincond("p1");
    if (win == true) {
      console.log("player 1 won");
    }
  } else {
    square.innerText = p_o;
    gameState.plays.push(square.id);
    gameState.p2plays.push(square.id);
    turn = p_x;
    var win = wincond();
    if (win == true) {
      console.log("player 2 won");
    }
  }
}
