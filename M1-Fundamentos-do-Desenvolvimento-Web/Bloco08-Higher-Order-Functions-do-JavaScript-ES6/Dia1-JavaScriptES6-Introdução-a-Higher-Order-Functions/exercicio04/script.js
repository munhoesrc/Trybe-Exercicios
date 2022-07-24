const battleMembers = require('./battleMembers');
const getWarriorDamage = require('./getWarriorDamage');
const getMageDamage = require('./getMageDamage');
const getDragonDamage = require('./getDragonDamage');

const gameActions = {
  warrior: (callback) => {
    const { dragon, warrior } = battleMembers;
    dragon.healthPoints -= callback(warrior);
    warrior.damage = callback(warrior);
  },
  mage: (callback) => {
    const { dragon, mage } = battleMembers;
    const turnStats = callback(mage);

    dragon.healthPoints -= turnStats.damage;
    mage.damage = turnStats.damage;
    mage.mana = mage.mana - turnStats.manaSpent;
  },
  dragon: (callback) => {
    const { dragon, mage, warrior } = battleMembers;
    mage.healthPoints -= callback(dragon);
    warrior.healthPoints -= callback(dragon);
    dragon.damage = callback(dragon);
  },
  stats: () => battleMembers,
};

gameActions.warrior(getWarriorDamage);
gameActions.mage(getMageDamage);
gameActions.dragon(getDragonDamage);
console.log(gameActions.stats());