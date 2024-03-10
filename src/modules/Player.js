import Gameboard from './Gameboard';

export default function Plauer(playerName, isComputerPlayer = false) {
  const name = playerName;
  const isComputer = isComputerPlayer;
  const gameBoard = Gameboard();
  const moveHistory = [];

  function getRandomCoords() {
    // Choose x and y randomly
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }

  function makeRandomMove() {
    let [x, y] = getRandomCoords();
    let position = `${x},${y}`;
    while (moveHistory.includes(position)) {
      // Get coordinates again
      [x, y] = getRandomCoords;
      position = `${x},${y}`;
    }

    moveHistory.push(position);
    return [x, y];
  }

  return {
    name,
    gameBoard,
    isComputer,
    makeRandomMove,
  };
}
