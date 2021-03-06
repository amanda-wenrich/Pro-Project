let now = new Date();
let today = document.querySelector("#current-date-time");

let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
today.innerHTML = `${day}, ${month} ${date}, ${year} @ ${hours}:${minutes} ET`;

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let displayedCity = document.querySelector("h1");
  displayedCity.innerHTML = cityInput.value;

  let apiKey = "ac0f90b8c79b796b6603c9c33aef3d54";
  let units = "imperial";
  let city = document.querySelector("#search-city").value.trim();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
<div class="col-2">
  <div class="forecast-date">${formatDay(forecastDay.dt)}</div>
  <img 
    src="http://openweathermap.org/img/wn/${
      forecastDay.weather[0].icon
    }@2x.png" 
    alt="weather icon" 
    width="36"
  />
  <div class="forecast-temps">
    <span class="high-temps"> ${Math.round(forecastDay.temp.max)}° </span>
    <span class="low-temps"> ${Math.round(forecastDay.temp.min)}° </span> 
  </div>
</div>
`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "ac0f90b8c79b796b6603c9c33aef3d54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", displayCity);

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempMessage = `${temperature}°`;
  let temp = document.querySelector("#nowTemp");
  let getHumidity = Math.round(response.data.main.humidity);
  let humidityMessage = `Humidity: ${getHumidity}%`;
  let humidity = document.querySelector("#humidity");
  let getDescription = response.data.weather[0].description;
  let descriptionMessage = `Condition: ${getDescription}`;
  let description = document.querySelector("#description");
  let getWind = Math.round(response.data.wind.speed);
  let windMessage = `Wind Speed: ${getWind} MPH`;
  let wind = document.querySelector("#wind");
  let getFeels = Math.round(response.data.main.feels_like);
  let feelsMessage = `Feels Like: ${getFeels}°`;
  let feels = document.querySelector("#feels");
  let getCityName = response.data.name;
  let cityNameMessage = `${getCityName}`;
  let cityName = document.querySelector("#cityName");
  let iconElement = document.querySelector("#icon");

  temp.innerHTML = tempMessage;
  humidity.innerHTML = humidityMessage;
  description.innerHTML = descriptionMessage;
  wind.innerHTML = windMessage;
  cityName.innerHTML = cityNameMessage;
  feels.innerHTML = feelsMessage;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}
