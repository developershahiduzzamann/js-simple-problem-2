const products = [
    {name: 'shampu', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 400},
    {name: 'pant', price: 700},
]

function getProduct (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const total = getProduct(products);
console.log(total);