//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

let text = "";

for (let index = 1; index <= 100; index++) {
    text += "<br>" +  index;
    if(index % 3 === 0 && index % 5 === 0) {
        text += " FizzBuzz";
    } else if(index % 3 === 0){
        text +=  " Fizz";
    } else if(index % 5 === 0) {
        text += " Buzz";
    }
}

document.getElementById("demo").innerHTML = text;