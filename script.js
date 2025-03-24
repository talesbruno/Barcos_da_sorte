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


function smoothScroll() {
  const section = document.getElementById("ganhadores");
  section.scrollIntoView({ behavior: "smooth" });
}

