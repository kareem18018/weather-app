const axios = require('axios');
const { getApiKey } = require('../utils/apiUtils');

const getWeatherByCity = async (city) => {
  const apiKey = getApiKey();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = {
  getWeatherByCity,
};
