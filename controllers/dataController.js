const { fetchData } = require('../services/externalAPIService');


const getdata = async (req, res) => {
  try {
    const data = await fetchData();
    const lastTwo = data.slice(-2);
    res.json(lastTwo);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos externos', error: error.message });
  }
};


const visualization = (req, res) => {
  const receivedData = req.body;
  
  
  console.log('Datos recibidos para visualización:', receivedData);

  
  res.status(200).json({ message: 'Datos enviados a la visualización correctamente', data: receivedData });
};

module.exports = {
  getdata,
  visualization
};
