document.addEventListener("DOMContentLoaded", () => {
    const fallingImage = document.querySelector('.falling-image');
    const menu = document.querySelector('.cascading-menu');

    // Inicia a animação da imagem e menu em cascata
    setTimeout(() => {
        menu.style.opacity = 1;
    }, 2000); // Espera a animação da imagem terminar
});