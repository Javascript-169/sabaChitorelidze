function loginChecker() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let res = document.querySelector(".res");

    const correctUsername = "admin";
    const correctPassword = "admin";

    if (correctUsername === username.value && correctPassword === password.value) {
        res.innerHTML = `<p style="color: green;">Login Success!</p>`
    } else {
        res.innerHTML = `<p style="color: red;">Login Fail!</p>`
    }
}