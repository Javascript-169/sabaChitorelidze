let users = ["nika", "buba", "gaga", "soso", "zaza", "nina", "nana"];

users = users.map(user => {
    if (user === "gaga") {
        user = "GIGI";
    } else {
        user = user.toUpperCase();
    }

    return user;
});

// console.log(users);

let usersAtEvenIndexes = users.filter(user => {
    let index = users.indexOf(user) + 1

    if (index % 2 === 0) {
        return user;
    }
});

// console.log(usersAtEvenIndexes);

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator,currentValue);
    return accumulator + currentValue;
});

console.log(sum);