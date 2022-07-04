class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let paragraph = document.createElement("p");
    paragraph.innerText =
      "This paragraph has been dynamically added by JavaScript!";
    this.mainContainerEl.append(paragraph);
  }
}

module.exports = View;
