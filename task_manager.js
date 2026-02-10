
const input = document.getElementById("task_input");
const button = document.getElementById("Task_add_button");
const list = document.getElementById("task_list_ul");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});

button.addEventListener("click", () => {
    if (input.value === "") return ;

    const li = document.createElement("li");
    // li.textContent = input.value;

    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.textContent = input.value;
    delBtn.textContent = "❌";

    span.addEventListener("click", () => {
        span.classList.toggle("done");
    })

    delBtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
})