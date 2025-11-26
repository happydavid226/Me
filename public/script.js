const themeToggle = document.getElementById('theme-toggle');
const yearEl = document.getElementById('year');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const setThemeIcon = (isLight) => {
    if (!themeToggle) return;
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
};

const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const shouldUseLight = savedTheme
        ? savedTheme === 'light'
        : !prefersDarkScheme.matches;

    document.documentElement.classList.toggle('light', shouldUseLight);
    setThemeIcon(shouldUseLight);
};

initializeTheme();

prefersDarkScheme.addEventListener('change', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return;
    const isLight = !event.matches;
    document.documentElement.classList.toggle('light', isLight);
    setThemeIcon(isLight);
});

themeToggle?.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    setThemeIcon(isLight);
});

