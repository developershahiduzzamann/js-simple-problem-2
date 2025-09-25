function isLeepYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeepYear(2024);
// console.log(isLipi);

function isLeepYear2 (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 &&  year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isLeepYear2(2100);
const isLeap1 = isLeepYear2(2400);
console.log(isLeap);
console.log(isLeap1);
