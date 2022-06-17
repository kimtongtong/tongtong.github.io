const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";


let toDos = []; //localStorage는 오직 text만 저장이 가능하다.//

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}
//stringify 텍스트로 바꿔주는 property//


function deleteToDo(event) { //이벤트를 넣어서 어디서 이벤트가 일어났는지 console.log 해서 알 수 있다.//
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);  //append 맨 마지막에 놓아져야 한다.//
  toDoList.appendChild(li);
}


function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY)

if(saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}