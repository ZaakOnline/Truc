document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="status"></span>
            <span>${taskText}</span>
            <button class="deleteBtn">X</button>
        `;

        taskList.appendChild(taskItem);

        const statusIcon = taskItem.querySelector('.status');
        const deleteBtn = taskItem.querySelector('.deleteBtn');

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        statusIcon.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            // Ajouter ici la logique pour rayer uniquement le texte sans affecter la check mark
            const taskTextElement = taskItem.querySelector('span:last-child');
            taskTextElement.classList.toggle('completed-text');
        });
    }
});
