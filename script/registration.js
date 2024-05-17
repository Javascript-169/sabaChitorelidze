let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
  });
  const setError = (ele, msg) => {
    let box = ele.parentElement;
    let error = box.querySelector(".error");
  
    error.innerText = msg;
    box.classList.add("error");
    box.classList.remove("success");
  };
  const setSuccess = (ele) => {
    let box = ele.parentElement;
    let error = box.querySelector(".error");
  
    error.innerText = "";
    box.classList.add("success");
    box.classList.remove("error");
  };
  const mailFormat = (e) => {
    const re = /\w+@\w+.\w+/;
    return re.test(String(e).toLowerCase());
  };
  const passFormat = (p) => {
      const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
      return re.test(p);
  }
  const userFormat = (u) => {
      const re = /[^0-9]/;
      return re.test(u);
  }
 
  function validation() {
    let user = username.value.trim();
    let mail = email.value.trim();
    let pass1 = password.value.trim();
    let pass2 = psw.value.trim();
  
    localStorage.setItem("Username", user);
    localStorage.setItem("Email", mail);
    localStorage.setItem("Password", pass1);
    localStorage.setItem("Cpassword", pass2);
  
    if (user === "") {
      setError(username, "მომხმარებლის სახელი სავალდებულოა");
    } else if (!userFormat(user)) {
      setError(username, "მხოლოდ ციფრები არ არის დასაშვები");
    } else {
      setSuccess(username);
    }
    if (mail === "") {
      setError(email, "ელ ფოსტა სავალდებულოა");
    } else if (!mailFormat(mail)) {
      setError(email, "გთხოვთ შეიყვანოთ ვალიდური იმეილი");
    } else {
      setSuccess(email);
    }
    if (pass1 === "") {
      setError(password, "პაროლი სავალდებულოა");
    } else if (!passFormat(pass1)) {
      setError(password, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, რიცხვს, დიდი, პატარა ასოებით და ერთი სპეციალური სიმბოლო");
    } else {
      setSuccess(password);
    }
    if (pass2 === "") {
      setError(psw, "გთხოვთ დაადასტუროთ პაროლი");
    } else if (pass2 != pass1) {
      setError(psw, "პაროლი არ ემთხვევა");
    } else {
      setSuccess(psw);
    }
  }

  