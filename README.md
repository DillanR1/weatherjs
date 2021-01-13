# weatherjs
js weather app tutorial from Brad Traversy used to review fetch API's. The goal was to essentialy fetch the data from the api and persist it to local storage.
From Local storage, the data would be placed into the UI via dom manipulation. 

The original API(wunderground API) used in the tutorial cannot be used, as it is no longer free. Openweathermap.org provides an API, but the documentation
is a bit confusing as the API is supposed to take in "state codes", i.e. California = CA. However, the API seemed not to utilize the state codes, and would search based 
off of the city. Setting a custom URL proved to be problematic as well, as the API seemed to not be able to read dynamic variables set in the API URL fetch request.

Initially, a constructor was used to create a weather object that used took in the apiKey, city, and state as properties. The constructor also was supposed to utilize
the method, getWeather() to fetch from the API. This is still available for viewing in commit #3. I am sure there is a logical explanation for this, but in the interest 
of progress I have decided to move on.

I found another tutorial HERE: https://youtu.be/f__x1VofV2Q "Code Creative's youtube" that seems to properly return the weather data, although there is an initial error
due to local storage being empty. This error can be ignored, just search for your desired city and the weather will be displayed in the UI. 

There is a property to set a default city, but this seems to be ignored. My initial assumption is that for some reason the data in local storage
is having a hard time being re-assigned, or there is no data in the local storage prior to the API being called, in order to assign a default city from the local storage. 

Anyway, despite being a pain in the neck, this has been a great project to practice with.
