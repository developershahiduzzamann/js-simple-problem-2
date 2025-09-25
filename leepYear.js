function isLeepYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeepYear(2024);
console.log(isLipi);