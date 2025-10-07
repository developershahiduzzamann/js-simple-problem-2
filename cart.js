const products = [
    {name: 'shampu', price: 300 , quantity: 2},
    {name: 'chiruni', price: 100, quantity: 3},
    {name: 'shirt', price: 400, quantity: 5},
    {name: 'pant', price: 700 , quantity: 6},
]

function getcCart(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost
    }
    return total;
}
const totalCost = getcCart(products);
console.log(totalCost);