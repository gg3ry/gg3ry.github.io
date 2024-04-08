class TrainScheduleFetcher {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async fetchTrainStations(departureCity, arrivalCity) {
    const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=19.040235&lat=47.497913&kinds=train_station&format=json&apikey=${this.apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching train station data:', error);
      return null;
    }
  }
}

const apiKey = 'YOUR_OPENTRIPMAP_API_KEY';
const trainScheduleFetcher = new TrainScheduleFetcher(apiKey);

const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

inp1.addEventListener('change', async () => {
  const departureCity = inp1.value;
  const arrivalCity = inp2.value;

  const data = await trainScheduleFetcher.fetchTrainStations(departureCity, arrivalCity);
  if (data) {
    console.log(data);
  } else {
    // Handle the error or absence of data
  }
});

inp2.addEventListener('change', async () => {
  const departureCity = inp1.value;
  const arrivalCity = inp2.value;

  const data = await trainScheduleFetcher.fetchTrainStations(departureCity, arrivalCity);
  if (data) {
    console.log(data);
  } else {
    // Handle the error or absence of data
  }
});
