// @ts-check

// x = 5;

// console.log(x)

// var x;


// let y;
// y = 2;

// {
//     {
//     console.log(y, "from block");
//     }
// }

sayHello();


function sayHello() {
    console.log("Hi from hoisted function");
    welcomePeople();
    function welcomePeople() {
        console.log("Nice to meet you ya'll");
    }
}