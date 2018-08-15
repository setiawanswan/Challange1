#!/usr/bin/env node

// Task 7
const prog = require('caporal');
const internalIp = require('internal-ip');
prog

.version('1.0.0')

.command('Get','to know')

//.argument('<Ip>','to get ip')

    .action(function(args, options, logger){
        internalIp.v6().then(ip => {
        console.log(ip);
        console.log(internalIp.v6.sync())
    })
})

prog.parse(process.argv);