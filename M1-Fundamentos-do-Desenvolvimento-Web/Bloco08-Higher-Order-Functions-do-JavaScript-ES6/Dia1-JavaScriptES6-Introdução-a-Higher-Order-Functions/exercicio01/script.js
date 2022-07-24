const addEmployee = (fullName) => {
  return {
    nomeCompleto: fullName,
    email: `${fullName.replace(' ', '_').toLowerCase()}@trybe.com`,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(addEmployee));