function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let dueDate = document.getElementById("dueDate").value; // Get the due date

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        // Create the task description with due date
        let taskText = taskInput.value;
        if (dueDate) {
            taskText += ` (Due: ${dueDate})`;
        }

        li.innerHTML = taskText; // Add the task with due date and importance
        taskList.appendChild(li);

        // Clear the input fields
        taskInput.value = "";  
        document.getElementById("dueDate").value = ""; 
    }
}
