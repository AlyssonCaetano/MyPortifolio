
    // Simulação do carregamento com barra de progresso
    document.addEventListener("DOMContentLoaded", function() {
      let progress = 0;
      const loaderBar = document.getElementById("loader-bar");
      const loaderPercentage = document.getElementById("loader-percentage");
      const loader = document.getElementById("loader");

      let interval = setInterval(() => {
        // Incremento aleatório para simular o progresso
        progress += Math.floor(Math.random() * 3) + 1;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          // Ao atingir 100%, aguarda um instante e esmaece o loader
          setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.5s ease";
            setTimeout(() => {
              loader.style.display = "none";
            }, 500);
          }, 500);
        }
        // Atualiza a altura da barra e o texto da porcentagem
        loaderBar.style.height = progress + "%";
        loaderPercentage.innerText = progress + "%";
      }, 30);

      // Alterna a exibição do menu em telas pequenas
      const menuToggle = document.getElementById('mobile-menu');
      const navMenu = document.getElementById('nav-menu');
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    });
