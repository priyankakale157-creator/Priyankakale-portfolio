// ===================================
// script.js
// ===================================

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Skill Bar Animation
  const skills = document.querySelectorAll(".skill-fill");

  const animateSkills = () => {
    const triggerPoint = window.innerHeight * 0.85;

    skills.forEach(skill => {
      const skillTop = skill.getBoundingClientRect().top;
      if (skillTop < triggerPoint) {
        const width = skill.getAttribute("data-width");
        skill.style.width = width + "%";
      }
    });
  };

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Trigger on load in case already in view

  // 2️⃣ Dark/Light Mode Toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved mode from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
});
