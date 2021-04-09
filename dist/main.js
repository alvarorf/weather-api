/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1SEFBdUgsT0FBTyxJQUFJLGVBQWU7QUFDako7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUErQztBQUM5RCxlQUFlLHdDQUF3QztBQUN2RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QscUJBQXFCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELE1BQU0sU0FBUyxNQUFNO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGFjZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5wbGFjZXYuaWQgPSAncGxhY2UnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyLXBsYWNlJykuYXBwZW5kQ2hpbGQocGxhY2V2KTtcblxuY29uc3QgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKS52YWx1ZTtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbicpO1xuXG5jb25zdCBnZXRHaXBoeSA9IGFzeW5jIChzZWFyY2gsIGdpcGh5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9MkV3T0tvUVhuTkY4ZXo4RzNpNjdvYmVPMm81VFQ3RU4mcz0ke3NlYXJjaH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCB3ZWF0aGVySW1nRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBnaXBoeS5zcmMgPSB3ZWF0aGVySW1nRGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgZ2lwaHkuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2lwaHkuc3JjID0gJyMnO1xuICB9XG59O1xuXG5jb25zdCBjb252ZXJ0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCB0ZW1wZCA9ICgoZGF0YS5tYWluLnRlbXBfbWF4ICsgZGF0YS5tYWluLnRlbXBfbWluKSAvIDIpIC0gMjczLjE1O1xuICBsZXQgd2luZGQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCAqIDEwMCkgLyAxMDA7XG4gIGNvbnN0IGh1bWQgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSAqIDEwMCkgLyAxMDA7XG4gIGNvbnN0IHByZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcbiAgaWYgKHVuaXRzID09PSAnwrBGJykge1xuICAgIHRlbXBkID0gYCR7TWF0aC5yb3VuZCgoKDkgLyA1KSAqIHRlbXBkICsgMzIpICogMTAwKSAvIDEwMH0gwrBGYDtcbiAgICB3aW5kZCA9IGAke01hdGgucm91bmQod2luZGQgKiAyLjIzNjk0ICogMTAwKSAvIDEwMH0gbWlsZXMvaG91cmA7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGQgKz0gJyDCsEMnO1xuICAgIHdpbmRkICs9ICcgbWV0ZXJzL3NlY29uZCc7XG4gIH1cbiAgcmV0dXJuIFt0ZW1wZCwgd2luZGQsIGh1bWQsIHByZV07XG59O1xuXG5jb25zdCBkaXNwbGF5RGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGdpcGh5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpcGh5Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbicpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgZ2V0R2lwaHkoZGVzY3JpcHRpb24sIGdpcGh5KTtcbiAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDR4LnBuZ2A7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbiAgY29uc3QgaHVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bScpO1xuICBjb25zdCBwcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlJyk7XG4gIFt0ZW1wLnRleHRDb250ZW50LCB3aW5kLnRleHRDb250ZW50LCBodW0udGV4dENvbnRlbnQsIHByZS50ZXh0Q29udGVudF0gPSBjb252ZXJ0RGF0YShkYXRhKTtcbn07XG5cbmNvbnN0IGZvcmVjYXN0ID0gYXN5bmMgKHBsYWNlLCB1bml0cykgPT4ge1xuICBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3BsYWNlfSZ1bml0cz0ke3VuaXRzfSZsYW5nPWVuJmFwcGlkPWI4NjNhOTIwMjU5ZDAyMmNmNDhmNjBkYWYxNDIxMTNiYCxcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChyZXMpID0+IHJlcykudGhlbigoZGF0YSkgPT4gZGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuY29uc3Qgc3RhcnRQID0gKCkgPT4ge1xuICBpY29uLnNyYyA9ICcuL2dpcGh5LmdpZic7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlJykudmFsdWU7XG4gIGZvcmVjYXN0KHBsYWNlLCB1bml0cyk7XG59O1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydFAoKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9