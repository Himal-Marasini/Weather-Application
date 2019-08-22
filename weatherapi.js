class WeatherApi {
    constructor(city, country) {
        this.apiKey = "c1648334a39152ea777dd33160c95c11";
        this.city = city;
        this.country = country;
    }

    //Change the weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const responseId = await fetch(`${proxyUrl}api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);
        const datasId = await responseId.json();
        return datasId;
    }
}