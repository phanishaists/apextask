function addTask() {
    const taskInput = document.getElementById("taskInput");
    const statusSelect = document.getElementById("statusSelect");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    const status = statusSelect.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText + " - " + status;

    if (status === "Completed") {
        li.classList.add("completed");
    }

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "15px";

    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
