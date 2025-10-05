const heights = [66, 35, 77, 67, 64, 78, 99];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is', max)