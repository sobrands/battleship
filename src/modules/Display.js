const ROW_INDEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const COL_INDEX = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default function DisplayController() {
  function makeBoard(player) {
    let gameBoard = null;
    if (player === 'player') {
      gameBoard = document.getElementById('player-grid');
    } else {
      gameBoard = document.getElementById('opponent-grid');
    }

    const rowIndex = gameBoard.querySelector('#row-index');
    const colIndex = gameBoard.querySelector('#col-index');
    const cells = gameBoard.querySelector('#cells');

    // Populate first row
    for (let i = 0; i < 11; i++) {
      const cell = document.createElement('div');
      cell.textContent = COL_INDEX[i];
      cell.classList.add('cell', 'w-8', 'h-8');
      cell.classList.add('text-xs', 'font-light');
      cell.classList.add('flex', 'justify-center', 'items-center');
      colIndex.appendChild(cell);
    }

    // Populate remaining rows
    for (let i = 0; i < 10; i++) {
      // Create numbered column first
      const cell = document.createElement('div');
      cell.textContent = `${ROW_INDEX[i]}`;
      cell.classList.add('cell', 'w-8', 'h-8');
      cell.classList.add('text-xs', 'font-light');
      cell.classList.add('flex', 'justify-center', 'items-center');
      rowIndex.appendChild(cell);
      for (let j = 0; j < 10; j++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('cell', 'w-8', 'h-8');
        if (i < 9) {
          emptyCell.classList.add('border-b');
        }
        if (j < 9) {
          emptyCell.classList.add('border-r');
        }
        cells.appendChild(emptyCell);
      }
    }
  }

  function makeBoardArea() {
    makeBoard('player');
    makeBoard('opponent');
  }

  return {
    makeBoardArea,
  };
}
