let special = document.getElementById("special");
let alertInfo = document.querySelectorAll(".alert");
let alertStop = document.querySelector(".stop");
let alertGo = document.querySelector(".go");

window.addEventListener("DOMContentLoaded", () => {
    special.style.backgroundColor = "Yellow";
    alertInfo.forEach((span) => {
        span.style.border = "1px solid gray";
    })
    alertStop.style.backgroundColor = "red";
    alertGo.style.backgroundColor = "green";
});