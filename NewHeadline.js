const prog = require('caporal')
const cheerio = require('cheerio')
prog

.version('1.0.0')

.command('head', 'to headline')

.argument('<headline>','new headline')

.action(function(args, options,logger){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  var request = require('request');
  var cheerio = require('cheerio');

  request('https://www.kompas.com/', function(err, resp,html){
      if (!err){
          const $ = cheerio.load(html);
          console.log(hmtl);
      }
  });
})

prog.parse(process.argv);