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
const cartItemCountDom  = getElement('.cart-item-count')
const cartItemsDom = getElement('.cart-items')
const cartTotalDom = getElement('.cart-total')

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem)=> cartItem.id === id)
  if(!item){
    let product = findProduct(id)
    // add item to the cart
    // spreading product parameters out, allows to add aditional parameters such as amount
    product = {...product, amount:1}
    
    cart = [...cart, product]
    
    // add item to the dom
    addToCartDOM(product)
  } else {

  }
  
  openCart();
};

const init = ()=>{
console.log(cart)
}
init()
