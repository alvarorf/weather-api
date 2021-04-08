// api_key = 'b863a920259d022cf48f60daf142113b'
giphy_api = 'ptiyeBRvUYFoZFlR88Od8CW8EwpAbWXu'



// forecast('colombia')

const start = () => {
  const place = document.getElementById('place').value;
  const units = document.getElementById('units').value;
  const icon = document.getElementById('icon');
  icon.src= './giphy.gif'
  forecast(place, units);

}

const forecast = async(place,units)  => {
  await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`).then(function(response) {
    return response.json()
}).then(res => res).then((data) => displayData(data) );
}


// forecast(place,units,language)
const displayData = (data) => {
  const giphy = document.getElementById('giphy');

  const icon = document.getElementById('icon');
  const description = document.getElementById('description');
  description.textContent = data.weather[0].description;
  getGiphy(description, giphy);
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const temp = document.getElementById('temp');
  const wind = document.getElementById('wind');
  const hum = document.getElementById('hum');
  const pre = document.getElementById('pre');
  const results = convertData (data);
  temp.textContent = results[0];
  wind.textContent = results[1];
  hum.textContent = results[2];
  pre.textContent = results[3];
}

const convertData = (data) => {
  let tempd = Math.round(100*(((data.main.temp_max + data.main.temp_min)/2) - 273.15))/100;
  let windd = Math.round(data.wind.speed*100)/100;
  let humd = Math.round(data.main.humidity*100)/100;
  let pre = Math.round(data.main.grnd_level*100)/100
  if(units == '°F'){
    tempd = ((9/5)*tempd + 32) + ' °F';
    windd = Math.round(windd*2.23694*100)/100 + ' miles/hour'
  }
  else {
    tempd = tempd + ' °C';
    windd = windd + ' meters/second';
  }
  return [tempd, windd, humd, pre];
}

const getGiphy = async (search, giphy) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2EwOKoQXnNF8ez8G3i67obeO2o5TT7EN&s=${search}`, { mode: 'cors' });
    const weatherImgData = await response.json();
    giphy.src = weatherImgData.data.images.original.url;
    giphy.style.borderStyle = 'none';
  } catch (error) {
    giphy.src = '#';
  }
};
