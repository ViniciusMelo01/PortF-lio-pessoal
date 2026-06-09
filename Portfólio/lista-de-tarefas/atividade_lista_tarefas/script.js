var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    createTask(taskText);

    saveTasks();

    taskInput.value = "";
    taskInput.focus();
}

function createTask(taskText) {
    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}

function saveTasks() {
    var tasks = [];

    var taskSpans = document.querySelectorAll("#taskList li span");

    taskSpans.forEach(function(span) {
        tasks.push(span.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function () {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task) {
        createTask(task);
    });
};
