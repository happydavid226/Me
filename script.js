const themeToggle = document.getElementById('theme-toggle');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

// Simple theme toggle using the prefers-color-scheme media query
themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    const isLight = document.documentElement.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
});
