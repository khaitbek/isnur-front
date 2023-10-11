import "./js/nav.js"
// import "./js/splide.min.js"
import "./styles/main.css"
import "./styles/preloader.css"
import "./styles/splide-sea-green.min.css"
import "./styles/splide.min.css"
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader")
    if (!preloader) return
    setTimeout(() => {
        preloader.style.left = `-3000px`
        preloader.style.right = `3000px`
    }, 2000)
})
