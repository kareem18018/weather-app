const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    const weatherData = await weatherService.getWeatherByCity(city);
    res.json({ weatherData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = {
  getWeather,
};
