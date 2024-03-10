const shipCell = ((xCoord, yCoord) => {
  const x = xCoord;
  const y = yCoord;
  const isHit = false;

  return {
    x,
    y,
    isHit,
  };
});

function Ship(length) {
  const shipLength = length;
  const positions = {};

  function hit(x, y) {
    const position = `${x},${y}`;
    positions[position].isHit = true;
    return positions;
  }

  function isSunk() {
    for (const position in positions) {
      if (!positions[position].isHit) {
        return false;
      }
    }
    return true;
  }

  // Populate ship positions with shipCell metadata
  function setPositions(shipCells) {
    shipCells.forEach((cell) => {
      const position = `${cell.x},${cell.y}`;
      positions[position] = cell;
    });
  }

  return {
    shipLength,
    setPositions,
    hit,
    isSunk,
  };
}

export { shipCell, Ship };
