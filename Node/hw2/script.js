const makulinPassGen = require('makulin_pass_generation');

console.log(makulinPassGen.generatePass(10, true));

// итог: работает

// true - сложный пароль
// false - легкий, содержащий только символы