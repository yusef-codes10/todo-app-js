// ! Think about what features we want to implement
// adding new todos
// delete a todo
// save a todo in local storage
const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoListUl = document.getElementById('todoList');

let allTodos =[];  // empty array to stor todos