export async function getProducts(skip = 0, take = 10) {
    const products = await fetch(
        `https://isnur-backend-production.up.railway.app/api/v1/product?skip=${skip}&take=${take}`
    )
    return await products.json()
}

export async function getCarousels(skip = 0, take = 10) {
    const products = await fetch(
        `https://isnur-backend-production.up.railway.app/api/v1/carousel?skip=${skip}&take=${take}`
    )
    return await products.json()
}

export async function filterProducts(category, skip = 0, take = 10) {
    const products = await getProducts(skip, take)
    if (category === "all") return products.data
    return products.data
        .filter((product) => product.category === category)
        .slice(0, 3)
}

export function renderProducts(products, list, template, type = "product") {
    if (!products) return
    // clear the product list
    if (list) list.innerHTML = ""
    const productFragment = document.createDocumentFragment()
    products.forEach((product) => {
        const productTemplateClone =
            template?.content.cloneNode(true).children[0]
        if (productTemplateClone && type === "product") {
            productTemplateClone.querySelector("[data-title]").textContent =
                location.pathname.includes("uz")
                    ? product.nameUz
                    : product.nameRu
            productTemplateClone.querySelector("[data-text]").textContent =
                location.pathname.includes("uz")
                    ? product.descriptionUz
                    : product.descriptionRu
            productTemplateClone.querySelector(
                "img"
            ).src = `https://isnur-backend-production.up.railway.app/${
                product.imgOne || product.image
            }`
            productTemplateClone.querySelector("a").href =
                location.pathname.includes("uz")
                    ? `../pages/product-uz.html?product_id=${product.id}`
                    : `../pages/product.html?product_id=${product.id}`
            productFragment.appendChild(productTemplateClone)
        }
        if (productTemplateClone && type === "carousel") {
            console.log(productTemplateClone)
            productTemplateClone.querySelector("[data-title]").textContent =
                location.pathname.includes("uz")
                    ? product.nameUz
                    : product.nameRu
            productTemplateClone.querySelector("[data-text]").textContent =
                location.pathname.includes("uz")
                    ? product.descriptionUz
                    : product.descriptionRu
            productTemplateClone.style.backgroundImage = `url(https://isnur-backend-production.up.railway.app/${
                product.imgOne || product.image
            }`

            // productTemplateClone.querySelector(
            //     "img"
            // ).src = `https://isnur-backend-production.up.railway.app/${
            //     product.imgOne || product.image
            // }`
            // productTemplateClone.querySelector("a").href =
            //     location.pathname.includes("uz")
            //         ? `../pages/product-uz.html?product_id=${product.id}`
            //         : `../pages/product.html?product_id=${product.id}`
            productFragment.appendChild(productTemplateClone)
        }
    })
    list?.appendChild(productFragment)
}
