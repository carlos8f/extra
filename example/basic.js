var extra = require('../')
  , program = require('commander')

var e = extra();

program
  .option('--something', 'something')
  .option('--lol <bool>', 'drool')
  .parse(process.argv);

console.log(JSON.stringify({
  extra: e,
  something: program.something,
  lol: program.lol,
  args: program.args
}, null, 2));