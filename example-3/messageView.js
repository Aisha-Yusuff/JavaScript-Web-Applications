class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
    this.hideButtonEl = document.querySelector("#hide-message-button");
    this.hideButtonEl.addEventListener("click", () => {
      this.hideMessage();
    });
    this.inputValue = document.querySelector("#message-input");
  }
  displayMessage() {
    let div = document.createElement("div");
    div.setAttribute("id", "message");
    div.innerHTML = this.inputValue.value;
    this.mainContainerEl.append(div);
    console.log("Thanks for clicking me!");
  }
  hideMessage() {
    document.querySelector("#message").remove();
  }
}

module.exports = MessageView;
