function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(23, 7);
console.log(result);

function getString(sum1, sum2){
    if(typeof sum1 !== 'string'){
        return 'please provide a string'
    }
    else if(typeof sum2 !== 'string'){
        return 'please provide a string'
    }
    const str = sum1 + ' ' + sum2;
    return str
}
const rString1 = getString('Sabbir', 'Khan');
console.log(rString1);