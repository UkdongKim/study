const quotes = [
{
	quote:"13. 먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
	author:"채근담"
},
{
	quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
	author:"제임스 오펜하임"
},
{
	quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
	author:"단테"
},
{
	quote:"평생 살 것처럼 꿈을 꾸어라, 그리고 내일 죽을 것처럼 오늘을 살아라",
	author:"제임스 딘"
},
{
	quote:"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
	author:"간디"
},
{
	quote: "일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다",
	author:"루이사 메이올콧"
},
{
	quote:"돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다",
	author:"쇼펜하우어"
},
{
	quote:"나의 하나님이 그리스도 예수 안에서 영광 가운데 그 풍성한 대로 너희 모든 쓸 것을 채우시리라",
	author:"빌립보서 4:19"
}]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

//랜덤으로 숫자 구하기: Math.random()
//자릿수에 따라서 *10, 100 할 것
//Math.round(3.6666) => 4 로 반올림됨
//Math.floor(3.9999) => 3

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;