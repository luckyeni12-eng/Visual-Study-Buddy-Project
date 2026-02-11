import { getData, saveData } from "./storage.js";

let tasks = getData("tasks");

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.className = task.done ? "done" : "";

    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="toggleTask(${index})">✔</button>
      <button onclick="deleteTask(${index})">🗑</button>
    `;

    list.appendChild(li);
  });

  saveData("tasks", tasks);
}

window.toggleTask = function(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
};

window.deleteTask = function(index) {
  tasks.splice(index, 1);
  renderTasks();
};

document.getElementById("taskForm").addEventListener("submit", e => {
  e.preventDefault();

  const input = document.getElementById("taskInput");

  tasks.push({
    text: input.value,
    done: false
  });

  input.value = "";
  renderTasks();
});

renderTasks();