import { getCarousels, getProducts, renderProducts } from "./lib.js"

const hamburgerBtn = document.querySelector(".hamburger-btn")
const sidebar = document.querySelector("#navbar .container")
const closeBtn = document.querySelector(".close-btn")
const navbar = document.querySelector("#navbar")
const switchBtn = document.querySelector(".switch")
const carouselList = document.querySelector('[data-list="product"]')
const productCards = document.querySelector('[data-list="productCards"]')
const productTemplate = document.querySelector('[data-template="product"]')
const productCardTemplate = document.querySelector(
    '[data-template="productCard"]'
)

function initializeSplide() {
    let splide = new Splide(".splide")
    let bar = document.querySelector(".my-slider-progress-bar")
    splide.on("mounted move", function () {
        let end = splide.Components.Controller.getEnd() + 1
        let rate = Math.min((splide.index + 1) / end, 1)
        bar.style.width = String(100 * rate) + "%"
    })
    splide.mount()
}

function handleScroll() {
    if (window.scrollY === 0) {
        navbar.style.boxShadow = `none`
        navbar.style.paddingBottom = `40px`
    } else {
        navbar.style.boxShadow = `0 0 10px rgba(0, 0, 0, .6)`
        navbar.style.paddingBottom = `20px`
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

hamburgerBtn.addEventListener("click", () => {
    sidebar.style.left = 0
    closeBtn.style.display = "block"
    sidebar.style.opacity = 1
})

closeBtn.addEventListener("click", () => {
    sidebar.style.left = `-1000px`
    closeBtn.style.display = "none"
    sidebar.style.opacity = 0
})

// switchBtn.addEventListener('click', (e) => {
//     if (!e.target.checked) {
//         document.body.style.background = `#222`
//     } else {
//         document.body.style.background = `#fff`
//     }
// })
document.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts()
    const carousels = await getCarousels();
    renderProducts(carousels.data, carouselList, productTemplate)
    renderProducts(products.data, productCards, productCardTemplate)
    initializeSplide()
})
window.addEventListener("scroll", handleScroll)
