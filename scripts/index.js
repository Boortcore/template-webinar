const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];


const todosContainer = document.querySelector('.todos__list');
const addTodoForm = document.querySelector('.todo-form');
const input = addTodoForm.querySelector('.todo-form__input');
const createTodo = (taskName) => {
  const string = `<li class="todo-item">
    <span class="todo-item__text"></span>
    <button class="todo-item__edit"></button>
    <button class="todo-item__copy"></button>
    <button class="todo-item__del"></button>
  </li>`
  const container = document.createElement('div');
  container.innerHTML = string;
  container.querySelector('.todo-item__text').textContent = taskName;
  return container.firstElementChild;
}

const renderTodo = (taskName) => {
  todosContainer.append(createTodo(taskName))
}


todos.forEach((title) => {
  renderTodo(title);
})

/*
todosContainer.append(
  ...todos.map((taskName) => {
    return createTodo(taskName);
  })
)
*/
const addTodo = (event) => {
  event.preventDefault();
  const taskName = input.value;
  renderTodo(taskName);
  input.value = '';
}

addTodoForm.addEventListener('submit', addTodo);