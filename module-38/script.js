
console.log('hello')
console.log('hello')
const timeout = setTimeout(() => {
    console.log('im out')
    clearTimeout(timeout)
},5000)
let count = 0
const interval = setInterval(() => {
    // const result = ++count
    console.log(++count);
    if(count > 10){
        clearInterval(interval)
        
    }
}, 100);
console.log('hello')
console.log('hello')

// let counter = 0;
// let timeout;
// let timer_on = 0;

// function timedCount() {
//   document.getElementById("demo").value = counter;
//   counter++;
//   timeout = setTimeout(timedCount, 1);
// }

// function startCount() {
//   if (!timer_on) {
//     timer_on = 1;
//     timedCount();
//   }
// }

// function stopCount() {
//   clearTimeout(timeout);
//   timer_on = 0;
// }
