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
console.log(isLeap);