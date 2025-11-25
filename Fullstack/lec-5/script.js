let inputBox = document.getElementById("inp");
let button = document.getElementById("btn");

async function getWeather() {
    let city = inputBox.value;

    let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
    let getData = await response.json();

    let { latitude, longitude } = getData.results[0];

    let response1 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
    let weatherData = await response1.json();

    // console.log(weatherData);

    for(let idx in weatherData.hourly.time){
        let time = weatherData.hourly.time[idx];
        let temp = weatherData.hourly.temperature_2m[idx];
        console.log(time + " : " + temp + "°C");
    }
}

button.addEventListener("click", getWeather);