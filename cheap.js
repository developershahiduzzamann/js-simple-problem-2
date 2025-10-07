const phones =[
    {name: 'Samsung', price: 20000, camera: '13mp', color: 'black'},
    {name: 'Iphone', price: 30000, camera: '13mp', color: 'black'},
    {name: 'Realme', price: 40000, camera: '13mp', color: 'black'},
    {name: 'Walton', price: 50000, camera: '13mp', color: 'black'},
    {name: 'Oppo', price: 60000, camera: '13mp', color: 'black'},
    {name: 'HTC', price: 70000, camera: '13mp', color: 'black'},
];

function getPhone(phones){
    const min = phones [0];
    for(const Phone of phones){
        if(Phone < min){
            min = Phone;
        }
    }
    return min;
}
const cheap = getPhone(phones);
console.log(cheap);