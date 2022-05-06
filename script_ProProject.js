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
  temp.innerHTML = message;
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
=======
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <title>Weather App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="src/style.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,900;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/f3d1c7af36.js" crossorigin="anonymous"></script>

</head>
  <body>
    <div class="container">
      <div class="outer card" style="width: 600px">
        <div class="card-body">
          

          <form id="city-search-form">
            <input type="text" id="search-city" style="width: 400px" placeholder="I wonder what the weather's like in..." autofocus />
            <button type="submit" id="search-city-button"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button type="submit" id="current-location-button"> <i class="fa-solid fa-location-dot"></i> </i></button>
          </form">
          <br />
          <div class="inner" style="width: 600px"> 
          <h1>Anywhere, USA</h1>
           <today> <div class= "city-results" id ="current-date-time"> </div> </today>       
           <temp> <span class= "city-results" id ="nowTemp"> 54° </span> <button id= "imperial-button"> F </button> <span id="divider"> | </span> <button id="metric-button"> C </button> </span></temp>
           <nowEmoji> <div class= "city-results" id ="current-emoji"><i class="fa-solid fa-cloud-sun"></i></div> </nowEmoji>
           <summary>  <div class= "city-results" id ="weather-summary">  Feels like 54°. Cloudy with some sunshine.<br> Chance of rain 30%.</div> </summary>
            </p>;
          

<div class="container" id="forecast">
  <div class="row">
    <div class="col-2">
      Today
    </div>
    <div class="col-2">
      Tom
    </div>
    <div class="col-2">
      Sat
    </div>
    <div class="col-2">
      Sun
    </div>
    <div class="col-2">
      Mon
    </div>
    <div class="col-2">
      Tue
    </div>
  </div>
  <div class="row">
    <div class="col">
      60°/49°
    </div>
    <div class="col">
      54°/32°
    </div>
    <div class="col">
      56°/39°
    </div>
    <div class="col">
    58°/36°
    </div>
    <div class="col">
     58°/43°
    </div>
    <div class="col">
      64°/44°
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <i class="fa-solid fa-cloud-rain"></i>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-cloud-rain"></i>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-cloud-sun-rain"></i>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-cloud"></i>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-cloud-sun"></i>
    </div>
    <div class="col-2">
      <i class="fa-solid fa-sun"></i>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
    <script = src="src/script.js"></script>

  </body>
</html>
>>>>>>> f1543a2eec0abe1276e009393bd1bd540f683386
