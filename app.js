const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

// Get weather on Dom load
document.addEventListener('DomContentLoaded', getWeather);



// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

    // Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
 });

function getWeather(){
  weather.getWeather()
    .then(results => {
       ui.paint(results);
    })
    .catch(err => console.log(err));
}