// Script opcional para agregar interactividad
document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.createElement('button');
    topButton.textContent = 'Back to Top';
    topButton.style.position = 'fixed';
    topButton.style.bottom = '20px';
    topButton.style.right = '20px';
    topButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    document.body.appendChild(topButton);
});
