  // Seleciona o botão do menu e o elemento UL
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  // Adiciona o evento de clique para alternar a classe 'show'
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });