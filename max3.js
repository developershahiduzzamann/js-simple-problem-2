const jim = 68;
const tim = 56;
const kim = 89;

if(jim > tim && jim > kim){
    console.log('jis is the boss');
}
else if (tim > jim && tim > kim){
    console.log('tim is the boss two');
}
else{
    console.log('kim is the boss 3');
}


function getNumber(x1, x2, x3){
     if(x1 > x2 && x1 > x3){
        return x1;
     }
     else if(x2 > x1 && x2 > x3){
        return x2;
     }
     else{
        return x3;
     }
}

const bigNum = getNumber(56, 78, 60);
console.log(bigNum); 