function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg

}
const numbers = [11, 34, 65, 66, 33, 62, 71];
const avg =  oddAverage(numbers);
console.log('average of the numbers:', avg);