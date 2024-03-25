let num1 = prompt(`შეიყვანეთ რიცხვი`);
let action = prompt(`შეიყვანეთ მოქმედება + - * /`);
let num2 = prompt(`შეიყვანეთ მეორე რიცხვი`);

num1 = Number(num1);
num2 = Number(num2);

function calculator() {
    switch(action) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            console.log("დაფიქსირდა შეცდომა");
    }
}

let result = calculator();

console.log(result);