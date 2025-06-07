const container = document.getElementById('data-container');


const humidityCtx = document.getElementById('humidityChart').getContext('2d');
const pressureCtx = document.getElementById('pressureChart').getContext('2d');


const humidityData = {
  labels: [],
  datasets: [{
    label: 'Humedad (%)',
    borderColor: '#3498db',
    backgroundColor: 'rgba(52,152,219,0.2)',
    data: [],
    tension: 0.3,
    spanGaps: true,
    fill: false
  }]
};

const pressureData = {
  labels: [],
  datasets: [{
    label: 'Presión (hPa)',
    borderColor: '#e67e22',
    backgroundColor: 'rgba(230,126,34,0.2)',
    data: [],
    tension: 0.3,
    spanGaps: true,
    fill: false
  }]
};


const humidityOptions = {
  responsive: true,
  scales: {
    y: {
      min: 0,    
      max: 100
    },
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 5
      }
    }
  }
};

const pressureOptions = {
  responsive: true,
  scales: {
    y: {
      min: 900,   
      max: 1100
    },
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 5
      }
    }
  }
};


const humidityChart = new Chart(humidityCtx, {
  type: 'line',
  data: humidityData,
  options: humidityOptions
});

const pressureChart = new Chart(pressureCtx, {
  type: 'line',
  data: pressureData,
  options: pressureOptions
});

async function fetchDataAndDisplay() {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    const timestamp = new Date().toLocaleTimeString();

    data.forEach(entry => {
      const humidity = parseFloat(entry.humidity);
      const pressure = parseFloat(entry.pressure);

      const div = document.createElement('div');
      div.className = 'data-entry';
      div.innerHTML = `<pre>${JSON.stringify(entry, null, 2)}</pre>`;
      container.appendChild(div);

      
      humidityData.labels.push(timestamp);
      pressureData.labels.push(timestamp);
      humidityData.datasets[0].data.push(humidity);
      pressureData.datasets[0].data.push(pressure);

      
      if (humidityData.labels.length > 10) {
        humidityData.labels.shift();
        humidityData.datasets[0].data.shift();
        pressureData.labels.shift();
        pressureData.datasets[0].data.shift();
      }

      humidityChart.update();
      pressureChart.update();
    });

    container.scrollTop = container.scrollHeight;

    await fetch('http://localhost:3000/api/visualize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

setInterval(fetchDataAndDisplay, 5000);
