const Modal = {
  div: document.querySelector("div"),
  toggleVisibility: () => {
    Modal.div.classList.toggle("invisible");
  },
};

const Elements = {
  button: document.querySelector("#open-modal"),

  addEvents: () => {
    Elements.button.onclick = (event) => {
      Modal.toggleVisibility();
    };
    document.onkeydown = (event) => {
      if (event.key == "Escape") {
        Modal.toggleVisibility();
      }
    };
  },
};

Elements.addEvents();
