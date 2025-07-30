
// set up the input interface 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// initialize and draw game board 
const board = ['1','2','3','4','5','6','7','8','9'];

function drawBoard() {
  console.log(`
    ${board[0]} | ${board[1]} | ${board[2]} // 1 | 2 | 3
    ---+---+---
    ${board[3]} | ${board[4]} | ${board[5]} // 4 | 5 | 6
    ---+---+---
    ${board[6]} | ${board[7]} | ${board[8]} // 7 | 8 | 9
  `);
}
drawBoard();



