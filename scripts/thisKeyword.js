let currentYear = 2024;

let person = {
    firstName: "Nika",
    lastName: "Chaduneli",
    birthYear: 1980,
    age: function ()  {return currentYear - this.birthYear}
}; 

// person.age = currentYear - person.birthYear;

console.log(person.age());