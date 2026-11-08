
function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Add task text
    let span = document.createElement("span");
    span.textContent = task;

    // Create delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete functionality
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Add elements to list
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}
