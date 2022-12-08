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
const button = addTodoForm.querySelector('.todo-form__submit-btn');
let editTodo = null;

function seToEditMode(taskName) {
  addTodoForm.addEventListener('submit', editTodo);
  button.textContent = 'Изменить';
  input.value = taskName;
  addTodoForm.removeEventListener('submit', addTodo);
}

function setToAddMode() {
  button.textContent = 'Добавить';
  input.value = '';
  addTodoForm.addEventListener('submit', addTodo);
  addTodoForm.removeEventListener('submit', editTodo);
}

const createTodo = (taskName) => {
  const template = document.querySelector('#todo-item-template');
  const task = template.content.querySelector('.todo-item').cloneNode(true);
  task.querySelector('.todo-item__text').textContent = taskName;
  task.querySelector('.todo-item__copy').addEventListener('click', () => {
      renderTodo(taskName);
  });
  task.querySelector('.todo-item__del').addEventListener('click', () => {
      task.remove();
  });

  task.querySelector('.todo-item__edit').addEventListener('click', () => {
      addTodoForm.removeEventListener('submit', editTodo);
      editTodo = (e) => {
          e.preventDefault();
          task.querySelector('.todo-item__text').textContent = input.value;
          setToAddMode();
      }
      seToEditMode(taskName)
  });
  return task;
};

const renderTodo = (taskName) => {
  todosContainer.prepend(createTodo(taskName))
}

todosContainer.append(...todos.map(createTodo));

const addTodo = (event) => {
  event.preventDefault();

  const taskName = input.value;
  renderTodo(taskName)
  input.value = '';
};

addTodoForm.addEventListener('submit', addTodo);

// <img src=a onerror="alert('alarm')" />
