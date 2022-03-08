# Accordion-list

* criacao da vairavel js-accordion no primeiro dl

* criacao da variavel (accordionList dt) com querySelectorAll  para criar a referencia

* Adicionar um evento de clique em cada item (dt) com forEach atraves da funcao 

* ```activeAccordion
  accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
  });
  ```

* Não ativar a funcao em forEach apenas passar o nome

* ```FUNCAO
  function activeAccordion(){
      this.nextElementSibling.classList.add("ativo")
  }
  ```

* THIS faz referencia ao item clicado

* nextElementSibling seleciona o proximo elemento

* a classe ativo foi adicionada a dl

* ```adicionar
  function activeAccordion(){
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo")
  }
  ```

* No CSS selecionar js-accordion dd e mudar display para **none**

* em js-accordion dt ::after inserir seta baixo asc ii com content: 

* em js-accordion dt.ativo::after inserir seta cima asc ii 

* em js-accordion dd.ativo adicionar display block

* criar @keyframes slideDown from opacity 0% para to opacity:1

* inserir em js-accordion dd.ativo animation: slideDown .5s forwards

* ```classe ativo no primeiro dt``` 
  accordionList[0].classList.add("ativo");
  accordionList[0].nextElementSibling.classList.add("ativo");
  ```

* criar a const ativo para substituir strings repetidas

* Inserir todo o codigo dentro de uma funcao

* E fazer validacao com if() para prevenir erros

```funcao initAccordion
function initAccordion(){
const accordionList = document.querySelectorAll(".js-accordion dt");
const activeClass = "ativo";
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling();
        }
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        })
    }
}

initAccordion();
```

* ativar a funcao initAccordion
