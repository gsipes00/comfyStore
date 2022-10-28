// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items
const cartItemCountDom = getElement(".cart-item-count");
const cartItemsDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    // spreading product parameters out, allows to add aditional parameters such as amount
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the dom
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    // use spread operator to turn node list to an array
    const items = [...cartItemsDom.querySelectorAll(".cart-item-amount")];
    console.log(items);
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart total
  displayCartTotal();
  // set cart in local storage
  setStorageItem("cart", cart);
  // more stuff
  openCart();
};
function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDom.textContent = amount;
  console.log(`amount is ${amount}`);
}
function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDom.textContent = `total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}
// update data and dom for item counts
function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
function setupCartFuncionality() {}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFuncionality();
};
init();
