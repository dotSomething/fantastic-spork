var printer = require("./lib/grades");

function printAverage(){
    for(var i = 2; i < process.argv.length; i++){
        printer.book.addGrade(parseInt(process.argv[i]));
    };
    console.log('Average: ' + printer.book.getAverage());
};

printAverage();
