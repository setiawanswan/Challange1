#!/usr/bin/env node

// Task 1
const prog = require('caporal');
prog

  
.version('1.0.0')
  
    .command('lowercase', 'Our deploy command')
 
    .argument('<app>', 'App to deploy')
  
    .action(function(args, options, logger) {
    console.log(args.app.toLowerCase());
    
    
  })
.command('uppercase', 'to uppercase')

.argument('<ap>','ap to uppercase')

.action(function(args, options, logger){
  console.log(args.ap.toUpperCase());
})

.command('capitalize','first word')

.argument('<hihi>','go word')

.action(function(args, options, logger){
  function capital_letter(str)
  {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++){
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);

    }
    return str.join(" ");
  }
  console.log(capital_letter(""))
})
prog.parse(process.argv);