var getDieRoll = function(){
    return Math.ceil(6 * Math.random());
}

function playGame(){
    var player1Name = process.argv[2];
    var player2Name = process.argv[3];

    var player1Roll = getDieRoll();
    var player2Roll = getDieRoll();
    
    console.log(player1Name + " rolled a " + player1Roll);
    console.log(player2Name + " rolled a " + player2Roll);

    if (player1Roll === player2Roll) {
        console.log("TIE!");
    } else if (player1Roll > player2Roll) {
        console.log(player1Name + " wins!");
    } else if (player2Roll > player1Roll) {
        console.log(player2Name + " wins!");
    } else {
        console.log("I can't tell who won. Something went wrong.");
    }
}

console.log("Let's play a game ... ");
playGame();

/*
var getDieRoll = function(){
    return Math.ceil(6 * Math.random());
}

var player1Name = process.argv[2];
var player2Name = process.argv[3];

function playGame(player1Name, player2Name){

    var player1Roll = getDieRoll();
    var player2Roll = getDieRoll();
    
    console.log(player1Name + " rolled a " + player1Roll);
    console.log(player2Name + " rolled a " + player2Roll);

    if (player1Roll === player2Roll) {
        console.log("TIE!");
    } else if (player1Roll > player2Roll) {
        console.log(player1Name + " wins!");
    } else if (player2Roll > player1Roll) {
        console.log(player2Name + " wins!");
    } else {
        console.log("I can't tell who won. Something went wrong.");
    }
}

console.log("Let's play a game ... ");
playGame(player1Name, player2Name);
*/
