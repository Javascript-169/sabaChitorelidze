let capitals = ["Tbilisi", "Rome", "Madrid", "Berlin"];

let result = Array.isArray(capitals);

console.log(result);

let firstElement = capitals[0];
console.log(firstElement);
console.log(capitals.at(-1));

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "yellow"];
let o = ["th", "st", "nd", "rd"];

console.log("1" + o[1] + " choice is " + color[0]);

console.log("2" + o[2] + " choice is " + color[1]);

console.log("3" + o[3] + " choice is " + color[2]);


let stundet = {
    sakheli: "Giorgi",
    gvari: "Chitorelidze",
    profesia: "Fraud specialist",
    misamarti: "Tbilisi"
};
console.log(stundet);

stundet.age = 24;

delete stundet.profesia

stundet.sakheli = "Saba";

console.log(stundet);


