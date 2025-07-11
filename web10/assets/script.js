function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xoá";
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);
    input.value = "";
}
