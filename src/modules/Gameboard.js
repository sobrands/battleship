import { shipCell } from './Ship';

const Gameboard = (() => {
  const BOARD_SIZE = 10;

  // Provide a meta description for different cell types
  const EMPTY_CELL = null;
  const SHIP_CELL = { hasShip: true, isHit: false };
  const HIT_CELL = { hasShip: true, isHit: true };
  const MISSED_CELL = { hasShip: false, isHit: true };
  const gameBoard = [];

  // Create empty gameboard
  for (let i = 0; i < BOARD_SIZE; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      gameBoard[i][j] = EMPTY_CELL;
    }
  }

  // Create a hashmap of cells with ships on it
  const shipPositions = {};

  // Store ships in gameboard
  const ships = [];

  // Check if ship placement valid
  function checkValidPlacement(row, col, length, direction) {
    // Check if the placement is within the board
    if (
      row < 0
      || col < 0
      || (direction === 'horizontal' && col + length > BOARD_SIZE)
      || (direction === 'vertical' && row + length > BOARD_SIZE)
    ) {
      return false;
    }

    // Check if the cells are empty
    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        if (gameBoard[row][col + i] !== EMPTY_CELL) {
          return false;
        }
      } else if (direction === 'vertical') {
        if (gameBoard[row + i][col] !== EMPTY_CELL) {
          return false;
        }
      }
    }

    return true;
  }

  function placeShip(row, col, ship, direction) {
    const length = ship.shipLength;
    const isValidPlacement = checkValidPlacement(row, col, length, direction);
    if (!isValidPlacement) {
      return false;
    }

    const positions = [];
    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        gameBoard[row][col + i] = SHIP_CELL;
        const position = `${row},${col + i}`;
        shipPositions[position] = ship;
        positions.push(shipCell(row, col + i, false));
      } else {
        gameBoard[row + i][col] = SHIP_CELL;
        const position = `${row + i},${col}`;
        shipPositions[position] = ship;
        positions.push(shipCell(row + i, col, false));
      }
    }

    ship.setPositions(positions);
    ships.push(ship);
    return true;
  }

  function receiveAttack(x, y) {
    // If no ship, changed to missed cell
    if (gameBoard[x][y] === EMPTY_CELL) {
      gameBoard[x][y] = MISSED_CELL;
    } else if (gameBoard[x][y] === SHIP_CELL) { // If ship present, attack ship
      gameBoard[x][y] = HIT_CELL;
      // Find ship and hit it
      const position = `${x},${y}`;
      const ship = shipPositions[position];
      ship.hit(x, y);
    }
  }

  function allShipsSunk() {
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }

    return true;
  }

  return {
    gameBoard,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
});

export default Gameboard;
