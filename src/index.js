function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();

  let userData = document.querySelector("#user-data");
  let apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";
  let prompt = `generate a poem about ${userData.value}`;
  let context = "no more than 12 words total";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.innerHTML = "Generating poem...";

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", createPoem);
