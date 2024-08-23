document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('task');
    const addButton = document.getElementById('add');
    const list = document.getElementById('list');
  
    addButton.addEventListener('click', addTodo);
  
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
          list.removeChild(li);
        });
  
        li.appendChild(deleteButton);
        list.appendChild(li);
        todoInput.value = '';
        todoInput.focus();
      }
    }
  });