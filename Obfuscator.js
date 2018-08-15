#!/usr/bin/env node

// Task 5
const prog = require('caporal');
prog

.version('1.0.0')

.command('obfuscate','to save')

.argument('<simpan...>','simpan code')

.action(function(args, option, logger){
    let item = args.simpan
    let you = 'setiawan.tumilin@gmail.com'
    for(let i= 0 ; i < you.length; i++ ){
        console.log(i)
        console.log("&#" + (you[i].charCodeAt()))
    }
    
})


prog.parse(process.argv);