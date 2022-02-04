var sq = document.querySelector('.sq'); //querySelectorAll da erro quando tento por event listener
const p_x = 'X';
const p_o = 'O'; 
var turn = p_x; // a turn de cada jogador


sq.addEventListener('click', runEvent); // event listener para os squares

function runEvent(clicked){
  const square = clicked.target 
  if (turn = p_x) {
    square.innerText = p_x;
    turn = p_o; 
    console.log(turn); // muda dentro da function mas nao fora acho eu, nao tenho certeza
  }
  else {
    square.innerText = p_o;
    turn = p_x;
    console.log(turn);
  }
}
console.log(turn);