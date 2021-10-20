function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const api = '69c19713308f7c5d7ef96bfe34357467\n'
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=matric`;
	fetch(url).then(response => response.json()).then(data=>{
		const weather = document.querySelector('#weather span:first-child')
		const city = document.querySelector('#weather span:last-child')
		weather.innerText = `${data.weather[0].main}`;
		city.innerText = data.name;
		
	});
}

function onGeoError(){
	alert('에러났다. 위치가 이상한데? ㅋㅋ')
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)