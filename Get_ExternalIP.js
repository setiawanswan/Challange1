#!/usr/bin/env node

// Task 6
const prog = require('caporal');

const publicIp = require('public-ip');
prog

.version('1.0.0')
  
  .command('Get-Ip', 'save')
  
  //.argument('<protect>', 'to protect')
  
  
  .action(function(args, options, logger){
    publicIp.v4().then(ip => {
        console.log(ip);
  
    })
})

prog.parse(process.argv);