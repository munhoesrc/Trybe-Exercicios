const calcDamage = require('./calcDamage');

const getDragonDamage = (dragon) => calcDamage(15, dragon.strength);

module.exports = getDragonDamage;