import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const diaAdia = ['acordar', 'tomar café', 'ir para o PC', 'alomoçar', 'estudar', 'jantar', 'jogar xadrez'];

class App extends React.Component {
  render () {
    return (
      <ul className='lista'>{ diaAdia.map(diaAdia => Task(diaAdia))}</ul>
    );
  }
}
export default App;
