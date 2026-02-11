const dateInput = document.getElementById("dateInput");
const input = document.getElementById("task_input");
const button = document.getElementById("Task_add_button");
const list = document.getElementById("task_list_ul");
const filters = document.querySelector(".filters");
const priorityInput = document.getElementById("priorityInput");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("done");
        saveTasks();
    }
    if (event.target.classList.contains("del-btn")) {
        event.target.parentElement.remove();
        saveTasks();
    }
});

// add Button function
function ensureDeleteButton(li) {
    if (li.querySelector(".del-btn")) return;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "del-btn";
    
    li.appendChild(delBtn);

}

// add delete button to each li
document.querySelectorAll("#task_list_ul li").forEach(ensureDeleteButton);

function createTask(taskText, date, priority, done = false) {

    const li = document.createElement("li");   
    const span = document.createElement("span");

    span.textContent = taskText;
    if (done) span.classList.add("done");

    const meta = document.createElement("small");
    meta.textContent = `📅 ${date || "No date"} | ${priority}`;
    meta.classList.add(`priority-${priority}`);

    
    span.appendChild(meta);
    li.appendChild(span);
    ensureDeleteButton(li);
    list.appendChild(li);
}

button.addEventListener("click", () => {
    if (input.value === "") return ;

    createTask(
        input.value,
        dateInput.value,
        priorityInput.value
    );

    dateInput.value = "";
    input.value = "";
    saveTasks();
})

function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}

function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}


filters.addEventListener("click", (e) => {
    if (!e.target.dateset.filter) return;
    
    document.querySelectorAll("#task_list_ul li").forEach(li => {
        const done = li.querySelector("span").classList.contains("done");
        
        li.style.display = e.target.dataset.filter === "all" ||
        (e.target.dataset.filter === "completed" && done) ||
        (e.target.dataset.filter === "pending" && !done)
        ? "flex" : "none";
    });
});

loadTasks();