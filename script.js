"use strict"


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dfdf202c8emsh74e867fef15dae7p1b8474jsn9bf2f2822963',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getweather = () => {
    let city = document.getElementById('city').value;
    document.getElementById('city-name').innerHTML = city;
    if (city.length == 0) {
        alert("please enter the city");
        document.getElementById('temp-result').innerHTML = "";
        document.getElementById('humidity-result').innerHTML = "";
        document.getElementById('windspeed-result').innerHTML = "";
        return 0;
    }
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then((response) => {
            return response.json();
        }).then((result) => {
            document.getElementById('city').value = "";
            document.getElementById('temp-result').innerHTML = result.temp + "C";
            document.getElementById('humidity-result').innerHTML = " " + result.humidity + "%";
            document.getElementById('windspeed-result').innerHTML = " " + result.wind_speed + "Km/h";

        }).catch((error) => {
            document.getElementById('city-name').innerHTML = "city not found...";
            document.getElementById('temp-result').innerHTML = "";
            document.getElementById('humidity-result').innerHTML = "";
            document.getElementById('windspeed-result').innerHTML = "";
            document.getElementById('temp-heading').innerHTML = "";
            document.getElementById('humidity-heading').innerHTML = "";
            document.getElementById('wind-heading').innerHTML = "";
        });
}
getweather();