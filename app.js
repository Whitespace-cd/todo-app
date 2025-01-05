function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let dueDate = document.getElementById("dueDate").value; // Get the due date
    let important = document.getElementById("important").checked; // Get the important checkbox status

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");

        // Create the task description with due date and importance
        let taskText = taskInput.value;
        if (dueDate) {
            taskText += ` (Due: ${dueDate})`;
        }
        if (important) {
            taskText = `<strong>${taskText} - IMPORTANT</strong>`;
        }

        li.innerHTML = taskText; // Add the task with due date and importance
        taskList.appendChild(li);

        // Clear the input fields
        taskInput.value = "";  
        document.getElementById("dueDate").value = "";  
        document.getElementById("important").checked = false;
    }
}
