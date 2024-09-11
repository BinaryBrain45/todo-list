document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    // Create a span to wrap the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Assign priority-based classes
    const priority = document.getElementById('dropDown');
    const value = priority.value;
    if (value === "Less") {
        li.classList.add("less-level");
    } else if (value === "Medium") {
        li.classList.add("medium-level");
    } else if (value === "High") {
        li.classList.add("high-level");
    }

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById('tasks').appendChild(li);
    taskInput.value = '';
});

const toggleDarkMode =()=>{
    const body = document.body;
    const modeIcon = document.getElementById("mode-icon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeIcon.textContent = "☀️";
    } else {
        modeIcon.textContent = "🌙";
    }
}
