// Toggle visibility of sections
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const targetId = (e.target as HTMLElement).dataset.target;
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
            if (targetElement.style.display === 'none' || !targetElement.style.display) {
                targetElement.style.display = 'block';
            } else {
                targetElement.style.display = 'none';
            }
        }
    });
});

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn?.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});