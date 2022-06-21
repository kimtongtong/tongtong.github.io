const API_KEY = "1612ca150a59a697baa79bf2b766a295";


//https://api.openweathermap.org/data/2.5/weather?lat=36.8877614&lon=128.7389187&appid=1612ca150a59a697baa79bf2b766a295//
//위치 좌표 주소 //

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.name; 
    city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);