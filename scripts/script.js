const likeBtns =  document.querySelectorAll("#svg_2");

likeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");
  });
});
  
const productCards = document.querySelectorAll("#product-cards");
const blockBtn = document.querySelector("#blocks-btn");
const ulListBtn = document.querySelector("#ul-list-btn");

productCards.forEach((cards) => {
  blockBtn.addEventListener("click", () => {
    cards.classList.remove("row-cols-md-1");
    cards.classList.add("row-cols-md-4");
    });  
});

productCards.forEach((cards) => {
  ulListBtn.addEventListener("click", () => {
    cards.classList.remove("row-cols-md-4");
    cards.classList.add("row-cols-md-1");
  });
});