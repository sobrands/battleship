import Gameboard from '../modules/Gameboard';
import { Ship } from '../modules/Ship';

const shipTest = Ship(3);
const gameBoard = Gameboard();

test('Place ship wrongly', () => {
  expect(gameBoard.placeShip(0, 9, shipTest, 'horizontal')).toBeFalsy();
});

test('Place ship correctly', () => {
  expect(gameBoard.placeShip(0, 9, shipTest, 'vertical')).toBeTruthy();
});

test('Attack empty cell', () => {
  gameBoard.receiveAttack(1, 0);
  expect(gameBoard.gameBoard[1][0]).toEqual({
    hasShip: false,
    isHit: true,
  });
});

test('Attack ship cell', () => {
  gameBoard.receiveAttack(1, 9);
  expect(gameBoard.gameBoard[1][9]).toEqual({
    hasShip: true,
    isHit: true,
  });
});

test('Ships not sunk', () => {
  expect(gameBoard.allShipsSunk()).toBeFalsy();
});

test('Ships sunk', () => {
  gameBoard.receiveAttack(0, 9);
  gameBoard.receiveAttack(2, 9);
  expect(gameBoard.allShipsSunk()).toBeTruthy();
});
