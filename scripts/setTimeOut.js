// function greetings() {
//     console.log("Hello, my fellow friend");
// }

// setTimeout(greetings, 3000);

// setInterval(() => {
//    console.log("this function will be executed many time"); 
// }, 1000);


function SayHello() {
    console.log("Hello");
}

let myInterval = setInterval(SayHello, 1000);

setTimeout(() => {
   clearInterval(myInterval); 
}, 5000);

