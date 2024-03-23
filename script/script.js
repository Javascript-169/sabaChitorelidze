function square(x) {
    let z = x * x;
    document.write(x + " კვადრატში ტოლია " + z);
}

square(4);


function fahrenheit(x) {
    return ` ${(x * 9/5) + 32}°F`;
  };

  let value = fahrenheit(1);

  console.log(value);


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




