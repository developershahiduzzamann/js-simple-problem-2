function oddAverage(numbers){
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number);
        }
    }
}
const numbers = [11, 34, 65, 66, 33, 62, 71];
const avg =  oddAverage(numbers);
console.log('average of the numbers:', avg);