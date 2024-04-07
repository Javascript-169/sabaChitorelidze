let text = document.querySelector(".RedClick");
let redText = "Pink";

let text2 = document.querySelector(".BlueClick");
let blueText = "brown"

let text3 = document.querySelector(".GreenClick");
let greenText = "Black"


function Red() {
    text.style.color = redText;
    text.textContent = redText;
};

function Blue() {
    text2.style.color = blueText;
    text2.textContent = blueText;
}

function Green() {
    text3.style.color = greenText;
    text3.textContent = greenText;
}

