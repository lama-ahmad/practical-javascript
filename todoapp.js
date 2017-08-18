// Object in JavaScript will store our todos
var todoList = {
    todos: ['item1', 'item2', 'item3'],
    // Function to display todos 
    displayTodos: function() {
        console.log(this.todos);        
    },
    // Function to add todos 
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    // Function to change todos 
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    }, 
    // Function to delete todos 
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
