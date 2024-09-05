document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const priority=document.getElementById('dropDown');
    const value=priority.value;
    if (value === "Less") {
        li.style.backgroundColor = "lightgreen";
      } else if (value === "Medium") {
        li.style.backgroundColor = "orange";
      } else if (value === "High") {
        li.style.backgroundColor = "OrangeRed";
      }


    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById('tasks').appendChild(li);
    taskInput.value = '';
});
