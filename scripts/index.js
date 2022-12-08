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

const createTodo = (taskName) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  const span = document.createElement('span');
  span.classList.add('todo-item__text');
  span.textContent = taskName;
  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('todo-item__edit');
  const buttonCopy = document.createElement('button');
  buttonCopy.classList.add('todo-item__copy');
  const buttonDel = document.createElement('button');
  buttonDel.classList.add('todo-item__del');

  li.append(span, buttonEdit, buttonCopy, buttonDel)
  return li;
}

const renderTodo = (taskName) => {
  todosContainer.append(createTodo(taskName))
}

/*
todos.forEach((title) => {
  renderTodo(title);
})
*/
todosContainer.append(
  todos.forEach((taskName) => {
    return createTodo(taskName);
  })
)