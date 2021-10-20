const toDoForm = document.querySelector('#toDo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list');
let toDos = [];


//#5 LOCAL STORAGE에 TODOS ARRAY 저장하기. 배열 저장 안되기에 배열처럼 생긴 string으로 저장하기. 추후 parseㅇ{정
function saveToDos(){
	localStorage.setItem('todos',JSON.stringify(toDos));
}

//#3 deleteToDo
function deleteToDo(event){
	// console.log(event) 타게팅 값 찾기
	const li = event.target.parentElement; // 해당 버튼 값의 부모 타게팅.
	li.remove();
	toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id))
	saveToDos();
}


//#2: html에 element를 javascript로 추가해보자. createElement를 통해서 만든다.
function paintTodo(newTodo){
	const li = document.createElement('li'); // li 만들기
	li.id = newTodo.id // html 내에서 li의 id값 추가
	const span = document.createElement('span'); //span 만들기\
	span.innerText = newTodo.text; //span에 받은 newtodo 넣기
	
	const button = document.createElement('button'); //버튼 만들기
	button.innerText = '완료'; //버튼만들기
	
	li.appendChild(span); //li에 span 넣기.. 추후 삭제 button도 추가 예정
	li.appendChild(button); // li자식에 버튼넣기
	toDoList.appendChild(li); //todolist(ul) 자식에 li 넣기.
	
	button.addEventListener('click', deleteToDo) //만든 버튼 클릭 감지하면 함수 실행
	
}

//#1: 새로고침 방지하고 input의 value를 변수에 담고 paintodo 함수에 태워보낸다.
function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text:newTodo,
		id : Date.now()
	};
	paintTodo(newTodoObj);
	toDos.push(newTodoObj); 	//#4 그리기 전에 array에 추가하기..LOCAL STORAGE에 ARRAY 저장하기 위해..
	saveToDos();            //#5 local storage에 저장하기
	
}

toDoForm.addEventListener('submit',handleToDoSubmit);

//#6 localstorage에서 가져오기 + parse: '[]' 스트링을 ==>[] 배열로
const savedToDos = localStorage.getItem('todos');


if (savedToDos != null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintTodo);
}
