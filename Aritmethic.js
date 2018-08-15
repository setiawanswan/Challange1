#!/usr/bin/env node


const prog = require('caporal');
prog
// Task 2
.command('add', 'to add number')

.argument('<tambah...>','tambah to number')

.action(function(args, options, logger){
  
  const reducer = (accumulator, currentValue) => {return parseInt(accumulator) + parseInt(currentValue)};
  console.log(args.tambah.reduce(reducer));
})

.command('subtract', 'to subtract number')

.argument('<kurang...>','kurang to number')

.action(function(args, options, logger){
  const reducer = (gasolin, oil) => {return parseInt(gasolin) - parseInt(oil)};
  console.log(args.kurang.reduce(reducer));

})

.command('multiply','to multiply number')

.argument('<kali...>','kali to number')

.action(function(args, options, logger){
  const reducer = (wood, steel) => {return parseInt(wood) * parseInt(steel)};
  console.log(args.kali.reduce(reducer));
})

.command('divided','to divided number')

.argument('<bagi...>','bagi to number')

.action(function(args,options, logger){
  const reducer = (fly, swim) => { return parseInt(fly) / parseInt(swim)};
  console.log(args.bagi.reduce(reducer));

})
prog.parse(process.argv);