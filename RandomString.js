#!/usr/bin/env node
const prog = require('caporal');
prog
  .version('1.0.0')
  
  .command('random','to random')
  .option("--length")
  .option("--letters")
  .option("--numbers")
  .option("--uppercase")
  .option("-numbers", "--lowercase","--length")

  .argument('<mix>','mix number')

  .action(function(args , options, logger){
      function makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var possib = "--length";
          var possi = "--letters";
          var poss = "--numbers";
          var pos ="--uppercase";
          var po = "-numbers";
          
          for(var i = 0; i < 50; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          text += possib.charAt(Math.floor(Math.random() * possible.length));
          text += possi.charAt(Math.floor(Math.random() * possible.length));
          text += poss.charAt(Math.floor(Math.random() * possible.length));
          text += pos.charAt(Math.floor(Math.random() * possible.length));
          text += po.charAt(Math.floor(Math.random() * possible.length));
          return text;
      }
      console.log(makeid());
  })
    

  
  prog.parse(process.argv);