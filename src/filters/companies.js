import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  // ES6 Set constructor, returns unique values from the products list as an object.
  // use brackets with spread operator to return the object to an array
  // hard-coded the "all" value at the beginning
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
