const placev = document.createElement('input')
placev.id = 'place';
document.getElementById('enter-place').appendChild(placev);

const units = document.getElementById('units').value;
const icon = document.getElementById('icon');

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

const convertData = (data) => {
  let tempd = ((data.main.temp_max + data.main.temp_min) / 2) - 273.15;
  let windd = Math.round(data.wind.speed * 100) / 100;
  const humd = Math.round(data.main.humidity * 100) / 100;
  const pre = data.main.pressure;
  if (units === '°F') {
    tempd = `${Math.round(((9 / 5) * tempd + 32) * 100) / 100} °F`;
    windd = `${Math.round(windd * 2.23694 * 100) / 100} miles/hour`;
  } else {
    tempd += ' °C';
    windd += ' meters/second';
  }
  return [tempd, windd, humd, pre];
};

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
  [temp.textContent, wind.textContent, hum.textContent, pre.textContent] = convertData(data);
};

const forecast = async (place, units) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`,
  ).then((response) => response.json()).then((res) => res).then((data) => displayData(data));
};

const startP = () => {
  icon.src = './giphy.gif';
  const place = document.getElementById('place').value;
  forecast(place, units);
};

const button = document.getElementById('search');
button.addEventListener('click', () => startP());
