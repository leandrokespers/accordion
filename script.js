function initAccordion() {
  const accordionLlist = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  accordionLlist[0].classList.add(activeClass);
  accordionLlist[0].nextElementSibling.classList.add(activeClass);
  if (accordionLlist.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionLlist.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
