let now = new Date();
let today = document.querySelector("today");

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
  let windMessage = `Wind Speed: ${getWind} m/h`;
  let wind = document.querySelector("#wind");
  let getFeels = Math.round(response.data.main.feels_like);
  let feelsMessage = `Feels Like: ${getFeels}°`;
  let feels = document.querySelector("#feels");

  let getCity = response.data.name;
  let cityMessage = `${getCity}`;
  let city = document.querySelector("#city");

  let iconElement = document.querySelector("#icon");
  temp.innerHTML = tempMessage;
  humidity.innerHTML = humidityMessage;
  description.innerHTML = descriptionMessage;
  wind.innerHTML = windMessage;
  city.innerHTML = cityMessage;
  feels.innerHTML = feelsMessage;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/10d@2x.png`
  );
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let hereButton = document.querySelector("#current-location-button");
hereButton.addEventListener("click", getCurrentPosition);

function showPositionWeather(response) {
  event.preventDefault();
  temp.innerHTML = yourWeather;

  let apiKey = "ac0f90b8c79b796b6603c9c33aef3d54";
  let units = "imperial";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let yourWeather = `${temperature}°`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showPositionWeather);
}
