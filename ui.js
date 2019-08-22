class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather) {
        if (weather.visibility === undefined) {
            this.dewpoint.textContent = `Visibility :- 6 Km`;
        } else {
            let kilo = (weather.visibility / 1000);
            this.dewpoint.textContent = `Visibility :- ${kilo} Km`;
        }
        this.location.textContent = `${weather.name} , ${weather.sys.country}`;
        this.desc.textContent = `${weather.weather[0].description}`;
        this.string.textContent = `${weather.main.temp}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidity :- ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Pressure :- ${weather.main.pressure} hpa`;
        this.wind.textContent = `Wind Speed:- ${weather.wind.speed} meter/sec`;

    }
    error() {
        alert(`Wrong country or city name , Please try it Again !!!`);
    }
}