let board = Array.from({ length: 9 }, () => ({
x: false,
o: false
}));
let turn = 0
const WIN_LINES = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];
let botstart = false
let cook = true


document.getElementById('victoire').style.display = 'none';
document.getElementById('défaite').style.display = 'none';
document.getElementById('égalité').style.display = 'none';

document.getElementById('cell1x').style.display = 'none';
document.getElementById('cell2x').style.display = 'none';
document.getElementById('cell3x').style.display = 'none';
document.getElementById('cell4x').style.display = 'none';
document.getElementById('cell5x').style.display = 'none';
document.getElementById('cell6x').style.display = 'none';
document.getElementById('cell7x').style.display = 'none';
document.getElementById('cell8x').style.display = 'none';
document.getElementById('cell9x').style.display = 'none';

document.getElementById('cell1o').style.display = 'none';
document.getElementById('cell2o').style.display = 'none';
document.getElementById('cell3o').style.display = 'none';
document.getElementById('cell4o').style.display = 'none';
document.getElementById('cell5o').style.display = 'none';
document.getElementById('cell6o').style.display = 'none';
document.getElementById('cell7o').style.display = 'none';
document.getElementById('cell8o').style.display = 'none';
document.getElementById('cell9o').style.display = 'none';

function render() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell${i+1}x`).style.display =
    board[i].x ? "block" : "none";
    document.getElementById(`cell${i+1}o`).style.display =
    board[i].o ? "block" : "none";
  }
}

function cloneBoard(board) {
  return board.map(c => ({ x: c.x, o: c.o }));
}

function gameOver() {
  if (isWin(board, "x")) {
    document.getElementById('victoire').style.display = 'block';
//    alert("Tu as triché!");
    return true;
  }
  if (isWin(board, "o")) {
    document.getElementById('défaite').style.display = 'block';
//    alert("Tu as perdu!");
    return true;
  }
  if (isDraw(board)) {
    document.getElementById('égalité').style.display = 'block';
//    alert("Égalité!");
    return true;
  }
  return false;
}

function isWin(board, player) {
  return WIN_LINES.some(line => line.every(index => board[index][player] === true)
  );
}

function isDraw(board) {
  return board.every(c => c.x || c.o);
}

function getEmptyCells(board) {
  return board.map((c, i) => (!c.x && !c.o ? i : null)).filter(i => i !== null);
}

function minimax(board, bot, turn) {
  const opponent = bot === "x" ? "o" : "x";
  if (isWin(board, bot)) return 1;
  if (isWin(board, opponent)) return -1;
  if (isDraw(board)) return 0;
  const moves = getEmptyCells(board);
  if (turn === bot) {
    let best = -Infinity;
    for (const i of moves) {
      const next = cloneBoard(board);
      next[i][turn] = true;
      best = Math.max(best, minimax(next, bot, opponent));
    }
    return best;
  } else {
    let best = Infinity;
    for (const i of moves) {
      const next = cloneBoard(board);
      next[i][turn] = true;
      best = Math.min(best, minimax(next, bot, bot));
    }
  return best;
  }
}

function getBestMove(board, bot) {
  const opponent = bot === "x" ? "o" : "x";
  let bestScore = -Infinity;
  let bestMove = null;
  for (const i of getEmptyCells(board)) {
    const next = cloneBoard(board);
    next[i][bot] = true;
    const score = minimax(next, bot, opponent);
    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }
  return bestMove;
}

function botMove() {
  const move = getBestMove(board, "o");
  if (move !== null) {
    board[move].o = true;
  }
}

document.getElementById("cell1").addEventListener("click", () => {
  if (!cook) return;
  if (board[0].x || board[0].o) return;
  board[0].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell2").addEventListener("click", () => {
  if (!cook) return;
  if (board[1].x || board[1].o) return;
  board[1].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell3").addEventListener("click", () => {
  if (!cook) return;
  if (board[2].x || board[2].o) return;
  board[2].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell4").addEventListener("click", () => {
  if (!cook) return;
  if (board[3].x || board[3].o) return;
  board[3].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell5").addEventListener("click", () => {
  if (!cook) return;
  if (board[4].x || board[4].o) return;
  board[4].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell6").addEventListener("click", () => {
  if (!cook) return;
  if (board[5].x || board[5].o) return;
  board[5].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell7").addEventListener("click", () => {
  if (!cook) return;
  if (board[6].x || board[6].o) return;
  board[6].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell8").addEventListener("click", () => {
  if (!cook) return;
  if (board[7].x || board[7].o) return;
  board[7].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("cell9").addEventListener("click", () => {
  if (!cook) return;
  if (board[8].x || board[8].o) return;
  board[8].x = true;
  cook = false;
  render();
  if (gameOver()) return;
  botMove();
  render();
  if (gameOver()) return;
  cook = true;
});

document.getElementById("reset").addEventListener("click", () => {
  cook=true;
  rng1=Math.floor(Math.random() * (4 - 1)) + 1;
  rng2=Math.floor(Math.random() * (5 - 1)) + 1;
  board=[{},{},{},{},{},{},{},{},{}];
  document.getElementById('victoire').style.display = 'none';
  document.getElementById('défaite').style.display = 'none';
  document.getElementById('égalité').style.display = 'none';
  botstart = !botstart;
  render();
  if (botstart){
    if(rng1==1){
      board=[{},{},{},{},{x:false,o:true},{},{},{},{}]
    }
    if(rng1==2){
      if(rng2==1){
        board=[{x:false,o:true},{},{},{},{},{},{},{},{}]
      }
      if(rng2==2){
        board=[{},{},{x:false,o:true},{},{},{},{},{},{}]
      }
      if(rng2==3){
        board=[{},{},{},{},{},{},{x:false,o:true},{},{}]
      }
      if(rng2==4){
        board=[{},{},{},{},{},{},{},{},{x:false,o:true}]
      }
    }
    if(rng1==3){
      if(rng2==1){
        board=[{},{x:false,o:true},{},{},{},{},{},{},{}]
      }
      if(rng2==2){
        board=[{},{},{},{x:false,o:true},{},{},{},{},{}]
      }
      if(rng2==3){
        board=[{},{},{},{},{},{x:false,o:true},{},{},{}]
      }
      if(rng2==4){
        board=[{},{},{},{},{},{},{},{x:false,o:true},{}]
      }
    }
  }
  render();
  cook = true;
});