// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

let proposal = prompt("Enter a sentence");
let word = proposal.split(" ");
let longestWord = "";

for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length){
        longestWord = word[i];
    }
};
alert(`The longest word is ${longestWord}`);

