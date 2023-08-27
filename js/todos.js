function loadTodos(){
   fetch('https://jsonplaceholder.typicode.com/todos')
   .then(res => res.json())
   .then(data => displayTodos(data))
}


function displayTodos(todos){
    // get the container 
    const todocontainer = document.getElementById('todo-continer')
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: ${todo.completed ===true ? 'complete': 'not complete'}</p>
        `;
        // appendchild
        todocontainer.appendChild(todoDiv);
    }
}



loadTodos();



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
