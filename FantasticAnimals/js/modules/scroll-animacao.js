// Anima as sections durante o scroll da página
export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    window.addEventListener("scroll", animaScroll);

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();
  }
}

