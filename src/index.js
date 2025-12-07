function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "a poem of your choosing",
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", createPoem);
