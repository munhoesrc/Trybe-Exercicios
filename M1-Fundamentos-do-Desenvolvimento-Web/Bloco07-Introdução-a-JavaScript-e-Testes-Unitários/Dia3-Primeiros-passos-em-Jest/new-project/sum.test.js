const {sum, teste} = require('./script');

describe("Validação de alguns exercicios()", () => {

test('Verifica se a soma de 2 e 3 é 5', () => {
  expect(sum(2, 3)).toBe(5);
});

it('Verifica se a multiplicacao entre 6 e 6 é igual 36', () => {
  expect(teste(6,6)).toBe(36);
});
});
