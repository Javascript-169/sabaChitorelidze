function saveData() {
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);

    let RegUsers = new Array();
    RegUsers = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(RegUsers.some((v) => {
        return  v.email == email
    })) {
        alert("You are already registered")
    }
    else {
        RegUsers.push({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users", JSON.stringify(RegUsers));
    }
}