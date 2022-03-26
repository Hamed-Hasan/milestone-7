
// 39-1 Module Overview, BOM vs DOM, Browser API

// 39-2 Browser alert, confirm, prompt with examples

const conFirm = () => {
    const ques = confirm('are go out')
    console.log(ques);
    if(ques == true){
        console.log('we agree with you...');
    }else{
        console.log('go head !!!');
    }
}

// prompt 
const proMpt = () => {
  const reply =  prompt('are you go...')
  if(reply){
      console.log(reply);
  }
}

// 39-3 Location, URL parts, query string, href, hash, assign, reload


// 39-4 History api to navigate back, forward, go, history length

// 39-5 (advanced) Cookies, dev tool application tab, get cookie value
// document.cookie.split('; ').find(c => c.includes('PREF=f6=80&tz=Asia.Riyadh')).split('=')
const displayLocalStorageCart = () => {
    const cart = getCart();
    for(const name in cart){
        displayProduct(name)
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value 
    if(!name){
        return
    }

    displayProduct(name)
    addProductToCart(name)
    nameField.value = ''
}
const displayProduct = name => {
    const ul = document.getElementById('products')
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

const addProductToCart = name => {
    const cart = getCart()
    if(cart[name]){
        cart[name] = cart[name] + 1
    }else{
        cart[name] = 1
    }

    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}
const placeOrder = () => {
    document.getElementById('products').textContent = ''
    localStorage.removeItem('cart')
}
displayLocalStorageCart()

// geo location 

// function getLocation() {
//     if (navigator.geolocation) {
//         console.log(navigator.geolocation.getCurrentPosition(showPosition));
//         } else {
//        console.log('not support');
//     }
//     }
//     getLocation()
//     function showPosition(position) {
//         // x.innerHTML = "Latitude: " + position.coords.latitude +
//         // "<br>Longitude: " + position.coords.longitude;
//         console.log(position.coords.latitude + position.coords.longitude);
//     }
//     showPosition()