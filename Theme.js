const toogleBtn = document.getElementById("theme-toogle");
const body = document.body;

// Save theme Local
if (localStorage.getItem("theme")==="dark") {
    body.classList.add("dark");
    toogleBtn.textContent = "☀️";
}
toogleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toogleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toogleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
})