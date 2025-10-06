const prices = [2000, 5000, 6222, 5632, 4558, 4444,];
function getMin(numbers){
    let min = numbers [0];
    for(num of numbers){
        if(num < min){
            min = num
        }
    }
    return min
}
const min = getMin(prices);
console.log('min value is', min);