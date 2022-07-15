function sum() {
  const result = Number(value1) + Number(value2);  
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  throw new Error('Não é um valor válido!');

  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  result =0;
  try {
  result = sum(value1, value2);
  
  } catch (error) {
    document.getElementsByTagName('p')[0].innerText = error.menssage;
  }

  const loadApp = () =>{
    const button = document.getElementById('button');
  button.addEventListener('click', sum);
  }

  window.onload = loadApp;
}
