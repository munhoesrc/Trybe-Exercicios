const sum = require('./script');

test('Verifica se a soma de 2 e 3 é 5', () => {
  expect(sum(2, 3)).toBe(5);
});