function displayMessage() {
    alert("Hello, welcome to my personal profile page!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
    alert(`Switched to ${mode}`);
}
