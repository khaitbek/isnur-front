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
    if (category === "all") return products.data;
    return products.data.filter(product => product.category === category);
}

export function renderProducts(
    products,
    list,
    template,

) {
    if (!products) return
    // clear the product list
    if (list) list.innerHTML = "";
    const productFragment = document.createDocumentFragment()
    products.forEach((product) => {
        const productTemplateClone =
            template?.content.cloneNode(true).children[0]
        if (productTemplateClone) {
            productTemplateClone.querySelector("[data-title]").textContent =
                product.nameRu
            productTemplateClone.querySelector("[data-text]").textContent =
                product.descriptionRu
            productTemplateClone.querySelector(
                "img"
            ).src = `https://isnur-backend-production.up.railway.app/${product.imgOne || product.image}`
            productTemplateClone.querySelector(
                "a"
            ).href = `../pages/product.html?product_id=${product.id}`
            productFragment.appendChild(productTemplateClone)
        }
    })
    list?.appendChild(productFragment)
}