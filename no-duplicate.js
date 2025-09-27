const biryanikhor = ['sabbir', 'topu', 'babu', 'tarik', 'sabbir', 'topu', 'tarik']
const numbers = [11, 24, 56, 77, 11, 24, 25, 77, 56];

function noDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniquueArray =noDuplicate(biryanikhor);
console.log(uniquueArray);