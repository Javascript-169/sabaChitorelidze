function saveData() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let RegUsers = new Array();

    RegUsers = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(RegUsers.some((v) => {
        return v.email == email && v.password == password
    })){
        alert("Login Successfull")
    }
    else {
        alert("Fail Login!")
    }
}