document.getElementById('todoListLink').addEventListener('click', function() {
    loadTodoList();
});

document.getElementById('logoutLink').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});

function loadTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            let completedCount = 0; 
            const todoList = document.createElement('ul');
            todoList.className = 'list-group';

            const incompleteTodos = todos.filter(todo => !todo.completed);

            incompleteTodos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.className = 'list-group-item';
                todoItem.textContent = todo.title;

               
                todoItem.addEventListener('click', function() {
                    todo.completed = !todo.completed;  
                    todoItem.classList.toggle('list-group-item-success');

                    
                    if (todo.completed) {
                        completedCount++;  
                    } else {
                        completedCount--; 
                    }

                   
                    if (completedCount === 5) {
                        alert('Congrats. 5 Tasks have been Successfully Completed');
                    }
                });

                todoList.appendChild(todoItem);
            });

           
            document.getElementById('content').innerHTML = '';
            document.getElementById('content').appendChild(todoList);
        })
        .catch(error => console.error('Error fetching todos:', error));
}
