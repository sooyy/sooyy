const API_KEY = "d981b35d1e69bc5eb296da7896f280fe";

function placeWeather(){
   const loc = sessionStorage.getItem("placeArea");
   $.ajax({
		type:"GET",
		url : `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}&units=metric`,
		dataType: "json",
		success: function(data){		
			const placeWeatherIcon = data.weather[0].icon;
			const placeWeatherIconAdr = `http://openweathermap.org/img/wn/${placeWeatherIcon}@2x.png`;
			$("#place-location").html(`${data.name}의 날씨`);
			$("#place-weather-icon").attr('src', placeWeatherIconAdr);
			$("#place-desc_weather").html(data.weather[0].description);
			$("#place-temperature-value").html(`${data.main.temp}º<span>C</span>`);
		},
		error: function(){
			alert("여행지 날씨를 불러올 수 없습니다.");
		}		
	})
}
placeWeather();


function userWeather(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   $.ajax({
		type:"GET",
		url : `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
		dataType: "json",
		success: function(data){			
			const userWeatherIcon = data.weather[0].icon;
			const userWeatherIconAdr = `http://openweathermap.org/img/wn/${userWeatherIcon}@2x.png`;
			$("#location").html(`${data.name}의 날씨`);
			$("#weather-icon").attr('src', userWeatherIconAdr);
			$("#desc_weather").html(data.weather[0].description);
			$("#temperature-value").html(`${data.main.temp}º<span>C</span>`);
		}
	})    
}
function userWeatherError(){
    alert("사용자의 위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(userWeather, userWeatherError);