import Team from '../src/function';

const team = new Team();
const gen = team.gener();

test('Первый игрок', () => {
  const expected = {
    name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10, damage: 25,
  };
  const pers = gen.next();
  const received = pers.value;
  expect(received).toEqual(expected);
});

test('Второй игрок', () => {
  const expected = {
    name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25, damage: 30,
  };
  const pers = gen.next();
  const received = pers.value;
  expect(received).toEqual(expected);
});

test('Третий игрок', () => {
  const expected = {
    name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 20,
  };
  const pers = gen.next();
  const received = pers.value;
  expect(received).toEqual(expected);
});

test('Четвертый игрок', () => {
  const expected = {
    name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40, damage: 20,
  };
  const pers = gen.next();
  const received = pers.value;
  expect(received).toEqual(expected);
});

test('Пятый игрок', () => {
  const expected = undefined;
  const pers = gen.next();
  const received = pers.value;
  expect(received).toEqual(expected);
});
