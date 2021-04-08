// api_key = 'b863a920259d022cf48f60daf142113b'


const forecast = async(place,units)  => {
  console.log(units);
  await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`).then(function(response) {
    return response.json()
}).then(res => res).then((data) => displayData(data) );
}

// forecast('colombia')
const place = document.getElementById('place').value;
const units = document.getElementById('units').value;
const start = () => {
  forecast(place, units);

}


// forecast(place,units,language)
displayData = (data) => {
  const icon = document.getElementById('icon');
  const description = document.getElementById('description');
  description.textContent = data.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const temp = document.getElementById('temp');
  const wind = document.getElementById('wind');
  const hum = document.getElementById('hum');
  const results = convertData (data);
  temp.textContent = results[0];
  wind.textContent = results[1];
  hum.textContent = results[2];
}

const convertData = (data) => {
  let tempd = Math.round(100*(((data.main.temp_max + data.main.temp_min)/2) - 273.15))/100;
  let windd = Math.round(data.wind.speed*100)/100;
  let humd = Math.round(data.main.humidity*100)/100;
  console.log(humd)
  if(units == '°F'){
    tempd = ((9/5)*tempd + 32) + ' °F';
    windd = Math.round(windd*2.23694*100)/100 + ' miles/hour'
  }
  else {
    tempd = tempd + ' °C';
    windd = windd + ' meters/second';
  }
  return [tempd, windd, humd];
}
