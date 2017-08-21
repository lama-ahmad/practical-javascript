// Object in JavaScript will store our todos
var todoList = {
    todos: [],
    // Function to display todos 
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Todo list is empty');
        } else {
            console.log('My Todos:');                  
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);                    
                }
            }  
        }         
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
    // Toggle completed todo object
    toggleCompleted: function(position) {
       var todo = this.todos[position];
       todo.completed = !todo.completed;
       this.displayTodos();       
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0
        
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // If everything's true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            } 
        // Otherwise, make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            } 
        }
        this.displayTodos();        
    }
};
