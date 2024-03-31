let word = prompt("Enter a word");

function firstLetter() {
    return word.charAt(0).toUpperCase() + word.slice(1);
};


alert(firstLetter());