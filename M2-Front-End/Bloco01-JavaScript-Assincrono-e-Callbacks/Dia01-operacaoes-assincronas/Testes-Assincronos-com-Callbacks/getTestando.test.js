const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b; // ao add + 1 o teste falha, expectativa receber 15 e recebe 16
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});