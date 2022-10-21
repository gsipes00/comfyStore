import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");
// store function
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("store", store);
};

// console.log(store);
const findProduct = (id) => {
  let product = store.find((product)=>product.id === id)
  return product
};
export { store, setupStore, findProduct };

// video 416 Setup Store ~9min explains:
// 1) How to destructure the nested json response as depicted in the code above
// 2) How console logging the store variable returns a [], since the setupStore function
// is being called after the console log for store in this script.
