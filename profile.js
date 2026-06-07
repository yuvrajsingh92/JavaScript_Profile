let form = document.querySelector("form");
let main = document.querySelector(".main");
let inputs = document.querySelectorAll("input")
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let cart = document.createElement("div");
  cart.classList.add("main");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute(
    "src",inputs[0].value
  );

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent =inputs[3].value;

  profile.appendChild(img);

  cart.appendChild(profile);
  cart.appendChild(h3);
  cart.appendChild(h5);
  cart.appendChild(p);
  main.appendChild(cart);
});
