const hellos = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    hellos.style.color="blue";
}

function mouseEnter(){
    hellos.innerText = "Mouse is here!";
}

function mouseLeave(){
    hellos.innerText = 'Mouse is gone!';
}

function handleResize(){
    document.body.style.backgroundColor = 'tomato';
}
//  document의 body,head,title 이런것들은 중요하기 때문에
// document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨

// 나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!!

function handleWindowCopy(){
    alert('copier!')
}

function handleWindowOffiline(){
    alert("sos no wifi")
}

function handleWindowOniline(){
    alert("All Goooood")
}

hellos.addEventListener('click', handleTitleClick);
hellos.addEventListener('mouseenter', mouseEnter);
hellos.addEventListener('mouseleave', mouseLeave);

window.addEventListener("resize",handleResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffiline);
window.addEventListener("online", handleWindowOniline);

// --------------------------------------------------------------------------------------------------------------------------------------------------

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

const savedUsername = localStorage.getItem(USERNAME_KEY);  //스토리지에 저장 되어있는 것 get



// 입력받은 이름을 LOCALSTORAGE에 저장하기
function onLoginSubmit(event){
    event.preventDefault(); // 자동 새로고침 사용 안함
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGrettings(username)
}

//헬로 표시 함수
function paintGreetings(username){
    greeting.innerText = `${username}님 안녕하세요:)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 저장된 이름 값이 있는지 확인 후 상황에 맞는 입력값 주기
if(savedUsername === null){
    //form두 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //form 안보여주고 greeting하기
    paintGreetings(savedUsername);
}
