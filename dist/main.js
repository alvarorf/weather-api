/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const place = document.getElementById('place').value;
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
  let tempd = Math.round(100 * (((data.main.temp_max + data.main.temp_min) / 2) - 273.15)) / 100;
  let windd = Math.round(data.wind.speed * 100) / 100;
  const humd = Math.round(data.main.humidity * 100) / 100;
  const pre = data.main.pressure;
  if (units === '°F') {
    tempd = `${(9 / 5) * tempd + 32} °F`;
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
  const results = convertData(data);
  [temp.textContent, wind.textContent, hum.textContent, pre.textContent] = results;
};

const forecast = async (place, units) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`,
  ).then((response) => response.json()).then((res) => res).then((data) => displayData(data));
};

const startP = () => {
  icon.src = './giphy.gif';
  forecast(place, units);
};

const button = document.getElementById('search');
button.addEventListener('click', () => startP());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUhBQXVILE9BQU8sSUFBSSxlQUFlO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsZUFBZSx3Q0FBd0M7QUFDdkQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELE1BQU0sU0FBUyxNQUFNO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2UnKS52YWx1ZTtcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJykudmFsdWU7XG5jb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcblxuY29uc3QgZ2V0R2lwaHkgPSBhc3luYyAoc2VhcmNoLCBnaXBoeSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PTJFd09Lb1FYbk5GOGV6OEczaTY3b2JlTzJvNVRUN0VOJnM9JHtzZWFyY2h9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3Qgd2VhdGhlckltZ0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZ2lwaHkuc3JjID0gd2VhdGhlckltZ0RhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgIGdpcGh5LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdpcGh5LnNyYyA9ICcjJztcbiAgfVxufTtcblxuY29uc3QgY29udmVydERhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgdGVtcGQgPSBNYXRoLnJvdW5kKDEwMCAqICgoKGRhdGEubWFpbi50ZW1wX21heCArIGRhdGEubWFpbi50ZW1wX21pbikgLyAyKSAtIDI3My4xNSkpIC8gMTAwO1xuICBsZXQgd2luZGQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCAqIDEwMCkgLyAxMDA7XG4gIGNvbnN0IGh1bWQgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSAqIDEwMCkgLyAxMDA7XG4gIGNvbnN0IHByZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcbiAgaWYgKHVuaXRzID09PSAnwrBGJykge1xuICAgIHRlbXBkID0gYCR7KDkgLyA1KSAqIHRlbXBkICsgMzJ9IMKwRmA7XG4gICAgd2luZGQgPSBgJHtNYXRoLnJvdW5kKHdpbmRkICogMi4yMzY5NCAqIDEwMCkgLyAxMDB9IG1pbGVzL2hvdXJgO1xuICB9IGVsc2Uge1xuICAgIHRlbXBkICs9ICcgwrBDJztcbiAgICB3aW5kZCArPSAnIG1ldGVycy9zZWNvbmQnO1xuICB9XG4gIHJldHVybiBbdGVtcGQsIHdpbmRkLCBodW1kLCBwcmVdO1xufTtcblxuY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBnaXBoeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXBoeScpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGdldEdpcGh5KGRlc2NyaXB0aW9uLCBnaXBoeSk7XG4gIGljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlclswXS5pY29ufUA0eC5wbmdgO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gIGNvbnN0IGh1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW0nKTtcbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpO1xuICBjb25zdCByZXN1bHRzID0gY29udmVydERhdGEoZGF0YSk7XG4gIFt0ZW1wLnRleHRDb250ZW50LCB3aW5kLnRleHRDb250ZW50LCBodW0udGV4dENvbnRlbnQsIHByZS50ZXh0Q29udGVudF0gPSByZXN1bHRzO1xufTtcblxuY29uc3QgZm9yZWNhc3QgPSBhc3luYyAocGxhY2UsIHVuaXRzKSA9PiB7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2V9JnVuaXRzPSR7dW5pdHN9Jmxhbmc9ZW4mYXBwaWQ9Yjg2M2E5MjAyNTlkMDIyY2Y0OGY2MGRhZjE0MjExM2JgLFxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKHJlcykgPT4gcmVzKS50aGVuKChkYXRhKSA9PiBkaXNwbGF5RGF0YShkYXRhKSk7XG59O1xuXG5jb25zdCBzdGFydFAgPSAoKSA9PiB7XG4gIGljb24uc3JjID0gJy4vZ2lwaHkuZ2lmJztcbiAgZm9yZWNhc3QocGxhY2UsIHVuaXRzKTtcbn07XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0UCgpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=