// api_key = 'b863a920259d022cf48f60daf142113b'


const forecast = async(place,units='°C',lang='en')  => {
  await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=${lang}&appid=b863a920259d022cf48f60daf142113b`).then(function(response) {
    return response.json()
}).then(res => res).then((data) => displayData(data) );
}

// forecast('colombia')

const start = () => {
  const place = document.getElementById('place').value;
  const units = document.getElementById('units').value;
  const language = document.getElementById('language').value
  forecast(place, units, language);

}


// forecast(place,units,language)
displayData = (data) => {
  // console.log('Here');
  console.log(data.weather[0]);
  // console.log(place);
  // const data = forecast(place, units, language);
  const icon = document.getElementById('icon');
  const description = document.getElementById('description');
  description.textContent = data.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const wind = document.getElementById('wind');
  wind.textContent = data.wind.speed;
  const temp = document.getElementById('temp');
  temp.textContent = data.main.temp_max
}

