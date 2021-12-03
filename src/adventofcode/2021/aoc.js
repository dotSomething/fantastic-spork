const DATA = require('./data');

function SonarSweepMap(array) {
    let counter = 0;
    
    array.map((element, index) => {
        if(element > array[index -1]) {
            counter++;
        }
    })
    return counter;
}

console.log(SonarSweepMap(DATA.sonarDepths));
