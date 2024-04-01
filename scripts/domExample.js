let paragraph1Value = document.getElementById("paragraph1");
// paragraph1Value.textContent = "This data has been changed";
// paragraph1Value.textContent = `<p style="color: red;"> This data has been changed </p>`

// console.log(`Here comes data from html ${paragraph1Value}`);

let div1Value = document.getElementsByClassName("div1");

// console.log(div1Value[0].textContent);

let h3Value = document.getElementsByTagName("h3");

console.log(h3Value[0].textContent);

let querySelector = document.querySelector("#paragraph1");
console.log(querySelector.innerHTML);

let querySelectorAll = document.querySelectorAll(".div1")

console.log(querySelectorAll[1].textContent)