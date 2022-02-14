var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city-name");
var weatherKey = "94b1447990dca3cca88ccca71f6b067f";
var getLatitude = document.getElementById("#lat").value;
var getLongitude = document.getElementById("#long").value;
var geoCodeApi = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + weatherKey;

var searchCity = function(event){
    event.preventDefault();
        
    var cityName = cityInputEl.value.trim();
    
    if (cityName) {
        getWeather(cityName);
            
        cityInputEl.value = "";
    } else {
        alert("please enter correct city");
    }
};

var getWeather = function(event) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + getLatitude + "&lon=" + getLongitude + "&exclude=hourly,daily&appid=" + weatherKey;

    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
              response.json().then(function(data){
                showWeather(data);
              });
            }else {
            alert("Weather not found!");
            }
        })
        .catch(function(error){
            alert("Cannot find weather");
        });
    

};

var showWeather = function(response){
    console.log(response);

};

searchFormEl.addEventListener("submit", searchCity);