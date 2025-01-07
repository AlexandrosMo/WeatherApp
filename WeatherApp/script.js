const fakeWeatherData = {
    "Athnes": { temp:"15C", condition: "Cloudy",humidity:"72%"},
    "New York": { temp:"10C", condition: "rainy",humidity:"100%"},
    "Berlin": { temp:"15C", condition: "Cloudy",humidity:"80%"},
    "Amsterdam": { temp:"0C", condition: "Cloudy",humidity:"90%"},
    "Thessaloniki": { temp:"-2C", condition: "Rainy",humidity:"100%"}
};

document.getElementById("get-weather").addEventListener("click",()=>{
    const city = document.getElementById("city-input").value;
    const weather = fakeWeatherData[city];

    if (weather){
        document.getElementById("weather-result").classList.remove("hidden");
        document.getElementById("city-name").innerText = city;
        document.getElementById("tempature").innerText = `Tempatur: ${weather.temp}`;
        document.getElementById("condition").innerText = `Condition: ${weather.condition}`;
        document.getElementById ("humidity").innerText = `Humidity : ${weather.humidity}`;
    }else {
            alert("city not found. try another one.");
    }  
});