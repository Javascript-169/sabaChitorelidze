let children = ["Nika", "Zuka", "Misho", "Keti", "Tako", "Mari", "Guliko", "Ajela", "Vaso", "Saba"];

// for (let child of children) {
//     console.log(child);
// };

let person = {
    firstName: "Nika",
    lastName: "Gabelia",
    age: 15
};

for (let key in person) {
    console.log(key,person[key]);
};