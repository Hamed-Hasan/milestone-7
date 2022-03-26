
const displayLocalStorageCart = () => {
    const cart = getCart();
    for(const name in cart){
        displayProduct(name)
    }
}
const sendProduct = () => {
    const nameProduct = document.getElementById('product-name')
    const namePrice = document.getElementById('product-price')
    const name = nameProduct.value 
    const price = namePrice.value
    // if(!name || price){
    //     return
    // }

    displayProduct(name)
    displayPrice(price)
    addProductToCart(name,price)
    // addProductToPrice(price)
    nameProduct.value = ''
    namePrice.value = ''
}

const displayProduct = name => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}
const displayPrice = name => {
    const ul = document.getElementById('price')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }else{
        cartObj = {}
    }
    return cartObj
}

const addProductToCart = () => {
    const obj = {}
obj['item'] = 1
console.log(obj);
const a = getCart()
const b = getCart()
if(obj[b]){
    obj[b] = obj[b] + 1

}else{
    obj[b] = 1
}
const cartStringified = JSON.stringify(obj)
localStorage.setItem('obj',cartStringified)
}
console.log(obj);

displayLocalStorageCart()