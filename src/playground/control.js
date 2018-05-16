var getDieRoll = function(){
    var result = Math.ceil(6 * Math.random());
    return result
};

//var things = [1, 2, 4, "pizza"]

for(var i = 0; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

var roll = getDieRoll(6);

// while(roll < 4) {
//     console.log(roll)
//     roll = getDieRoll(6)
// // }

// do {
//     roll = getDieRoll(6);
//     console.log(roll);
//     console.log("Roll is great than 4, doing more stuff");
// } while(roll > 4);


for(var i = 0; i < 10; i += 1){
    roll = getDieRoll(6);
    if (roll >= 4){
        console.log("*");
    } else {
        console.log("-");
    }
}




//console.log('You rolled a ' + roll);

