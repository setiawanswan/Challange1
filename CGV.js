const prog = require('caporal');
prog

.version('1.0.0')

.command('information','to get information')

.argument('<get>','cgv')

.action(function(args, options, logger){
    const rp = require('request-promise');
    const cheerio = require('cheerio');
    const Table = require('cli-table');
})

prog.parse(process.argv);