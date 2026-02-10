
const input = document.getElementById("task_input");
const button = document.getElementById("Task_add_button");
const list = document.getElementById("task_list_ul");

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

button.addEventListener("click", () => {
    if (input.value === "") return ;

    const li = document.createElement("li");   
    const span = document.createElement("span");

    span.textContent = input.value;
    
    li.appendChild(span);
    ensureDeleteButton(li);

    list.appendChild(li);
    input.value = "";
    saveTasks();
})

function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}

function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
