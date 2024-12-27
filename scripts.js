// Scroll suave para as seções do site ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('header').offsetHeight; // Pega a altura do cabeçalho
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
