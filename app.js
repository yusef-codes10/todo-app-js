// ! Think about what features we want to implement
// adding new todos
// delete a todo
// save a todo in local storage
const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoListUl = document.getElementById('todoList');

let allTodos =[];  // empty array to stor todos

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(); // add a saparate function is best
})

function addTodo() {
    const todoText = todoInput.value.trim(); // always trim
    if (todoText.length > 0) {
        allTodos.push(todoText);
        createTodoItem(todoText); // to add to the page
        todoInput.value = '';   
        console.log(todoText);
    }
}

function createTodoItem(todo) {
    const todoLi = document.createElement('li');
    todoLi.innerText = todo;
    todoLi.classList.add('todo');
    todoListUl.append(todoLi);
}