import { getElement } from "../utils.js";
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");
const toggleCartBtn = document.querySelector(".toggle-cart");
toggleCartBtn.addEventListener("click", function () {
  cartOverlay.classList.add("show");
});
closeCartBtn.addEventListener("click", function () {
  cartOverlay.classList.remove("show");
});
export const openCart = () => {
  cartOverlay.classList.add("show");
};
