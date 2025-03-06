function addTask() {
    let task = document.getElementById("taskInput").value;
    if (!task) return alert("Enter a task!");

    fetch("http://localhost/backend/server.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "task=" + encodeURIComponent(task)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        loadTasks();
    });
}

function loadTasks() {
    fetch("http://localhost/backend/server.php")
    .then(response => response.json())
    .then(tasks => {
        let list = document.getElementById("taskList");
        list.innerHTML = "";
        tasks.forEach(task => {
            let li = document.createElement("li");
            li.textContent = task;
            list.appendChild(li);
        });
    });
}

window.onload = loadTasks;
