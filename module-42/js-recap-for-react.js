

// Six JavaScript Fundamentals that need to know

// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||
if (fatherName === 'Arnold' || season === 'rainy') {
    console.log('true')
} else if (fatherName === 'another') {
    console.log('false');
} else {
    console.log('nothing');
}

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 100;
numbers.push(100, 400, 300, 250)
const newNumbers = [...numbers, 99999]

console.log(newNumbers);
console.log(numbers);

// // for loop 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element)
}

// for of
for (const iterator of numbers) {
    console.log(iterator);
}

// for in 
for (const key in numbers) {
    const element = numbers[key];
    console.log(element)

}

// while loop 
let i = 0;
let text = "";

while (numbers[i]) {
    text += numbers[i];
    i++;
}
console.log(text);

// do loop 
let d = 0;
let tex = '';
do {
    tex += numbers[d]
    d++
} while (numbers[d]);
console.log(text)

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2
    return result
}
console.log(multiply(3, 4));

// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';
console.log(student.age) // direct by property
console.log(student['movies']) // access via property name string 
console.log(student[myVariable]) // access via property name in a variable

// ES6 template string, arrow function, spread operator
const students = {
    name: 'shakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = `My Name Is ${student.name} My Movies Is ${student.movies[0]}`
console.log(about);// 1. template string

// 2. arrow function
const getFiftyFive = () => 55
const addSixtyFive = num => num + 65
const isEven = x => x % 2 == 0
const addThree =  (x,y,z) => (x + y + z) * 10
const doMath = (num1, num2) => {
    const result = num1 + num2
    return result
}
console.log(getFiftyFive())
console.log(addSixtyFive(5))
console.log(isEven(20))
console.log(addThree(3,3,3))

// spread operator
const number = [89, 35, 98, 12];
const newNumber  = [...number]
const currentNumber = [...number, 6000]

number.push(99);
number.push(99);
number.push(99);

console.log(number)
console.log(newNumber)
console.log(currentNumber)

// Array methods map filter find forEach
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map 
const brand = products.map(product => product.brand)
console.log(brand)

const price = products.map(product => product.price)
console.log(price)

// filter 
const cheap = products.filter(product => product.price <= 5000)
console.log(cheap)

// find 
const cheaps = products.find(product => product.name.includes('n'))
console.log(cheaps)

// Array and object Destructuring, optional chaining

// 1. array destructuring
const num = [32,33]
const x = num[0]
const y = num[1]

const [x1, y1] = [42,64]
const [x11, y11] = num

console.log(x11, y11)
console.log(x1, y1)
console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first,second] = boxify(38,33)
console.log(first, second)

const studen = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'sharuk khan']
}
const [firsts, seconds] = studen.movies
console.log(firsts, seconds)

// object destructuring

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brands: 'garmin'
        }
    }
}

const {ide, languages} = employee
console.log(ide, languages)

const {address, drink} = employee.specification
console.log(address, drink);

// optional chaining
const {color, brands} = employee?.specification?.watch
console.log(color, brands);

// JSON, Fetch, keys, values, array add or remove using dots

const studentNew = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const stringifyd = JSON.stringify(studentNew)
console.log(stringifyd)

const parse = JSON.parse(stringifyd)
console.log(parse)

//2. fetch
// fetch('url')
    // .then(res => res.json())
    // .then(data => console.log(data));

// keys, values
    const keys = Object.keys(studentNew)
    const value = Object.values(studentNew)
    console.log(keys)
    console.log(value)

    // for 
const numb = [23, 54, 67, 87, 23, 78];
numb.forEach(num => console.log(num))
const divide = numb.map(num => num * 2)
console.log(numb)
console.log(divide)

// for of on array like object
// loop on an object using for in 

// add or remove from an array
const product = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
// copy products array and then add newProduct
const newProducts = [...product, newProduct]
console.log(newProducts)
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = product.filter(p => p.name !== 'phone')
console.log(remaining)

// truthy, false Ternary operator, shortcut and or

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy
let myVariables =  5;
if(myVariable){
    myVariables = myVariables * 1000
}else{
    myVariable = 0
}
console.log(myVariables)

let myMoney = 50;
// check negative or falsy anything
if(!myMoney){
    console.log('right')
}else{
    console.log('wrong')
}

const money = 500
let food;
if(money > 50){
    food = 'biryani'
}else{
    food = 'anything'
}
console.log(food)

// ternary 
let food1 = money > 200 ? 'cook' : 'water'
console.log(food1)

let drinks = (money > 100 && money > 50) ? 'best food' : 'bad food'
console.log(drinks)

// number to string conversion
const num1 = 500;
const numStr = num1 + ''
console.log(numStr)

// string to number
const input = '500';
const inputNum = +input
console.log(inputNum)

let isActive = true;
const showUser = () => console.log('displayUser')
const hideUser = () => console.log('hideUser')

isActive ? showUser() : hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is false then right side will be executed
isActive || hideUser()

//toggle boolean 
isActive = !isActive