var printer = require("./lib/grades");

var gradeReader = process.argv.slice(2);

function printAverage(){
    printer.book.addGrade(gradeReader);
    console.info("printer.book._grades: " + printer.book._grades);
    
    var average = printer.book.getAverage();
    
    console.info("gradeReader.length: " + gradeReader.length);
    console.info("printer.book._grades.length: " + printer.book._grades.length);
    console.log("Average is " + average);
};

exports.programData = gradeReader;

printAverage(gradeReader);
