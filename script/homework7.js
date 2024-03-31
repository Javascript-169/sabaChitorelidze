let testString = Number(prompt("enter string"));

function blankSringChecker() {
    if(testString === 0) {
        return "this string is blank";
    } else {
        return "This string is not blank"
    }
}

let result = blankSringChecker;

console.log(blankSringChecker());
