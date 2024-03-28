function higherOrderFunction(func) {
    func();
}

function sayHello() {
    console.log("Hello!");   
}

// higherOrderFunction(sayHello);

function higherOrderFunction() {
    return function() {
        console.log(`Greetings, from the returned function!`);
    };
}

const returnFunction = higherOrderFunction();
returnFunction();