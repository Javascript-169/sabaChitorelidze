//შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.

let age = prompt("შიყვანეთ თქვენი ასაკი");

function ageChecker() {
    if (age >= 18) {
        alert("თქვენი შეგიძლიათ ხმის მიცემა!");
    }else {
        alert("თქვენ ხართ არასრულწლოვანი.ხმის მიცემას ვერ შეძლებთ!")
    }
};

ageChecker();