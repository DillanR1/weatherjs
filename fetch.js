// API request

class Fetch {
    async getCurrent(input) {
        const myKey = "9f046df65f8f779272f884474d8c48a0";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}