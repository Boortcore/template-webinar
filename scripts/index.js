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
const template = document.querySelector('#todo-item-template');

const createTodo = (taskName) => {
  const task = template
    .content.querySelector('.todo-item')
    .cloneNode(true)
  task.querySelector('.todo-item__text').textContent = taskName;
  return task;
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