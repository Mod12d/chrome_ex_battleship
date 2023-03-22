const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ROW_COUNT = 10;
const COL_COUNT = 10;
const CELL_SIZE = 40;

let board = [];

// Initialize the board
for (let i = 0; i < ROW_COUNT; i++) {
  board.push([]);
  for (let j = 0; j < COL_COUNT; j++) {
    board[i].push({
      x: j * CELL_SIZE,
      y: i * CELL_SIZE,
      hit: false,
      ship: null
    });
  }
}

// Draw the board
function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < COL_COUNT; j++) {
      const cell = board[i][j];

      ctx.beginPath();
      ctx.rect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
      ctx.stroke();

      if (cell.hit) {
        ctx.beginPath();
        ctx.moveTo(cell.x, cell.y);
        ctx.lineTo(cell.x + CELL_SIZE, cell.y + CELL_SIZE);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cell.x + CELL_SIZE, cell.y);
        ctx.lineTo(cell.x, cell.y + CELL_SIZE);
        ctx.stroke();
      }
    }
  }
}

drawBoard();






