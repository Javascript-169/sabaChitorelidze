// დავალება 1

function square(x) {
    let z = x * x;
    document.write(x + " კვადრატში ტოლია " + z);
}

square(4);


//დავალება 2

function fahrenheit(x) {
    return ` ${(x * 9/5) + 32}°F`;
  };

  let value = fahrenheit(1);

  console.log(value);


  //დავალება 3

let minRange = Number(prompt(`შეიყვანეთ მინიმალური დიაპაზონი`));
let maxRange = Number(prompt(`შეიყვანეთ მაქსიმალური დიაპაზონი`));
let resultRange = Number(prompt(`შეიყვანეთ რიცხვი`));

function range(minRange, maxRange, resultRange) {
    if (resultRange >= minRange && resultRange <= maxRange) {
        return `რიცხვი ${resultRange} არის დიაპაზონში`;
    } else {
        return `რიცხვი ${resultRange} არის დიაპაზონის გარეთ`;
    }
}

let result = range(minRange, maxRange, resultRange);

console.log(result);


//დავალება 4

let chooseYear = prompt(`Enter year`);

function checkYear() {
    if ((0 === chooseYear % 4) && (0 !== chooseYear % 100) || (0 == chooseYear % 400))
        return `აღნიშნული წელი ნაკიანია`;
    else {
        return `აღნიშნული წელი არ არის ნაკიანი`;
    }
}

let year = checkYear();

console.log(year);


//დავალება 5

let num1 = prompt("შეიყვანეთ რიცხვი");
let action = prompt ("შეიყვანეთ მოქმედება + - * /");
let num2 = prompt("შეიყვანეთ მეორე რიცხვი");

num1 = Number(num1);
num2 = Number(num2);


function calculator() {
    if (action === "+"){ 
    return num1 + num2;
    }else if (action === "-") {
      return  num1 - num2;
    }else if (action === "*") {
      return num1 * num2;
    }else if (action === "/") {
      return  num1 / num2;
    } else (action !== "+" || "-" || "*" && "/")
      return "დაფიქსრიდა შეცდომა";
};

let resultCalculator = calculator();

console.log(resultCalculator);