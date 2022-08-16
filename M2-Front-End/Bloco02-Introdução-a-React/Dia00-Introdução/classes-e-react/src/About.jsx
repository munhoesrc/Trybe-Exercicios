import React from 'react';

class About extends React.Component {
  render() {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'JEST']
  const jsxSkills = skills.map((skill) => <li>{skill}</li>)

    return (
    <div className="About">
    <h1 className="About__first">Renan Casarin Munhoes</h1>
    <p className= "About__text">
      Olá meu nome é Renan e sou apaixonado por tecnologia, desenvolvimento e
      marcas que trabalhem para contribuir com uma melhor interação digital.
      Sou formado Bacharel em Administração no ano de 2015, e sempre trabalhei
      na área, desempenhando várias atribuições. Atualmente passo por
      transição de carreira, onde busco linkar a experiência adquirida com a
      área Tech.
    </p>
    <h2 className="About__second" >Minhas Habilidades</h2>
    <ul>{ jsxSkills }</ul>
  </div>
  );
  }
}

export default About;