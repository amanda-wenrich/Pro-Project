<<<<<<< HEAD
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

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", displayCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let message = `${temperature}°`;
  let temp = document.querySelector("#nowTemp");
  let iconElement= (#current-emoji);
  temp.innerHTML = message;
  iconElement.setAttribute("src," `http://openweathermap.org/img/wn/10d@2x.png`)
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let hereButton = document.querySelector("#current-location-button");
hereButton.addEventListener("click", getCurrentPosition);

function showPositionWeather(response) {
  response.preventDefault();
  temp.innerHTML = yourWeather;

  let apiKey = "ac0f90b8c79b796b6603c9c33aef3d54";
  let units = "imperial";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let yourWeather = `${temperature}°`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;


  axios.get(apiUrl).then(showPositionWeather);
}
