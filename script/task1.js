//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let people = ["Saba", "Luka", "Tako", "Keti", "Lali", "Lela", "Giorgi", "Lika","Nanuka", "Levani"];

for (let i = 2; i < people.length; i += 3) {
    console.log(people[i]);
}

