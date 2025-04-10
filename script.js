document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.expand-icon');

    // Alterna a visibilidade da resposta
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Alterna o ícone de expansão
    if (answer.style.display === 'block') {
      icon.src = 'img/iconexp.svg';  // Ícone para "menos"
    } else {
      icon.src = 'img/iconexp.svg';  // Ícone para "mais"
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;
  const navLinks = document.querySelectorAll('.slider-nav a');

  // Função para atualizar o estado do botão ativo na navegação
  function updateNav() {
    navLinks.forEach((link, index) => {
      if (index === currentIndex) {
        link.classList.add('active');  // Marca o link correspondente ao slide atual
      } else {
        link.classList.remove('active');  // Remove a classe active dos outros
      }
    });
  }

  // Autoplay
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    const newScrollPosition = slider.offsetWidth * currentIndex;
    slider.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    updateNav();  // Atualiza o botão ativo
  }, 3000); // Troca de slide a cada 3 segundos

  // Marcar o primeiro link como ativo ao carregar a página
  updateNav();

  // Adicionando evento de clique para a navegação manual
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      currentIndex = index;
      const newScrollPosition = slider.offsetWidth * currentIndex;
      slider.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      updateNav();  // Atualiza o botão ativo
    });
  });
});
