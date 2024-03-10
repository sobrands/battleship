import { shipCell, Ship } from '../modules/Ship';

const ship = Ship(2);
const coordinates = [shipCell(2, 3), shipCell(4, 6)];
ship.setPositions(coordinates);

test('Hit increases', () => {
  expect(ship.hit(2, 3)).toEqual({
    '2,3': { x: 2, y: 3, isHit: true },
    '4,6': { x: 4, y: 6, isHit: false },
  });
});

test('Ship sunk', () => {
  expect(ship.isSunk()).toBeFalsy();
});

test('Ship hit twice more and ship sinks', () => {
  expect(ship.hit(4, 6)).toEqual({
    '2,3': { x: 2, y: 3, isHit: true },
    '4,6': { x: 4, y: 6, isHit: true },
  });
  expect(ship.isSunk()).toBeTruthy();
});
