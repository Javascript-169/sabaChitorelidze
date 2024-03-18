let firstName = "tekla";

// ინდექსები აღნიშნავენ მასივში არსებული ელემენტების ადგილმდებარეობებს
let firstNames = ["giorgi", "tekla", "nika"]; // array

let shopingCard = [
    {
        itemType: "clothing",
        itemName: "T-Shirt",
        itemSize: "M",
        itemBrand: "Zara"
    },
    {
        itemType: "clothing",
        itemName: "Pants",
        itemSize: "L",
        itemBrand: "Zara"
    },
];

let person = {
    firstName: "nika", 
    lastName: "kopliani",
    age: 35,
    isMaried: true,
    children: [{
        firstName: "Nick",
        lastName: "kopliani",
        age: 7
    },
    {
        firstName: "Kate",
        lastName: "kopliani",
        age: 5
    } ]
} // object

// ობიექტში მონაცემების დამატება
person.address = "Tbilisi";
person["profession"] = "Programmer";

// ობიექტში არსებული მონაცემების განახლება (თავზე გადაწერა)
person.age = 40;
person["profession"] = "Web developer";

// ობიექტში არსებული მონაცემების წაშლა
delete person.age;
delete person["profession"];

console.log(person);