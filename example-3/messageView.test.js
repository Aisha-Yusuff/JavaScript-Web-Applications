/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const inputEl = document.querySelector("#message-input");
    inputEl.value = "The message input";

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message").innerHTML).toEqual(
      "The message input"
    );
    expect(document.querySelector("#message")).not.toBeNull();
  });

  it("removes the message when the user click the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();
    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();
    const hideButtonEl = document.querySelector("#hide-message-button");
    hideButtonEl.click();
    expect(document.querySelector("#message")).toBeNull();
  });
});
