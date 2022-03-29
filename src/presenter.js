import sumarCadena from "./CCadenas";

const cadena_input = document.querySelector("#cadena");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = cadena_input.value;

  div.innerHTML = "<p>" + sumarCadena(cadena) + "</p>";
});
