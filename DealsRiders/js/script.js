// Verificar se o link está acessado no momento e se acessado dar um estilo a ele.

const links = document.querySelectorAll(".header-menu a");

links.forEach(ativarLink);

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

// Ativar itens do orçamento com as informações da URL

const parametros = new URLSearchParams(location.search);

parametros.forEach(ativarProduto);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

// Perguntas frequentes, esconder ou mostrar com funcionalidade de acessibilidade

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(eventosPerguntas);

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(resposta);
}

// Galeria de Motocicletas

const galeria = document.querySelectorAll(".motocicleta-imgs img");
const galeriaContainer = document.querySelector(".motocicleta-imgs");

galeria.forEach(eventosGaleria);

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width:943px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

// Animação

if (window.SimpleAnime) {
new SimpleAnime();
}