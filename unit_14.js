let out = document.querySelector('.out');
let wrap = document.querySelector('.wrap');
let select = document.querySelector('.select');
let searchInp = document.querySelector('.search');

let city = 'London,uk';
let background = '';
select.innerHTML = selectItem();
getWeather();

function getWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec8c823c6d48a8074d5d7c09ed5be3b5`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
      console.log(data);
      out.innerHTML = showWeather(data);
      
  }) 

  .catch(function () {
    out.innerHTML = 'This city not found';
      city = 'London';
      getWeather();
  });
}

function selectItem() {
  return `
    <option value="London,uk">London,uk</option>
    <option value="New York">New York</option>
    <option value="Kiev">Kiev</option>
    <option value="Washington">Washington</option>
    <option value="Cape Town">Cape Town</option>
    <option value="Venice">Venice</option>
  `
}

function showWeather(item) {
  if (item.weather[0]['description'] == 'smoke' || item.weather[0]['description'] == 'mist') {
    background = './img/fog.jpg';
  } else if (item.weather[0]['description'] == 'scattered clouds' || item.weather[0]['description'] == 'broken clouds')  {
    background = './img/scattered-clouds.jpg';
  } else if (item.weather[0]['description'] == 'few clouds')  {
    background = './img/few-clouds.jpg';
  } else if (item.weather[0]['description'] == 'overcast clouds')  {
    background = './img/overcast-clouds.jpg';
  } else if (item.weather[0]['description'] == 'clear sky') {
    background = './img/clear.jpg';
  } else if (item.weather[0]['description'] == 'moderate rain' || item.weather[0]['description'] == 'light rain' || item.weather[0]['description'] == 'drizzle' || item.weather[0]['description'] == 'light intensity shower rain') {
    background = './img/rain.jpg';
  } else if (item.weather[0]['description'] == 'thunderstorm with rain') {
    background = './img/thunderstorm-with-rain.jpg';
  } else {
    background = './img/fog.jpg';
  }
  return `
    <div class="test">
      <img class="card__img" src="${background}" alt="">
      <div class="out__wrap">
        <div class="card">
            <div class="card__heading card__mb">
              <div class="card__city">${item.name}</div>
            </div>
            <div class="card__heading">
              <p class="card__сlouds">${item.weather[0]['description']}</p>
              <img class="card__img-icon" src="https://openweathermap.org/img/wn/${item.weather[0]['icon']}@2x.png">
            </div>
            <div class="card__heading">
              <p class="card__degrees">${Math.round(item.main.temp - 273) + '&deg'}</p>
            </div>
            <div class="card__heading">
              <p class="card__сlouds">Day</p>
              <p class="card__degrees">${Math.round(item.main.temp_max - 273) + '&deg'}</p>
            </div>
            <div class="card__heading">
              <p class="card__сlouds">Night</p>
              <p class="card__degrees">${Math.round(item.main.temp_min - 273) + '&deg'}</p>
            </div>
            <div class="card__heading">
              <p class="card__text">Humidity</p>
              <p class="card__degrees">${item.main.humidity + '%'}</p>
            </div> 
            <div class="card__heading">
              <p class="card__text">Pressure</p>
              <p class="card__сlouds">${item.main.pressure}</p>
            </div> 
            <p class="card__сlouds">${item.wind.deg}</p>
            <div class="card__heading">
              <p class="card__text"> Wind Speed</p>
              <p class="card__сlouds">${item.wind.speed}</p>
            </div>
        </div>
      </div>
    </div>
  `
}

function f1() {
  city = select.value;
  getWeather()
}
select.onchange = f1;

searchInp.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
      let value = searchInp.value;
      if(!value) return false;
      city = value;
      getWeather();
      searchInp.value = ''
  }
})





 





  

  

 


  
