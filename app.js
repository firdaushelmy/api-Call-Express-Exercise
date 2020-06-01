const express = require('express');
const app = express();
const https = require('https');

require('dotenv').config();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

// const api_key = process.env.API_KEY;
// const query = 'London'
// const unit = 'metric'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}&units=${unit}`;

// https.get(url, function (response) {
//   console.log(response.statusCode);

//   response.on('data', function (data) {
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const weatherIcon = weatherData.weather[0].icon
//     const imageURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
//     console.log(temp)
//     const weatherDesc = weatherData.weather[0].description
//     res.write(`<h1>The temperature in London is ${temp} degree celcius</h1>`);
//     res.write(`<h2>The weather looks like ${weatherDesc}</h2>`);
//     res.write(`<img src=${imageURL}>`)

//     res.send();
//   })
// })



app.listen(3000, function () {
  console.log('server is running on 3000');
})