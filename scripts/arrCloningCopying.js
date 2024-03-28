const users = ["Anna", "Tekle", "Nia", "Irakli", "Eka"];

const cloneUsers = [...users];
cloneUsers.pop()

const cloneUsersV2 = JSON.parse(JSON.stringify(users));

const cloneUsersV3 = users;

// cloneUsersV3.pop();
// console.log(users);

let newArr = users.slice();
newArr.pop()
console.log(newArr, users);