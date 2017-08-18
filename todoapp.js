// Array in JavaScript will store our todos
var todos = ['item1', 'item2', 'item3'];

////// v2 ////////

// Function to display todos 
function displayTodos() {
    console.log("My todos:", todos);
}

// Function to add todos 
function addTodo(newTodo) {
    todos.push(newTodo);
    displayTodos();
}

// Function to change todos 
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// Function to delete todos 
function deleteTodo(position) { 
    todos.splice(position, 1);
    displayTodos();
}

displayTodos();