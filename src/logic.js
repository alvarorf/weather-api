/* eslint-disable import/no-cycle */
import * as dom from './dom';
/* eslint-enable import/no-cycle */
const forecast = async (place, units) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`,
  ).then(
    (response) => response.json(),
  ).then((res) => res).then((data) => dom.displayData(data, units));
};

const convertData = (data, units) => {
  let tempd = ((data.main.temp_max + data.main.temp_min) / 2);
  let windd = Math.round(data.wind.speed * 100) / 100;
  const humd = Math.round(data.main.humidity * 100) / 100;
  const pre = data.main.pressure;
  if (units === 'metric') {
    tempd += ' °C';
    windd += ' meters/second';
  } else {
    tempd += ' °F';
    windd += ' miles/hour';
  }

  return [tempd, windd, humd, pre];
};

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

export { forecast, convertData, getGiphy };
