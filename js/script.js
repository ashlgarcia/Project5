// Project 9 Additions

const modeToggle = document.getElementById('mode-toggle-checkbox');
const body = document.body;
const nav = document.querySelector('nav');

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    // Switch to dark mode
    body.classList.add('dark-mode');
    nav.classList.add('dark-mode');
  } else {
    // Switch back to light mode
    body.classList.remove('dark-mode');
    nav.classList.remove('dark-mode');
  }
});

// End of Project 9 Additions
