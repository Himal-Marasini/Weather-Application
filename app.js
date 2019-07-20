
const storageLocation = new storage();
const weatherLocation = storageLocation.getLocationData();

const Ui = new UI;
const weather = new WeatherApi(weatherLocation.city , weatherLocation.country);


// Get weather on DOM LOAD
document.addEventListener('DOMContentLoaded',getWeatherfn);

// Change location event
document.getElementById('w-change-btn').addEventListener('click' , (e)=>{

    const city = document.getElementById('city').value;
    const country = document.getElementById('state').value;

    weather.changeLocation(city,country);

    storageLocation.setLocationData(city,country);
   
    getWeatherfn();
    
    //Close Modal
    $('#locModal').modal('hide');

})  

//Get Weather Function

function getWeatherfn(){ 

weather.getWeather()
.then(result => {
    Ui.paint(result)
})
.catch(err => {
    Ui.error();
})

}




