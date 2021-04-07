api_key = 'b863a920259d022cf48f60daf142113b'
city='colombia'
units = '°C'
const forecast = async(city,units='°C',lang='en') => {
  await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=b863a920259d022cf48f60daf142113b`).then(function(response) {
    return response.json()
}).then(res => console.log(res));
}

forecast('colombia')
"https://api.openweathermap.org/data/2.5/weather?q=${place}&lang=en&units=${unit}&appid=96234945f21abe7a841c8fc0306c59be"
