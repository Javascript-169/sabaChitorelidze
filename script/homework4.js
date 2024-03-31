
let Password = prompt("შეიყვანეთ პაროლი");

function checkPassword() {
    if (!isNaN(Number(Password))){
        alert("პაროლი უვარგისია");
    }
    else if (Password.length < 3) {
        alert("პაროლი უნდა შედგებოდეს მინ 3 სიმბოლოსგან");
    } else if (Password.length >= 3 && Password.length <= 6) {
        alert("პაროლი სუსტია");
    } else if (Password.length > 6 && Password.length <= 8) {
        alert("პაროლი მისაღებია");
    } else if (Password.length > 8 && Password.length <= 16) {
        alert("პაროლი ძლიერია");
    } 
     else {
        alert("დაფიქსირდა შეცდომა");
    } 
}

checkPassword();