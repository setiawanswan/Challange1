#!/usr/bin/env node

const prog = require('caporal');
prog
  .version('1.0.0')

  .command('screen','to screenshot')

  .argument('<sc...>','to sc')

  .action(function(args,options, logger){
   const puppeteer = require('puppeteer');

   async function getPic(){
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await page.goto('https://google.com');
     await page.screenshot({path: 'google.png'});

     

     await browser.close();
   }
   

   getPic();
  });
  

      
prog.parse(process.argv);
