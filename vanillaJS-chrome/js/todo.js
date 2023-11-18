const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.currentTarget.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj['id'];
  const text = document.createElement('span');
  text.innerText = newTodoObj['text'];
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(text);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
