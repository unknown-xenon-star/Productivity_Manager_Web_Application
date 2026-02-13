const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Save theme Local
if (localStorage.getItem("theme")==="dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
})