const axios = require('axios');

const fetchData = async () => {
  const endpoint = 'https://callback-iot.onrender.com/data';
  const response = await axios.get(endpoint);
  return response.data;
};

module.exports = {
  fetchData
};
