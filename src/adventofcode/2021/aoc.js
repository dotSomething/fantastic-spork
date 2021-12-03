const DATA = require('./data');

function SonarSweepMap(array) {
    let counter = 0;

    array.map((element, index) => {
        if (element > array[index - 1]) {
            counter++;
        }
    })
    return counter;
}

function Dive(array) {
    let horizontal = 0;
    let vertical = 0;
    const { directions, values } = DATA.coordinates[0];

    for (let index = 0; index < directions.length; index++) {
        
        if (directions[index] === 'x') {
            horizontal = values[index] + horizontal;
        }
        if (directions[index] === 'a') {
            vertical = values[index] + vertical;
        }
        if (directions[index] === 's') {
            vertical = vertical - values[index] ;
        }
    }

    return horizontal * vertical;

}

console.log(Dive(DATA.coordinates));
