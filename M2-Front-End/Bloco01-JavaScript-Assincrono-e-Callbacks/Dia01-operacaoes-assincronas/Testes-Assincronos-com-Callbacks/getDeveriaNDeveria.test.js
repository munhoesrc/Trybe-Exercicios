test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
    } catch (error) {
      done(error);  // se omitr o erro nesta linha. o catch não ira tratar o erro e irá paasar no teste.
    }
  }, 500);
});