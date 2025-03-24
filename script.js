// Activar animacions amb AOS.js
AOS.init({
  duration: 800,
  once: true,
});

// Scroll suau per enllaços del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
