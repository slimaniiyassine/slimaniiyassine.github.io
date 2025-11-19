const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
