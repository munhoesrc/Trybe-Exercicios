const calcDamage = require('./calcDamage');

const getWarriorDamage = (warrior) => {
  const { strength, weaponDmg } = warrior;
  return calcDamage(strength, strength * weaponDmg);
};

module.exports = getWarriorDamage;