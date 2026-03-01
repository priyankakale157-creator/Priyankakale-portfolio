// =====================
// Dark Mode Toggle
// =====================
const themeBtn = document.getElementById('theme-btn');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.innerHTML = '&#9728;';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  themeBtn.innerHTML = dark ? '&#9728;' : '&#9790;';
});

// =====================
// Scroll Reveal
// =====================
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// =====================
// Skill Bar Animation
// =====================
const skillBars = document.querySelectorAll('.sk-fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-width') + '%';
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));
