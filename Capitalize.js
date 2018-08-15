const prog = require('caporal');
prog

.version('1.0.0')

.command('capital','make big')

.argument('<caps>','to caps')

.action(function(args, options, logger){
    capitalize = function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log(capitalize('i am crazy text'))
})
prog.parse(process.argv);