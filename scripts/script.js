let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
        .catch(() => alert('ქალაქი არ მოიძებნა'));
})

const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].description}`
}

console.log(fetch);