const search = document.querySelector("#searchBtn")
const input = document.querySelector("#searchBox")
const history = document.querySelector("#historyList")
const city = document.querySelector("#cityValue")
const temp = document.querySelector("#temperature")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#windSpeed")
const pressure = document.querySelector("#pressure")
const precipitation = document.querySelector("#precipitation")

let cityNameList = []

search.addEventListener("click", () => {
    let cityName = input.value;
    if (cityName === ""){
        alert("Please enter a city name");
        return;
    }
    cityNameList.push(cityName);
    localStorage.setItem("cityNameList", JSON.stringify(cityNameList));
    cityNameList = JSON.parse(localStorage.getItem("cityNameList"));
    // console.log(cityNameList);
    apiCall(cityName);
    historyList(cityName);
    input.value = "";
})

function historyList(cityName){
    const listItem = document.createElement("div");
    listItem.setAttribute("class", "listItem");
    listItem.innerHTML = cityName;
    history.appendChild(listItem);
}

function apiCall(cityName){
    api = "http://api.weatherapi.com/v1/current.json?key=5a2e90b65af04c8e9d682732262402&q=city&aqi=no"
    fetch(api.replace("city",cityName))
    .then(res => res.json())
    .then(data => {

        city.innerHTML = cityName;
        temp.innerHTML = data.current.temp_c + "°C";
        humidity.innerHTML = data.current.humidity + "%";
        windSpeed.innerHTML = data.current.wind_kph + " kph";
        pressure.innerHTML = data.current.pressure_mb + " mb";
        precipitation.innerHTML = data.current.precip_mm + " mm";
        
    })
    .catch(err => console.error(err));
}
