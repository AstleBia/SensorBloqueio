// Função para controlar as imagens caindo
window.onload = function() {
    const images = document.querySelectorAll('.falling-image');
  
    // Para cada imagem, definir um valor aleatório de dispersão horizontal
    images.forEach(image => {
      const randomX = Math.random() * 90 + '%';  // Valor aleatório entre 0% e 90%
      image.style.setProperty('--random-x', randomX); // Atribui o valor ao CSS da imagem
  
         // Marca as imagens como "caídas" e fixa no rodapé após a animação
      setTimeout(() => {
        image.classList.add('fallen');
      }, 8000); // Aguarda o fim da animação de queda (8 segundos)
    });
    
    // Exibe a mensagem de boas-vindas após todas as imagens caírem
    setTimeout(() => {
      document.getElementById('welcomeMessage').style.display = 'block';
    }, 8000); // A mensagem aparece depois que as imagens terminam de cair
  };
  
  // Função para fechar a mensagem de boas-vindas
  function closeWelcomeMessage() {
    document.getElementById('welcomeMessage').style.display = 'none';
  }