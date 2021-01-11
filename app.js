const weather = new Weather('Oakley, CA');

weather.getWeather()
    .then(results => {})
    .catch(err => console.log(err));