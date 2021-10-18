const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

const savedUsername = localStorage.getItem(USERNAME_KEY);  //스토리지에 저장 되어있는 것 get

// 저장된 이름 값이 있는지 확인 후 상황에 맞는 입력값 주기
if(savedUsername === null){
    //form두 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //form 안보여주고 greeting하기
    paintGrettings(savedUsername);
}


// 입력받은 이름을 LOCALSTORAGE에 저장하기
function onLoginSubmit(event){
    event.preventDefault(); // 자동 새로고침 사용 안함
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGrettings(username)
}

//헬로 표시 함수
function paintGrettings(username){
    greeting.innerText = `${username}님 안녕하세요:)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

