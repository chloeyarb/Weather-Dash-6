var searchFormEl = document.querySelector("#search-form");
var nameInputEl = document.querySelector("#city-name");
// var repoContainerEl = document.querySelector("#repos-container");
// var repoSearchTerm = document.querySelector("#repo-search-term");

var searchCity = function(event){
    event.preventDefault();
        
    var cityName = nameInputEl.value.trim();
    
    if (cityName) {
        getUserRepos(cityName);
            
        nameInputEl.value = "";
    } else {
        alert("please enter correct city");
    }
};

var getWeather = function(user) {
    //format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

    //make a rquest to the url
    fetch(apiUrl)
        .then(function(response){
            // request was successful
            if (response.ok) {
              response.json().then(function(data){
                displayRepos(data, user);
              });
            }else {
            alert("Error: GitHub User Not Found");
            }
        })
        .catch(function(error){
            // notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to GitHub");
        });
    

};