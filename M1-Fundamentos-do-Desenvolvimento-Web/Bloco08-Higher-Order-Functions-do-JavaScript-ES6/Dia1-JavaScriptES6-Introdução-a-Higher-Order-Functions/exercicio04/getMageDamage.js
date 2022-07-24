const calcDamage = require('./calcDamage');

const getMageDamage = (mage) => {
  const { intelligence, mana } = mage;
  const turnStats = {
    damage: 'Not enough mana!',
    manaSpent: 0,
  };

  if (mana > 15) {
    turnStats.damage = calcDamage(intelligence, intelligence * 2);
    turnStats.manaSpent = 15;
    return turnStats;
  }

  return turnStats;
};

module.exports = getMageDamage;