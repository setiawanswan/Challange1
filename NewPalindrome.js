const prog = require('caporal');
prog

.version('1.0.0')

.command('newpalindrome','fake')

.argument('<div...>','to fake')

.action(function(args,options, logger){
    function check_palindrome(str_entry){
        var cst = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;

        if(cst===""){
            console.log("Nothing found!");
            return false;
        }
        if ((cst.length) % 2 === 0) {
            ccount = (cst.length) / 2;
        } else {
        if (cst.length === 1){
            console.log(" is a palindrome");
            return true;
        }else{
            ccount = (cst.length - 1) / 2;
        }
        }
        for (var x = 0; x < ccount; x++){
            if (cst[x] != cst.slice(-1-x)[0]){
                console.log("is not a palindrome.");
                return false;
            }
        }
        console.log("is a palindrome.");
        return true;
    }
    check_palindrome('Saya ingin pergi ke pasar');
    check_palindrome('Kasur ini rusak');
    check_palindrome('Ibu Ratna antar ubi');
    check_palindrome('Aku suka rajawali, bapak. Apabila wajar, aku suka');
})


prog.parse(process.argv);