// Object in JavaScript will store our todos
var todoList = {
    todos: [],
    // Function to display todos 
    displayTodos: function() {
        console.log(this.todos);        
    },
    // Function to add todos 
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    // Function to change todos 
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    }, 
    // Function to delete todos 
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // Toggle completed
    toggleCompleted: function(position) {
       var todo = this.todos[position];
       todo.completed = !todo.completed
       this.displayTodos();       
    }
};

