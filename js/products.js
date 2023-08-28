import { filterProducts, getProducts, renderProducts } from "../js/lib.js"
const products = await getProducts(0, 100)
const productTemplate = document.querySelector(
    "[data-template='productPageTemplate']"
)
const categoryList = document?.querySelector("[data-list='category']")
const productsList = document.querySelector("[data-list='allProducts']")
categoryList?.addEventListener("click", async (evt) => {
    const targetElem = evt.target
    if (targetElem.matches("[data-category]")) {
        const category = targetElem.dataset.category
        const filteredProducts = await filterProducts(category, 0, 20)
        renderProducts(filteredProducts, productsList, productTemplate)
    }
})

renderProducts(products.data, productsList, productTemplate)
