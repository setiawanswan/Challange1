

// Task 11
const prog = require('caporal');
prog

.version('1.0.0')

.command('take','takesc')

.argument('<sc...>','screen')

.action(function(args, options, logger){
  var scraperjs = require('scraperjs');
  scraperjs.DynamicScraper.create('https://google.com')
  .scrape(function($){
    return $(".title a").map(function(){
      return $(this).text();
    }).get();
  })
  .then(function(news){
    console.log(news);
  })
})

 
prog.parse(process.argv);