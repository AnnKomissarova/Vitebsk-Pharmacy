const likeBtns =  document.querySelectorAll("#svg_2");

likeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");
  });
});  