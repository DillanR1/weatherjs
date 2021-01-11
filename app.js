const weather = new Weather('Oakley, CA');

// Get weather on Dom load
document.addEventListener('DomContentLoaded', getWeather);

//NOTE weather.changeLocation('London'); currently working, refactor to change dynamically 

function getWeather(){
  weather.getWeather()
    .then(results => {
       ui.paint(results)
    })
    .catch(err => console.log(err));
}