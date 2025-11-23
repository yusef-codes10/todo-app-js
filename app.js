// ! Think about what features we want to implement
// adding new todos
// delete a todo
// save a todo in local storage
const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todoInput");
const todoListUl = document.getElementById("todoList");

let allTodos = []; // empty array to stor todos

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(); // add a saparate function is best
});

function addTodo() {
  const todoText = todoInput.value.trim(); // always trim
  if (todoText.length > 0) {
    allTodos.push(todoText);
    updateTodoList(); // to add to the page;
    todoInput.value = "";
    console.log(todoText);
  }
}

function updateTodoList() {
  todoListUl.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUl.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLi = document.createElement("li");
  todoLi.classList = "todo";
  todo.innerHTML = `
              <input type="checkbox" name="" id="${todoId}" />
          <label for="${todoId}" class="custom-checkbox">
            <i class="bi bi-check transparent-icon"></i>
          </label>
          <label for="${todoId}" class="todo-text">
            ${todo}
          </label>
          <button class="delete-btn">
            <i class="bi bi-trash3"></i>
          </button>
    `;
  return todoLi;
}
