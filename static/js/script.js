document.addEventListener('DOMContentLoaded', () => {
    // Função para ajustar o tamanho das imagens dinamicamente
    const images = document.querySelectorAll('.function img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            if (window.innerWidth >= 768) {
                img.style.maxWidth = '200px';
            } else {
                img.style.maxWidth = '100%';
            }
        });
    });

    // Ajustar imagens quando a janela for redimensionada
    window.addEventListener('resize', () => {
        images.forEach(img => {
            if (window.innerWidth >= 768) {
                img.style.maxWidth = '200px';
            } else {
                img.style.maxWidth = '100%';
            }
        });
    });

    // Smooth scroll to ramais-list
    const ramaisLink = document.querySelector('a[href="#ramais-list"]');
    if (ramaisLink) {
        ramaisLink.addEventListener('click', (e) => {
            e.preventDefault();
            const ramaisList = document.getElementById('ramais-list');
            if (ramaisList) {
                ramaisList.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});