// Project 9 Additions

// Add toggle switch and the body element
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

// Check for the user's preference in local storage
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
    body.classList.add("dark-mode");
    modeToggle.checked = true;
}

// Adding event listener to the toggle switch
modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
    }
});

// End of Project 9 Additions
