const toggleBtn = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

// Create an overlay div for clicking outside to close
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
body.appendChild(overlay);

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close sidebar when clicking the overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});