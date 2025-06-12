function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = tasskInput.value.trim();

    if (taskText === '') return alert('Please enter a task.');

    const li = document.createElement('li');
    li.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'action-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Done';
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}