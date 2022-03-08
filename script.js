//passo 6 - criacao de uma function para isolar o codigo
function initAccordion() {
  // passo 1 - variavel com uma nodelist
  const accordionList = document.querySelectorAll(".js-accordion dt");
  // passo 5 - criacao da variavel activeClass evitando repeticoes de strings
  const activeClass = "ativo";
  // passo 4 - activeClass add ao primeiro dt e dd
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  // passo 8 - verificacao da variavel accordionList (se true executar codigo)
  if (accordionList.length) {
    // passo 3 - function que add ativo em dt e dd e retira ao clique (toggle)
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    // passo2 - looping add evento ao click com function de callback
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

//passo 7 - ativacao da function
initAccordion();
