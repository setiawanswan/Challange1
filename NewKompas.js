const prog = require('caporal');
prog 


.version('1.0.0')

.command('new','headline')

.argument('<newheadline>','to headline')

.action(async function(args, options, logger){
    var request = require('request');

    const req = new Promise((resolve, reject) => {
    request('https://www.kompas.com/',{method: 'get'}, (err, httpresponse, body) => {
        resolve(body)
})
    
    })
const hasil = await req
console.log(hasil)

})

prog.parse(process.argv);