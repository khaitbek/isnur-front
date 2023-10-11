import Splide from "@splidejs/splide"
import { getCarousels, getProducts, renderProducts } from "./lib.js"

const switchBtn = document.querySelector(".switch")
const carouselList = document.querySelector('[data-list="product"]')
const productCards = document.querySelector('[data-list="productCards"]')
const productTemplate = document.querySelector('[data-template="product"]')
const productCardTemplate = document.querySelector(
    '[data-template="productCard"]'
)

function initializeSplide() {
    try {
        let splide = new Splide(".splide")
        let bar = document.querySelector(".my-slider-progress-bar")
        if (!splide || !bar) return
        splide.on("mounted move", function () {
            let end = splide.Components.Controller.getEnd() + 1
            let rate = Math.min((splide.index + 1) / end, 1)
            bar.style.width = String(100 * rate) + "%"
        })
        splide.mount()
    } catch (error) {
        console.log(error);
    }
}

function initObserver() {
    const hiddenElements = document.querySelectorAll(".hidden")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            }
        })
    })
    hiddenElements.forEach((el) => observer.observe(el))
}

// switchBtn.addEventListener('click', (e) => {
//     if (!e.target.checked) {
//         document.body.style.background = `#222`
//     } else {
//         document.body.style.background = `#fff`
//     }
// })
document.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts()
    const carousels = await getCarousels()
    renderProducts(carousels.data, carouselList, productTemplate, "carousel")
    renderProducts(
        products.data.slice(0, 3),
        productCards,
        productCardTemplate,
        "product"
    )
    initializeSplide()
    initObserver()
})
