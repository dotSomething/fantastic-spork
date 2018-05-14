var programData = require("../program");

var gradeBook = {

    _grades: [],
    addGrade: function(newGrade){  
        this._grades.push(newGrade);
    }, 
    getCountOfGrades: function(){
        return this._grades.length;
    },
    getAverage: function(average){
        var total = 0;
        var count = this._grades.length;
        for(var i = 0; i < this._grades.length; i++ ){
            total += this._grades[i];
        };
        return total / this._grades.length;
    },
    reset: function(){
        this._grades = [];
    }
}

exports.book = gradeBook;