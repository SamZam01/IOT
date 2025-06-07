const { fetchData } = require('../services/externalAPIService');

// Worwi test ↓

let testTemperature = null;

const setTestTemperature = (req, res) => {
  const { temperature } = req.body;

  if (typeof temperature !== 'number') {
    return res.status(400).json({ message: 'El campo temperature debe ser un número.' });
  }

  testTemperature = temperature;

  res.status(200).json({
    message: 'Temperatura de prueba establecida.',
    temperature: testTemperature
  });
};

const getTestTemperature = (req, res) => {
  if (testTemperature === null) {
    return res.status(404).json({ message: 'No hay temperatura de prueba configurada.' });
  }

  const simulatedResponse = [
    {
      device: "TEST123",
      timestamp: new Date().toISOString(),
      temperature: testTemperature.toFixed(4),
      humidity: "50.0",
      pressure: "1015.12345"
    },
    {
      device: "TEST123",
      timestamp: new Date().toISOString(),
      hexData: "TESTDATA1234567890"
    }
  ];

  res.json(simulatedResponse);
};


// Worwi test ↑

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
  visualization,
  setTestTemperature,
  getTestTemperature
};
