const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//아래의 onSubmit 함수는 키 값이 없는 경우에 실행 되는 경우이다. //
function onSubmit(tomato) {  // <- 여기서 tomato는 submit을 누르는 값으로 된다? // 
    tomato.preventDefault(); //submit의 새로고침을 막아준다. //
    loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm의 .hidden 클래스명을 추가 한다. //
    const username = loginInput.value; //loginInput의 입력 된 값을 username으로 변수선언 한다. // 
    localStorage.setItem(USERNAME_KEY, username); //로컬 스토리지 안의 (키 이름, 키 값을)을 저장. setItem은 저장한다는 의미//
    paintGreetings(username); //18번줄 함수 확인 // 
} //preventDefalut로 submit의 새로고침을 막고 greeting 안에 내용에 hello + 입력값을 추가한다. 그리고 localStorage 안에 키 이름, 키 값을 저장한 후 paintGreeting 함수를 실행하여 처음부터 hidden 클래스명 remove 해서 화면에 hello 이름을 출력하게 만들어 준다.//


function paintGreetings(username) {
    greeting.innerText = `hello ${username}`; //greeting이라는 id가 설정 된 요소 안에 hello + 입력값을 화면에 출력//
    greeting.classList.remove(HIDDEN_CLASSNAME); //greeting의 hidden 클래스를 삭제한다. //
}

loginForm.addEventListener("submit", onSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY); //LocalStorage안의 키 값이　이미 있는 경우//

if(savedUsername === null) { // localStorage안의 키 값이 이미 있는 경우의 새로고침을 하는 if문 이다.//
    loginForm.classList.remove(HIDDEN_CLASSNAME); //먼역 saveUsername 이 값이 null이라면 class에서 hideen 없앤다.//
    loginForm.addEventListener("submit", onSubmit); //그리고 submit 이벤트를 실행한다. //
} else {
    paintGreetings(savedUsername); //아니라면 paintGreeting 함수를 실행한ㄷ.//
}