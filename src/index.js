import forecast from './logic';

const placev = document.createElement('input');
placev.id = 'place';
document.getElementById('enter-place').appendChild(placev);

const startP = () => {
  const units = document.getElementById('units').value;
  const icon = document.getElementById('icon');
  icon.src = './giphy.gif';
  const place = document.getElementById('place').value;
  forecast(place, units);
};

const button = document.getElementById('search');
button.addEventListener('click', () => startP());
