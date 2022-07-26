let product = []
let total = 0

function add(product,price) {
    console.log(product,price);
    product.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = 'pagar $${total}'
}

function pay() {
    window.alert(products.join(", |n"));
}