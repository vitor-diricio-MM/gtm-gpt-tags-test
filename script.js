// Adiciona evento de clique nos links da navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
    });
});