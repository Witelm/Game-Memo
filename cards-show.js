/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class CardShow {
  constructor(element) {
    this.element = element;

    this.cardList = window.application.cards;

    this.render();

    this.cardsClick = this.cardsClick.bind(this);
    document
      .querySelector(".card__form")
      .addEventListener("click", this.cardsClick);

    this.buttonBeginNewGameHandler = this.buttonBeginNewGameHandler.bind(this);
    document
      .querySelector(".btn__new_game")
      .addEventListener("click", this.buttonBeginNewGameHandler);
  }

  render() {
    this.element.appendChild(templateEngine(CardShow.template));
    this.renderItem();
  }

  renderItem(item) {
    this.element.lastChild.appendChild(
      templateEngine(this.cardList.map(CardShow.templateItem))
    );

    const shirtBegin = () => {
      this.element.lastChild.innerHTML = "";
      this.element.lastChild.appendChild(
        templateEngine(this.cardList.map(CardShow.templateItemShirt))
      );
      const btn = document.querySelector(".btn__new_game");
      btn.removeAttribute("disabled");
      btn.classList.add("active");
    };

    setTimeout(shirtBegin, 5000);
  }

  cardsClick(event) {
    const target = event.target;
    console.log("click card");
    console.dir(target);
  }

  buttonBeginNewGameHandler() {
    this.element.innerHTML = "";
    window.application = {
      level: "",
      time: "",
      status: "",
      cards: "",
      screen: "",
    };
    const Complex_Screen = new ComplexScreen(app);
  }
}

CardShow.template = {
  tag: "div",
  cls: "card__form",
};

CardShow.templateItem = (item) => ({
  tag: "img",
  cls: "img__style",
  attrs: {
    src: `./images/${item}.jpg`,
  },
});

CardShow.templateItemShirt = () => ({
  tag: "img",
  cls: "img__style",
  attrs: {
    src: `./images/shirt.jpg`,
  },
});
