const clock = document.querySelector("#clock");

	
//intervals, timeout 개념에 대해서 알아보자
//intervals는 매 2초 처럼 매번 일어나는 것.
//padstart(원하는 자릿수, "빈자리 채우고 싶은 string"
//string() string으로 변환해줌

function getClock() {
	const date = new Date();
	const hour = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	
	clock.innerText = `${hour}:${minutes}:${seconds}`;
}
//setInterval(호출하고싶으 함수, 반복하고싶은 시간), 5초마다 sayhello 호출
// setInterval(sayHello, 5000);


//setTimeout() 시간이 흐른 후 한번만 실행
// setTimeout(sayHello, 5000)
getClock();
setInterval(getClock, 1000);