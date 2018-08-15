const prog = require('caporal');
prog

.version('1.0.0')

.command('output','code')

.argument('<below...>','result code')

.action(function(args, options, logger){
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
          console.log(i)
        }, 1000);
      }
      
      console.log('Done')

})


.command('promise','please')

.argument('<prom>','cihuy')

.action(function(args, options, logger){
    const fs = require('fs')

fs.readdir('/', (err, result) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(result)
})
})

.command('wiw','to wiw')

.argument('<uwaw>','wkwkwk')

.action(function(args,options, logger){
    const readdir = require('readdir');

    readdir('patch/to/dir')
    .then(function(files){
        console.log(files);
    })
    .catch(function(err){
        console.log(err.message);
    })
})


prog.parse(process.argv);