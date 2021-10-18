//이미지 배열 만들어주기. 파일명이랑 동일하게..!
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

//랜덤의 숫자를 설정해서 이미지 배열에서 이미지 선택하기
const ChosenImage = images[Math.floor(Math.random()*images.length)];

//html내에 img태그가 없기 때문에 만들어주는 createElement이용!
const bgImage = document.createElement('img');

//element img를 만들었다면 속성 src도 추가해보자.!
bgImage.src = `img/${ChosenImage}`;

document.body.appendChild(bgImage)
//prependchild를 하면 제일 위에 나온다.