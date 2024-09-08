// Toggle visibility of sections
var toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var targetId = e.target.dataset.target;
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            if (targetElement.style.display === 'none' || !targetElement.style.display) {
                targetElement.style.display = 'block';
            }
            else {
                targetElement.style.display = 'none';
            }
        }
    });
});
// Dark mode toggle
var themeToggleBtn = document.getElementById('theme-toggle');
var bodyElement = document.body;
themeToggleBtn === null || themeToggleBtn === void 0 ? void 0 : themeToggleBtn.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');
});
