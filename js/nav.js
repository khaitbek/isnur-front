const hamburgerBtn = document.querySelector(".hamburger-btn")
const sidebar = document.querySelector("#navbar .container")
const closeBtn = document.querySelector(".close-btn")
const navbar = document.querySelector("#navbar")

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


function handleScroll() {
    if (window.scrollY === 0) {
        navbar.style.boxShadow = `none`
        navbar.style.paddingBottom = `40px`
    } else {
        navbar.style.boxShadow = `0 0 10px rgba(0, 0, 0, .6)`
        navbar.style.paddingBottom = `20px`
    }
}


window.addEventListener("scroll", handleScroll)