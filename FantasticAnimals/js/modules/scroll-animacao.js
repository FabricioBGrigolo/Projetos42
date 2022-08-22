// Anima as sections durante o scroll da página
export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-js="scroll"]');

    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }
  
    if (sections.length) {
      window.addEventListener("scroll", animaScroll);
      animaScroll();
    }
  }
  