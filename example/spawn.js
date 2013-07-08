#!/usr/bin/env node
var extra = require('../')
  , program = require('commander')
  , spawn = require('child_process').spawn

var e = extra();

program
  .command('spawn')
  .usage('[options] -- <cmd> [cmd_options] [cmd_args...]')
  .option('--fork', 'fork the process and exit')
  .action(function (cmd) {
    var proc = spawn(e.cmd, e.args, {env: e.env});
    if (cmd.fork) {
      process.exit();
    }
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    process.on('exit', function () {
      proc.kill();
    });
  })

program.parse(process.argv);

if (!program.args.length) program.outputHelp();