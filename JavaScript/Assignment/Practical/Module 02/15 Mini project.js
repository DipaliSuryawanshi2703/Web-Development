// Debug: script loaded
console.log("Task Manager script loaded");

// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        console.warn("Empty task not allowed");
        alert("Please enter a task");
        return;
    }

    console.log(`Adding task: ${taskText}`);

    // Create elements
    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Action buttons container
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");
 
    completeBtn.addEventListener("click", () => {
       
        li.classList.toggle("completed");
        completeBtn.textContent = li.classList.contains("completed") 
        ? "Undo" 
        : "✔";
        console.log(`Task toggled: ${taskText}`);
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        console.log(`Task deleted: ${taskText}`);
    });

    // Append elements
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});