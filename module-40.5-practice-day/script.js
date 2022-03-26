// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 

// setTimeout(() => {
//     console.log('hello world');
// },3500)

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

// const sumPromt = prompt('type your number')
// alert(parseInt(sumPromt) + 200)

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

// const confirmLocation = confirm('are you sure will you display href location')
// if(confirmLocation){
//     console.log(location.href)
// }else{
//     console.log('bad decide')
// }

// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

// cookies is a user information collection cookies are browsing internet save information and user use same website and go to another website and user return to same website and collecd user information. the cookies are make 1994 sinc natescape nagetive browser they are some difference cookies.
// web cookies browser cookies  internet cookies
// list of coockies 
// Permanent cookies. ... save coockies in browser
// First-party cookies. ... 
// Third-party cookies. ... save are sale for adverdise
// Flash cookies. ...
// Zombie cookies.

// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

// localStorage and sessionStorage difference both are save web browser data 
// localStorage data size 10 mega
// sessionStorage data size 5 mega
// when user use browser first time and every time show data sessionStorage but not save when user refresh browser remove data from browser 
// when user use browser every time refresh browser not remove data from localStorage until user remove 
// [হোম ওয়ার্ক] 

// ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 
// javascript code does work three difference
// local javascript file run code in tarminal using: node and file name
// external javascript file run code console and live server 
// online any code editor

// ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 
// step 1
console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');

// step 2
function printMe() {
    console.log('print me');
  }
  
  setTimeout(printMe, 2000);
function f1() {
    // Some code
    console.log('f1');
  }
  function f2() {
    f1();
    console.log('f2');
  }
  function f3() {
    f2();
    console.log('f3');
  }
  f3();
 
//   step 3
  function printMe() {
    console.log('print me');
  }
  
  function test() {
    console.log('test');
  }
  
  setTimeout(printMe, 2000);
  test();

//   step 4
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();

// step 5 
const promise = new Promise((resolve) =>
        resolve('I am a resolved promise')
)
promise.then(result => console.log(result))

// step 6
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))
    
    f2();
}

main();
// step 7

function f1() {
    console.log('f1');
   }
   
   function f2() { 
       console.log('f2');
   }
   
   function f3() { 
       console.log('f3');
   }
   
   function main() {
     console.log('main');
   
     setTimeout(f1, 50);
     setTimeout(f3, 30);
   
     new Promise((resolve, reject) =>
       resolve('I am a Promise, right after f1 and f3! Really?')
     ).then(resolve => console.log(resolve));
       
     new Promise((resolve, reject) =>
       resolve('I am a Promise after Promise!')
     ).then(resolve => console.log(resolve));
   
     f2();
   }
   
   main();
// ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 

// [মাস্ট করতেই হবে]

// ১১. stackoverflow নামে একটা ওয়েবসাইট আছে। সেখানে গিয়ে একাউণ্ট খুলবে। এবং মিনিমাম ৩০ মিনিট সেখানে স্পেন্ড করবে। দেখবে কিভাবে কি উত্তর দেয়। 

// [অপশনাল]

// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

// const displayLocalStorageCart = () => {
//     const cart = getCart();
//     for(const name in cart){
//         displayProduct(name)
//     }
// }

const sendProduct = () => {
    const nameProduct = document.getElementById('product-name')
    const namePrice = document.getElementById('product-price')
    const name = nameProduct.value 
    const price = namePrice.value
    if(!name || price){
        return
    }

    displayProduct(name)
    displayPrice(price)
    addProductToCart(name)
    addProductToPrice(price)
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

const getPrice = () => {
    const price = localStorage.getItem('price')
    let cartObj;
    if(price){
        cartObj = JSON.parse(price)
    }else{
        cartObj = {}
    }
    return cartObj
}


const addProductToPrice = name => {
    const price = getPrice()
    if(price[name]){
        price[name] = price[name] + 1
    }else{
        price[name] = 1
    }

    const cartStringified = JSON.stringify(price)
    localStorage.setItem('price',cartStringified)
}
// const placeOrder = () => {
//     document.getElementById('products').textContent = ''
//     localStorage.removeItem('cart')
// }
// displayLocalStorageCart()