

const searchInput = document.querySelector('#search');
searchInput.addEventListener('focus', (e) => {
    let searchIcon = document.getElementById("searchLoop");
    let arriwIcon = document.getElementById("arrow");
    e.target.style.background = "#fff";
    e.target.style.color = "#717070";
    e.target.style.transition = "0.5s";
    e.target.style.padding = "12px 4px 12px 50px";
    e.target.style.backgroundPosition = "10px";
    searchIcon.style.display = "none";
    arriwIcon.style.display = "block"
},
true
);

searchInput.addEventListener(
    "blur",
    (e) => {
        let searchIcon = document.getElementById("searchLoop");
        let arriwIcon = document.getElementById("arrow");
        e.target.style.background = "";
        searchIcon.style.display = "block"
        arriwIcon.style.display = "none"
    },
    true
);



