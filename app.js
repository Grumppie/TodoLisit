// selectors
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listners
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
    // Prevent From Default submission
    event.preventDefault()
    if ((todoInput.value !== null)) {
        // Add Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoList.appendChild(todoDiv);
        // add li to div
        const todoItem = document.createElement("li");
        todoItem.innerText = todoInput.value;
        todoItem.classList.add("todo-item");
        todoDiv.appendChild(todoItem);
        // check btn
        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn")
        checkBtn.innerHTML = "<i class='fas fa-check'></i>";
        todoDiv.appendChild(checkBtn);
        // trash btn
        const trashBtn = document.createElement("button");
        trashBtn.classList.add("trash-btn")
        trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
        todoDiv.appendChild(trashBtn);

        // clear input

        todoInput.value = ""

    }
}

function checkDelete(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Transition
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })

    }
    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("checked");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "incomplete":
                if (!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            default:
                break;
        }
    })
}
