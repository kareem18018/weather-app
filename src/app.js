const express = require('express');
const weatherController = require('./controllers/weatherController');
const path = require('path');

const app = express();
const port = 3000;

// Set the static folder
app.use(express.static(path.join(__dirname, 'views')));

// Define a route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'weather.html'));
});

// Define the weather route
app.get('/weather', weatherController.getWeather);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
