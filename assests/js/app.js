
let weather = {
     api_key : "c8641f9f0435a020b5f2ddc908a2b412",
     fetchWeather: function (city) {
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.api_key}`)
         .then(response => response.json())
         .then(data => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const {name} = data;
            const{ icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const {temp_max, temp_min } = data.main; 
            console.log(name, icon, description, temp, humidity, temp_max, temp_min);
            document.querySelector('.city').innerText = `${name}`;
            document.querySelector('.temp').innerText = `Temp ${temp} °C`;
            document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector('.description').innerText = `${description}`;
            document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
            document.getElementById('max').innerText = `${temp_max} °C`;
            document.getElementById('min').innerText = `${temp_min} °C`;
            document.querySelector('.weather').classList.remove('loading')
      
        }, search : function() {
            this.fetchWeather(document.querySelector('.search-bar').value);
        }
}



$('input[type="text"]').keypress(function(e) {
    if(e.which== 13) {
        const searchText = $(this).val();
        console.log(searchText);

        weather.search();
        
        document.querySelector('.search-bar').value = "";

     }
 });

weather.fetchWeather("las vegas");





































