const dotenv = require('dotenv');
dotenv.config();

const getApiKey = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error('API key not found in .env file');
  }
  return apiKey;
};

module.exports = {
  getApiKey,
};
