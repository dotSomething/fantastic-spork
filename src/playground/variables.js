var x = 3, 
    y = 2.5;

var z = '3';
var result = x > y;

var writeGreetings = function(name) {
    var message = "Hello," + name;
    console.log(message);
}

var answer = parseInt(z) + y;

writeGreetings("Scott");
writeGreetings("Berserker");

console.log(result);
console.log(y + ' is a ' + typeof y);
console.log(z + ' is a ' + typeof z);
console.log(answer + ' is a ' + typeof answer);
console.log('Console is a ' + typeof console);
console.log('Console is a ' + typeof console.log);
