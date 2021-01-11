class Weather {
    constructor(city, state) {
        this.apiKey = '9f046df65f8f779272f884474d8c48a0';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}&`);
    
        const responseData = await response.json();

        console.log(responseData);

        return responseData;
    
    }
}