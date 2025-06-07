const axios = require('axios');


function decodeHexData(hexString) {
  const buffer = Buffer.from(hexString, 'hex');

  const temperature = buffer.readFloatLE(0);
  const humidity = buffer.readFloatLE(4);
  const pressure = buffer.readFloatLE(8);

  return { temperature, humidity, pressure };
}


async function decodeIoTData() {
  try {
    const response = await axios.get('https://callback-iot.onrender.com/data');
    const data = response.data;

    const hexDataItems = data.filter(item => item.hexData);

    if (hexDataItems.length === 0) {
      console.log('No se encontraron datos con hexData.');
      return;
    }

    hexDataItems.forEach((item, index) => {
      const { temperature, humidity, pressure } = decodeHexData(item.hexData);
      console.log(`\nRegistro #${index + 1}`);
      console.log(`Dispositivo: ${item.device}`);
      console.log(`Timestamp: ${item.timestamp}`);
      console.log(`Temperatura: ${temperature.toFixed(2)} °C`);
      console.log(`Humedad:     ${humidity.toFixed(2)} %`);
      console.log(`Presión:     ${pressure.toFixed(2)} hPa`);
    });
  } catch (error) {
    console.error('Error al obtener o decodificar los datos:', error.message);
  }
}

decodeIoTData();
