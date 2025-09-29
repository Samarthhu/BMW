// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Simple contact form submission handler
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We will get back to you soon.');
});
