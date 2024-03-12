const ROW_INDEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const COL_INDEX = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default function DisplayController() {
  function makeBoard(player) {
    const BOARD_SIZE = 10;
    const CELL_SIZE = 32;
    const BOARD_AREA = CELL_SIZE * 11;
    let gameBoard = null;
    if (player === 'player') {
      gameBoard = document.getElementById('player-grid');
    } else {
      gameBoard = document.getElementById('opponent-grid');
    }

    gameBoard.classList.add(`w-[${BOARD_AREA}px]`, `h-[${BOARD_AREA}px]`, 'grid', 'grid-cols-11', 'grid-rows-10');

    for (let i = 0; i < 11; i++) {
      const cell = document.createElement('div');
      cell.textContent = `${COL_INDEX[i]}`;
      cell.classList.add('cell', `w-[${CELL_SIZE}px]`, `h-[${CELL_SIZE}px]`, 'text-sm', 'self-center');
      gameBoard.appendChild(cell);
    }

    for (let i = 0; i < BOARD_SIZE; i++) {
      const cell = document.createElement('div');
      cell.textContent = `${ROW_INDEX[i]}`;
      cell.classList.add('cell', `w-[${CELL_SIZE}px]`, `h-[${CELL_SIZE}px]`, 'text-sm');
      gameBoard.appendChild(cell);

      for (let j = 0; j < BOARD_SIZE; j++) {
        const colCell = document.createElement('div');
        colCell.classList.add('cell', `w-[${CELL_SIZE}px]`, `h-[${CELL_SIZE}px]`, 'border');
        gameBoard.appendChild(colCell);
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
